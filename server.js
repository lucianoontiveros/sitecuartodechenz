import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('Variables de entorno cargadas:');
console.log('MONGODB_USERNAME:', process.env.MONGODB_USERNAME ? '✓' : '✗');
console.log('MONGODB_PASSWORD:', process.env.MONGODB_PASSWORD ? '✓' : '✗');
console.log('MONGODB_CLUSTER:', process.env.MONGODB_CLUSTER ? '✓' : '✗');
console.log('MONGODB_DATABASE:', process.env.MONGODB_DATABASE ? '✓' : '✗');
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '✓' : '✗');
console.log('AUTHORIZED_EMAILS:', process.env.AUTHORIZED_EMAILS ? '✓' : '✗');
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

// Rate limiting específico para comentarios (más estricto)
const comentarioLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 3, // máximo 3 comentarios por hora por IP
  handler: (req, res) => {
    res.status(429).json({ error: 'Has excedido el límite de comentarios. Por favor espera 1 hora.' });
  },
  standardHeaders: true,
  legacyHeaders: false,
});


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

    // Crear índice compuesto para IP y fecha (para tracking de actividad sospechosa)
    await db.collection('comentarios').createIndex({ ipAddress: 1, fechaCreacion: -1 }).catch(err => {
      if (err.code !== 85) {
        console.error('Error al crear índice compuesto IP/fecha:', err);
      }
    });

    // Crear colección de IPs bloqueadas si no existe
    const blacklistedIPs = db.collection('blacklisted_ips');
    await blacklistedIPs.createIndex({ ipAddress: 1 }, { unique: true }).catch(err => {
      if (err.code !== 85) {
        console.error('Error al crear índice único en blacklisted_ips:', err);
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

// Middleware para verificar si la IP está bloqueada
const checkBlacklistedIP = async (req, res, next) => {
  try {
    const ipAddress = req.ip || req.connection.remoteAddress;
    const blacklistedIPs = db.collection('blacklisted_ips');
    const blockedIP = await blacklistedIPs.findOne({ 
      ipAddress, 
      activo: true 
    });
    
    if (blockedIP) {
      console.log(`IP bloqueada intentando acceder: ${ipAddress}`);
      return res.status(403).json({ 
        error: 'Tu dirección IP ha sido bloqueada por actividad sospechosa' 
      });
    }
    
    next();
  } catch (error) {
    console.error('Error al verificar IP bloqueada:', error);
    next(); // Permitir acceso si hay error en la verificación
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

app.post('/api/comentarios', checkBlacklistedIP, comentarioLimiter, async (req, res) => {
  try {
    const { token, googleId, nombre, email, comentario, estrellas } = req.body;
    
    console.log('Intento de crear comentario para googleId:', googleId);
    
    // Verificar autenticación con Google
    if (!token) {
      console.error('No se proporcionó token de autenticación');
      return res.status(401).json({ error: 'Autenticación requerida' });
    }

    // Verificar token de Google
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.VITE_GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    
    // Verificar que el googleId del token coincida con el proporcionado
    if (payload.sub !== googleId) {
      console.error('googleId no coincide con el token');
      return res.status(403).json({ error: 'Autenticación inválida' });
    }

    // Verificar que el email del token coincida con el proporcionado
    if (payload.email !== email) {
      console.error('email no coincide con el token');
      return res.status(403).json({ error: 'Autenticación inválida' });
    }
    
    // Verificar si el usuario ya tiene un comentario
    const comentariosCollection = db.collection('comentarios');
    const comentarioExistente = await comentariosCollection.findOne({ googleId });
    
    if (comentarioExistente) {
      console.log('Comentario ya existe para googleId:', googleId);
      return res.status(400).json({ error: 'Ya tienes un comentario registrado' });
    }

    // Verificar si hay contenido duplicado (mismo comentario en las últimas 24 horas)
    const hace24Horas = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const comentarioDuplicado = await comentariosCollection.findOne({
      comentario: comentario.trim(),
      fechaCreacion: { $gte: hace24Horas }
    });

    if (comentarioDuplicado) {
      console.log('Comentario duplicado detectado:', comentario);
      return res.status(400).json({ error: 'Este comentario ya fue registrado recientemente' });
    }

    // Verificar actividad sospechosa por IP (más de 5 comentarios en 1 hora)
    const hace1Hora = new Date(Date.now() - 60 * 60 * 1000);
    const comentariosPorIP = await comentariosCollection.countDocuments({
      ipAddress: req.ip || req.connection.remoteAddress,
      fechaCreacion: { $gte: hace1Hora }
    });

    if (comentariosPorIP >= 5) {
      console.log('Actividad sospechosa detectada por IP:', req.ip);
      return res.status(429).json({ error: 'Actividad sospechosa detectada. Por favor contacta al administrador.' });
    }
    
    const nuevoComentario = {
      googleId,
      nombre,
      email,
      comentario,
      estrellas,
      fechaCreacion: new Date(),
      activo: true,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.headers['user-agent'] || 'unknown'
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

// Endpoint para revisar actividad sospechosa (solo admin)
app.get('/api/admin/comentarios/sospechosos', authenticateToken, async (req, res) => {
  try {
    const comentariosCollection = db.collection('comentarios');
    
    // Encontrar IPs con más de 5 comentarios en las últimas 24 horas
    const hace24Horas = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const ipsSospechosas = await comentariosCollection.aggregate([
      {
        $match: {
          fechaCreacion: { $gte: hace24Horas }
        }
      },
      {
        $group: {
          _id: '$ipAddress',
          count: { $sum: 1 },
          comentarios: {
            $push: {
              _id: '$_id',
              nombre: '$nombre',
              email: '$email',
              comentario: '$comentario',
              fechaCreacion: '$fechaCreacion',
              userAgent: '$userAgent'
            }
          }
        }
      },
      {
        $match: {
          count: { $gte: 3 }
        }
      },
      { $sort: { count: -1 } }
    ]).toArray();

    // Encontrar comentarios duplicados
    const comentariosDuplicados = await comentariosCollection.aggregate([
      {
        $match: {
          fechaCreacion: { $gte: hace24Horas }
        }
      },
      {
        $group: {
          _id: '$comentario',
          count: { $sum: 1 },
          comentarios: { $push: '$_id' }
        }
      },
      {
        $match: {
          count: { $gte: 2 }
        }
      }
    ]).toArray();

    res.json({
      ipsSospechosas,
      comentariosDuplicados,
      totalIPsSospechosas: ipsSospechosas.length,
      totalComentariosDuplicados: comentariosDuplicados.length
    });
  } catch (error) {
    console.error('Error al obtener actividad sospechosa:', error);
    res.status(500).json({ error: 'Error al obtener actividad sospechosa' });
  }
});

// Endpoint para marcar comentarios como spam (solo admin)
app.put('/api/admin/comentarios/:id/spam', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const comentariosCollection = db.collection('comentarios');
    
    const result = await comentariosCollection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          activo: false, 
          marcadoComoSpam: true, 
          razon: 'marcado_por_admin',
          fechaRevision: new Date(),
          revisadoPor: req.user.email
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    
    res.json({ message: 'Comentario marcado como spam' });
  } catch (error) {
    console.error('Error al marcar comentario como spam:', error);
    res.status(500).json({ error: 'Error al marcar comentario como spam' });
  }
});

// Endpoint para agregar IP a blacklist (solo admin)
app.post('/api/admin/blacklist-ip', authenticateToken, async (req, res) => {
  try {
    const { ipAddress, razon } = req.body;
    
    if (!ipAddress) {
      return res.status(400).json({ error: 'IP address es requerida' });
    }
    
    const blacklistedIPs = db.collection('blacklisted_ips');
    
    await blacklistedIPs.updateOne(
      { ipAddress },
      { 
        $set: { 
          ipAddress, 
          activo: true, 
          razon: razon || 'actividad_sospechosa',
          fechaBloqueo: new Date(),
          bloqueadoPor: req.user.email
        } 
      },
      { upsert: true }
    );
    
    res.json({ message: 'IP agregada a blacklist' });
  } catch (error) {
    console.error('Error al agregar IP a blacklist:', error);
    res.status(500).json({ error: 'Error al agregar IP a blacklist' });
  }
});

// Endpoint para remover IP de blacklist (solo admin)
app.delete('/api/admin/blacklist-ip/:ipAddress', authenticateToken, async (req, res) => {
  try {
    const { ipAddress } = req.params;
    const blacklistedIPs = db.collection('blacklisted_ips');
    
    const result = await blacklistedIPs.updateOne(
      { ipAddress },
      { 
        $set: { 
          activo: false, 
          fechaDesbloqueo: new Date(),
          desbloqueadoPor: req.user.email
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'IP no encontrada en blacklist' });
    }
    
    res.json({ message: 'IP removida de blacklist' });
  } catch (error) {
    console.error('Error al remover IP de blacklist:', error);
    res.status(500).json({ error: 'Error al remover IP de blacklist' });
  }
});

// Endpoint para listar IPs en blacklist (solo admin)
app.get('/api/admin/blacklist-ip', authenticateToken, async (req, res) => {
  try {
    const blacklistedIPs = db.collection('blacklisted_ips');
    const ips = await blacklistedIPs.find({ activo: true }).toArray();
    
    res.json({ ips });
  } catch (error) {
    console.error('Error al obtener blacklist:', error);
    res.status(500).json({ error: 'Error al obtener blacklist' });
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
