import { MongoClient } from 'mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { userId, imageUrl, textColor } = req.body;

  if (!userId || !imageUrl || !textColor) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  try {
    await db.collection('users').updateOne(
      { _id: userId },
      { 
        $set: { 
          'subscriptionCard': {
            imageUrl,
            textColor,
            updatedAt: new Date()
          }
        } 
      },
      { upsert: true }
    );

    res.status(200).json({ message: 'Card saved successfully' });
  } catch (error) {
    console.error('Error saving card:', error);
    res.status(500).json({ message: 'Error saving card' });
  } finally {
    await client.close();
  }
}
