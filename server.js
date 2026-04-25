import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
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
  origin: process.env.VITE_FRONTEND_URL || 'http://localhost:5173',
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
const uri = `mongodb+srv://${process.env.VITE_MONGODB_USERNAME}:${process.env.VITE_MONGODB_PASSWORD}@${process.env.VITE_MONGODB_CLUSTER}/${process.env.VITE_MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(process.env.VITE_MONGODB_DATABASE);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectDB();

// Google OAuth Client
const oauth2Client = new OAuth2Client(
  process.env.VITE_GOOGLE_CLIENT_ID
);

// Emails autorizados para administración (separados por coma)
const AUTHORIZED_EMAILS = (process.env.VITE_AUTHORIZED_EMAILS || 'luciano.a.ontiveros@gmail.com')
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
    const decoded = jwt.verify(token, process.env.VITE_JWT_SECRET);
    req.user = decoded;
    req.tokenId = tokenRecord._id;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};

// Rutas de Autenticación
app.post('/api/auth/google', loginLimiter, async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: 'Base de datos no conectada' });
    }

    const { token } = req.body;
    
    // Verificar token de Google
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.VITE_GOOGLE_CLIENT_ID
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
      process.env.VITE_JWT_SECRET,
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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
