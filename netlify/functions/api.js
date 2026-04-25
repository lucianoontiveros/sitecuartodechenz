import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';

// MongoDB Connection
const uri = `mongodb+srv://${process.env.VITE_MONGODB_USERNAME}:${process.env.VITE_MONGODB_PASSWORD}@${process.env.VITE_MONGODB_CLUSTER}/${process.env.VITE_MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (db) return db;
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(process.env.VITE_MONGODB_DATABASE);
    
    // Crear índice único para googleId en comentarios
    await db.collection('comentarios').createIndex({ googleId: 1 }, { unique: true }).catch(err => {
      if (err.code !== 85) {
        console.error('Error al crear índice único:', err);
      }
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
  return db;
}

// Google OAuth Client
const oauth2Client = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID);

// Emails autorizados
const AUTHORIZED_EMAILS = (process.env.VITE_AUTHORIZED_EMAILS || 'luciano.a.ontiveros@gmail.com')
  .split(',')
  .map(email => email.trim().toLowerCase());

// Middleware de autenticación
const authenticateToken = async (token) => {
  if (!token) {
    throw new Error('Token requerido');
  }

  const database = await connectDB();
  const tokensCollection = database.collection('tokens');
  const tokenRecord = await tokensCollection.findOne({ token, activo: true });
  
  if (!tokenRecord) {
    throw new Error('Token inválido o revocado');
  }

  const decoded = jwt.verify(token, process.env.VITE_JWT_SECRET);
  return { user: decoded, tokenId: tokenRecord._id };
};

// Handler principal
export async function handler(event, context) {
  const { path, httpMethod, body, headers } = event;
  
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': process.env.VITE_FRONTEND_URL || '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': 'true'
  };

  // Handle OPTIONS request
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    };
  }

  try {
    const database = await connectDB();
    let requestBody = body;
    
    if (typeof body === 'string') {
      try {
        requestBody = JSON.parse(body);
      } catch (e) {
        requestBody = {};
      }
    }

    // Rutas
    if (path === '/api/auth/google-comment' && httpMethod === 'POST') {
      const { token } = requestBody;
      
      if (!token) {
        return {
          statusCode: 400,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'No se proporcionó token' })
        };
      }
      
      const ticket = await oauth2Client.verifyIdToken({
        idToken: token,
        audience: process.env.VITE_GOOGLE_CLIENT_ID
      });
      
      const payload = ticket.getPayload();
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
          user: {
            sub: payload.sub,
            nombre: payload.name,
            email: payload.email
          }
        })
      };
    }

    if (path === '/api/auth/google' && httpMethod === 'POST') {
      const { token } = requestBody;
      
      const ticket = await oauth2Client.verifyIdToken({
        idToken: token,
        audience: process.env.VITE_GOOGLE_CLIENT_ID
      });
      
      const payload = ticket.getPayload();
      const userEmail = payload.email.toLowerCase();
      
      if (!AUTHORIZED_EMAILS.includes(userEmail)) {
        return {
          statusCode: 403,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'No tienes permiso para acceder al panel de administración' })
        };
      }
      
      const usersCollection = database.collection('usuarios');
      let user = await usersCollection.findOne({ email: payload.email });
      
      if (!user) {
        const result = await usersCollection.insertOne({
          email: payload.email,
          nombre: payload.name,
          rol: 'admin',
          fechaRegistro: new Date(),
          activo: true
        });
        user = { ...result, _id: result.insertedId };
      }
      
      const jwtToken = jwt.sign(
        { userId: user._id, email: user.email, rol: user.rol },
        process.env.VITE_JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      const tokensCollection = database.collection('tokens');
      await tokensCollection.insertOne({
        token: jwtToken,
        userId: user._id,
        email: user.email,
        fechaCreacion: new Date(),
        fechaExpiracion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        activo: true,
        userAgent: headers['user-agent'] || 'unknown',
        ipAddress: event.headers['client-ip'] || 'unknown'
      });
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
          token: jwtToken,
          user: {
            email: user.email,
            nombre: user.nombre,
            rol: user.rol
          }
        })
      };
    }

    if (path === '/api/auth/logout' && httpMethod === 'POST') {
      const authHeader = headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      
      const { tokenId } = await authenticateToken(token);
      const tokensCollection = database.collection('tokens');
      
      await tokensCollection.updateOne(
        { _id: tokenId },
        { $set: { activo: false, fechaRevocacion: new Date() } }
      );
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Sesión cerrada correctamente' })
      };
    }

    if (path === '/api/avisos' && httpMethod === 'GET') {
      const avisosCollection = database.collection('avisos');
      const avisos = await avisosCollection
        .find({})
        .sort({ fechaCreacion: -1 })
        .toArray();
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(avisos)
      };
    }

    if (path === '/api/avisos' && httpMethod === 'POST') {
      const authHeader = headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const { user } = await authenticateToken(token);
      
      const aviso = {
        ...requestBody,
        fechaCreacion: new Date(),
        autorEmail: user.email,
        activo: true
      };
      
      const avisosCollection = database.collection('avisos');
      const result = await avisosCollection.insertOne(aviso);
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ ...aviso, _id: result.insertedId })
      };
    }

    if (path.startsWith('/api/avisos/') && httpMethod === 'PUT') {
      const id = path.split('/').pop();
      const authHeader = headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      await authenticateToken(token);
      
      const avisosCollection = database.collection('avisos');
      const result = await avisosCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: requestBody }
      );
      
      if (result.matchedCount === 0) {
        return {
          statusCode: 404,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Aviso no encontrado' })
        };
      }
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Aviso actualizado' })
      };
    }

    if (path.startsWith('/api/avisos/') && httpMethod === 'DELETE') {
      const id = path.split('/').pop();
      const authHeader = headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      await authenticateToken(token);
      
      const avisosCollection = database.collection('avisos');
      const result = await avisosCollection.deleteOne({ _id: new ObjectId(id) });
      
      if (result.deletedCount === 0) {
        return {
          statusCode: 404,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Aviso no encontrado' })
        };
      }
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Aviso eliminado' })
      };
    }

    if (path === '/api/comentarios' && httpMethod === 'GET') {
      const comentariosCollection = database.collection('comentarios');
      const comentarios = await comentariosCollection
        .find({ activo: true })
        .sort({ fechaCreacion: -1 })
        .toArray();
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(comentarios)
      };
    }

    if (path === '/api/comentarios' && httpMethod === 'POST') {
      const { googleId, nombre, email, comentario, estrellas } = requestBody;
      
      const comentariosCollection = database.collection('comentarios');
      const comentarioExistente = await comentariosCollection.findOne({ googleId });
      
      if (comentarioExistente) {
        return {
          statusCode: 400,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Ya tienes un comentario registrado' })
        };
      }
      
      const nuevoComentario = {
        googleId,
        nombre,
        email,
        comentario,
        estrellas,
        fechaCreacion: new Date(),
        activo: true
      };
      
      const result = await comentariosCollection.insertOne(nuevoComentario);
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ ...nuevoComentario, _id: result.insertedId })
      };
    }

    if (path.startsWith('/api/comentarios/') && httpMethod === 'PUT') {
      const id = path.split('/').pop();
      const { googleId, comentario, estrellas } = requestBody;
      
      const comentariosCollection = database.collection('comentarios');
      const comentarioExistente = await comentariosCollection.findOne({ _id: new ObjectId(id) });
      
      if (!comentarioExistente) {
        return {
          statusCode: 404,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Comentario no encontrado' })
        };
      }
      
      if (comentarioExistente.googleId !== googleId) {
        return {
          statusCode: 403,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'No tienes permiso para editar este comentario' })
        };
      }
      
      const result = await comentariosCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { comentario, estrellas, fechaActualizacion: new Date() } }
      );
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Comentario actualizado' })
      };
    }

    if (path.startsWith('/api/comentarios/') && httpMethod === 'DELETE') {
      const id = path.split('/').pop();
      const authHeader = headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      await authenticateToken(token);
      
      const comentariosCollection = database.collection('comentarios');
      const result = await comentariosCollection.deleteOne({ _id: new ObjectId(id) });
      
      if (result.deletedCount === 0) {
        return {
          statusCode: 404,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'Comentario no encontrado' })
        };
      }
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Comentario eliminado' })
      };
    }

    if (path === '/api/health' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ status: 'ok', message: 'Server is running' })
      };
    }

    return {
      statusCode: 404,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Ruta no encontrada' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message || 'Error interno del servidor' })
    };
  }
}
