import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${import.meta.env.VITE_MONGODB_USERNAME}:${import.meta.env.VITE_MONGODB_PASSWORD}@${import.meta.env.VITE_MONGODB_CLUSTER}/${import.meta.env.VITE_MONGODB_DATABASE}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
