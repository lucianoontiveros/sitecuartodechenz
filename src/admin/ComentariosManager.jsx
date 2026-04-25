import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import api from '../services/api';

export default function ComentariosManager() {
  const navigate = useNavigate();
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchComentarios();
  }, [navigate]);

  const fetchComentarios = async () => {
    try {
      const res = await api.get('/comentarios');
      setComentarios(res.data);
    } catch (error) {
      console.error('Error al cargar comentarios:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este comentario?')) return;
    
    try {
      await api.delete(`/comentarios/${id}`);
      fetchComentarios();
    } catch (error) {
      console.error('Error al eliminar comentario:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
  };

  const renderEstrellas = (estrellas) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < estrellas ? 'estrella-llena' : 'estrella-vacia'}>
        ★
      </span>
    ));
  };

  if (loading) {
    return <div className="loading-container">Cargando comentarios...</div>;
  }

  return (
    <div className="admin-avisos">
      <header className="admin-header">
        <div className="admin-header-content">
          <button onClick={() => navigate('/admin/dashboard')} className="back-btn">
            ← Volver
          </button>
          <h1>Gestión de Comentarios</h1>
        </div>
      </header>

      <main className="admin-main">
        <div className="avisos-list">
          {comentarios.length === 0 ? (
            <p className="no-avisos">No hay comentarios creados</p>
          ) : (
            comentarios.map((comentario) => (
              <div key={comentario._id} className="aviso-card">
                <div className="aviso-header">
                  <div className="comentario-user-info">
                    <div className="comentario-avatar-small">
                      {comentario.nombre.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3>{comentario.nombre}</h3>
                      <p className="comentario-email">{comentario.email}</p>
                    </div>
                  </div>
                  <div className="comentario-estrellas">
                    {renderEstrellas(comentario.estrellas)}
                  </div>
                </div>
                <p className="comentario-texto">{comentario.comentario}</p>
                <div className="aviso-actions">
                  <span className="comentario-fecha">{formatDate(comentario.fechaCreacion)}</span>
                  <button onClick={() => handleDelete(comentario._id)} className="delete-btn">
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
