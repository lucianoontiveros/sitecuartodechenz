import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de seguridad
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));

app.use(cors({
  origin: function (origin, callback) {
    // Lista de orígenes permitidos
    const allowedOrigins = [
      'http://localhost:5173',
      'https://cuartodechenzswm.netlify.app',
      process.env.FRONTEND_URL
    ].filter(Boolean); // Filtrar valores undefined/null
    
    // Permitir solicitudes sin origin (como mobile apps o herramientas de desarrollo)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());

// Rate limiting para login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // máximo 5 intentos por ventana
  handler: (req, res) => {
    res.status(429).json({ error: 'Demasiados intentos de login. Por favor intenta más tarde.' });
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting general
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    res.status(429).json({ error: 'Demasiadas solicitudes. Por favor intenta más tarde.' });
  },
});

app.use('/api/', apiLimiter);


// MongoDB Connection
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(process.env.MONGODB_DATABASE);
    
    // Crear índice único para googleId en comentarios para prevenir duplicados
    await db.collection('comentarios').createIndex({ googleId: 1 }, { unique: true }).catch(err => {
      if (err.code !== 85) { // Ignorar error si el índice ya existe
        console.error('Error al crear índice único:', err);
      }
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectDB();

// Google OAuth Client
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

// Emails autorizados para administración (separados por coma)
const AUTHORIZED_EMAILS = (process.env.AUTHORIZED_EMAILS || 'luciano.a.ontiveros@gmail.com')
  .split(',')
  .map(email => email.trim().toLowerCase());

// Middleware de autenticación con verificación de token activo
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    // Verificar si el token está activo en la base de datos
    const tokensCollection = db.collection('tokens');
    const tokenRecord = await tokensCollection.findOne({ token, activo: true });
    
    if (!tokenRecord) {
      return res.status(403).json({ error: 'Token inválido o revocado' });
    }

    // Verificar JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.tokenId = tokenRecord._id;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};

// Rutas de Autenticación
app.post('/api/auth/google-comment', async (req, res) => {
  try {
    console.log('Recibida solicitud de autenticación de comentarios');
    
    if (!db) {
      console.error('Base de datos no conectada');
      return res.status(500).json({ error: 'Base de datos no conectada' });
    }

    const { token } = req.body;
    
    if (!token) {
      console.error('No se proporcionó token');
      return res.status(400).json({ error: 'No se proporcionó token' });
    }
    
    console.log('Verificando token de Google...');
    // Verificar token de Google
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    console.log('Token verificado exitosamente para:', payload.email);
    
    // Devolver información del usuario sin restricciones de email
    res.json({
      user: {
        sub: payload.sub, // ID único de Google
        nombre: payload.name,
        email: payload.email
      }
    });
  } catch (error) {
    console.error('Error en autenticación de comentarios:', error);
    res.status(401).json({ error: 'Token de Google inválido: ' + error.message });
  }
});

app.post('/api/auth/google', loginLimiter, async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: 'Base de datos no conectada' });
    }

    const { token } = req.body;
    
    // Verificar token de Google
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    
    // VALIDACIÓN: Solo permitir emails autorizados
    const userEmail = payload.email.toLowerCase();
    
    if (!AUTHORIZED_EMAILS.includes(userEmail)) {
      console.error(`Intento de acceso no autorizado: ${payload.email}`);
      return res.status(403).json({ 
        error: 'No tienes permiso para acceder al panel de administración' 
      });
    }
    
    // Buscar o crear usuario
    const usersCollection = db.collection('usuarios');
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
    
    // Generar JWT
    const jwtToken = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        rol: user.rol 
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Guardar token en base de datos
    const tokensCollection = db.collection('tokens');
    await tokensCollection.insertOne({
      token: jwtToken,
      userId: user._id,
      email: user.email,
      fechaCreacion: new Date(),
      fechaExpiracion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 días
      activo: true,
      userAgent: req.headers['user-agent'] || 'unknown',
      ipAddress: req.ip || 'unknown'
    });
    
    res.json({ 
      token: jwtToken, 
      user: {
        email: user.email,
        nombre: user.nombre,
        rol: user.rol
      }
    });
  } catch (error) {
    console.error('Error en autenticación:', error);
    res.status(500).json({ error: 'Error en autenticación' });
  }
});

// Logout - Revocar token
app.post('/api/auth/logout', authenticateToken, async (req, res) => {
  try {
    const tokensCollection = db.collection('tokens');
    
    // Marcar token como inactivo
    await tokensCollection.updateOne(
      { _id: req.tokenId },
      { 
        $set: { 
          activo: false,
          fechaRevocacion: new Date()
        } 
      }
    );
    
    res.json({ message: 'Sesión cerrada correctamente' });
  } catch (error) {
    console.error('Error en logout:', error);
    res.status(500).json({ error: 'Error al cerrar sesión' });
  }
});

// Rutas de Avisos
app.get('/api/avisos', async (req, res) => {
  try {
    const avisosCollection = db.collection('avisos');
    const avisos = await avisosCollection
      .find({})
      .sort({ fechaCreacion: -1 })
      .toArray();
    res.json(avisos);
  } catch (error) {
    console.error('Error al obtener avisos:', error);
    res.status(500).json({ error: 'Error al obtener avisos' });
  }
});

app.post('/api/avisos', authenticateToken, async (req, res) => {
  try {
    const aviso = {
      ...req.body,
      fechaCreacion: new Date(),
      autorEmail: req.user.email,
      activo: true
    };
    
    const avisosCollection = db.collection('avisos');
    const result = await avisosCollection.insertOne(aviso);
    
    res.json({ ...aviso, _id: result.insertedId });
  } catch (error) {
    console.error('Error al crear aviso:', error);
    res.status(500).json({ error: 'Error al crear aviso' });
  }
});

app.put('/api/avisos/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const avisosCollection = db.collection('avisos');
    
    const result = await avisosCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Aviso no encontrado' });
    }
    
    res.json({ message: 'Aviso actualizado' });
  } catch (error) {
    console.error('Error al actualizar aviso:', error);
    res.status(500).json({ error: 'Error al actualizar aviso' });
  }
});

app.delete('/api/avisos/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const avisosCollection = db.collection('avisos');
    
    const result = await avisosCollection.deleteOne({
      _id: new ObjectId(id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Aviso no encontrado' });
    }
    
    res.json({ message: 'Aviso eliminado' });
  } catch (error) {
    console.error('Error al eliminar aviso:', error);
    res.status(500).json({ error: 'Error al eliminar aviso' });
  }
});

// Rutas de Comentarios
app.get('/api/comentarios', async (req, res) => {
  try {
    const comentariosCollection = db.collection('comentarios');
    const comentarios = await comentariosCollection
      .find({ activo: true })
      .sort({ fechaCreacion: -1 })
      .toArray();
    res.json(comentarios);
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    res.status(500).json({ error: 'Error al obtener comentarios' });
  }
});

app.post('/api/comentarios', async (req, res) => {
  try {
    const { googleId, nombre, email, comentario, estrellas } = req.body;
    
    console.log('Intento de crear comentario para googleId:', googleId);
    
    // Verificar si el usuario ya tiene un comentario
    const comentariosCollection = db.collection('comentarios');
    const comentarioExistente = await comentariosCollection.findOne({ googleId });
    
    if (comentarioExistente) {
      console.log('Comentario ya existe para googleId:', googleId);
      return res.status(400).json({ error: 'Ya tienes un comentario registrado' });
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
    
    console.log('Insertando nuevo comentario para:', nombre);
    const result = await comentariosCollection.insertOne(nuevoComentario);
    console.log('Comentario insertado con ID:', result.insertedId);
    res.json({ ...nuevoComentario, _id: result.insertedId });
  } catch (error) {
    console.error('Error al crear comentario:', error);
    
    // Si es error de duplicado (código 11000 de MongoDB)
    if (error.code === 11000) {
      console.log('Error de duplicado detectado por índice único');
      return res.status(400).json({ error: 'Ya tienes un comentario registrado' });
    }
    
    res.status(500).json({ error: 'Error al crear comentario' });
  }
});

app.put('/api/comentarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { googleId, comentario, estrellas } = req.body;
    const comentariosCollection = db.collection('comentarios');
    
    // Verificar que el comentario pertenece al usuario
    const comentarioExistente = await comentariosCollection.findOne({ _id: new ObjectId(id) });
    
    if (!comentarioExistente) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    
    if (comentarioExistente.googleId !== googleId) {
      return res.status(403).json({ error: 'No tienes permiso para editar este comentario' });
    }
    
    const result = await comentariosCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { comentario, estrellas, fechaActualizacion: new Date() } }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    
    res.json({ message: 'Comentario actualizado' });
  } catch (error) {
    console.error('Error al actualizar comentario:', error);
    res.status(500).json({ error: 'Error al actualizar comentario' });
  }
});

app.delete('/api/comentarios/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const comentariosCollection = db.collection('comentarios');
    
    const result = await comentariosCollection.deleteOne({
      _id: new ObjectId(id)
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    
    res.json({ message: 'Comentario eliminado' });
  } catch (error) {
    console.error('Error al eliminar comentario:', error);
    res.status(500).json({ error: 'Error al eliminar comentario' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
