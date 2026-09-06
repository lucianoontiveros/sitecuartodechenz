import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function cleanSpamComments() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(process.env.MONGODB_DATABASE);
    const comentariosCollection = db.collection('comentarios');

    // 1. Encontrar comentarios duplicados por IP (más de 5 en 1 hora)
    const hace1Hora = new Date(Date.now() - 60 * 60 * 1000);
    const spamByIP = await comentariosCollection.aggregate([
      {
        $match: {
          fechaCreacion: { $gte: hace1Hora }
        }
      },
      {
        $group: {
          _id: '$ipAddress',
          count: { $sum: 1 },
          comentarios: { $push: '$_id' }
        }
      },
      {
        $match: {
          count: { $gte: 5 }
        }
      }
    ]).toArray();

    console.log(`Encontrados ${spamByIP.length} IPs con actividad sospechosa:`);
    for (const ipGroup of spamByIP) {
      console.log(`IP ${ipGroup._id}: ${ipGroup.count} comentarios`);
      
      // Marcar como inactivos los comentarios de esta IP
      await comentariosCollection.updateMany(
        { ipAddress: ipGroup._id, fechaCreacion: { $gte: hace1Hora } },
        { $set: { activo: false, marcadoComoSpam: true, fechaRevision: new Date() } }
      );
      console.log(`Comentarios de IP ${ipGroup._id} marcados como spam`);
    }

    // 2. Encontrar comentarios con contenido duplicado
    const hace24Horas = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const duplicateComments = await comentariosCollection.aggregate([
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
          count: { $gte: 3 }
        }
      }
    ]).toArray();

    console.log(`\nEncontrados ${duplicateComments.length} comentarios con contenido duplicado (3+ veces):`);
    for (const dupGroup of duplicateComments) {
      console.log(`Comentario: "${dupGroup._id.substring(0, 50)}..." - ${dupGroup.count} veces`);
      
      // Mantener solo el primero, marcar el resto como spam
      const comentariosAEliminar = dupGroup.comentarios.slice(1);
      await comentariosCollection.updateMany(
        { _id: { $in: comentariosAEliminar } },
        { $set: { activo: false, marcadoComoSpam: true, razon: 'contenido_duplicado', fechaRevision: new Date() } }
      );
      console.log(`${comentariosAEliminar.length} comentarios duplicados marcados como spam`);
    }

    // 3. Estadísticas finales
    const totalComentarios = await comentariosCollection.countDocuments();
    const comentariosActivos = await comentariosCollection.countDocuments({ activo: true });
    const comentariosSpam = await comentariosCollection.countDocuments({ activo: false });

    console.log('\n=== Estadísticas Finales ===');
    console.log(`Total comentarios: ${totalComentarios}`);
    console.log(`Comentarios activos: ${comentariosActivos}`);
    console.log(`Comentarios marcados como spam: ${comentariosSpam}`);

    // 4. Mostrar IPs más activas (para revisión manual)
    console.log('\n=== Top 10 IPs más activas ===');
    const topIPs = await comentariosCollection.aggregate([
      {
        $group: {
          _id: '$ipAddress',
          count: { $sum: 1 },
          ultimoComentario: { $max: '$fechaCreacion' }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray();

    for (const ip of topIPs) {
      console.log(`IP ${ip._id}: ${ip.count} comentarios (último: ${ip.ultimoComentario})`);
    }

  } catch (error) {
    console.error('Error al limpiar comentarios:', error);
  } finally {
    await client.close();
    console.log('\nConexión cerrada');
  }
}

cleanSpamComments();
