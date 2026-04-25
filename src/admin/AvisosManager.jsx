import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

export default function AvisosManager() {
  const navigate = useNavigate();
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAviso, setEditingAviso] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    contenido: '',
    tipo: 'normal',
    activo: true,
    imagen: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchAvisos();
  }, [navigate]);

  const fetchAvisos = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/avisos', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      setAvisos(data);
    } catch (error) {
      console.error('Error al cargar avisos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const url = editingAviso ? `/api/avisos/${editingAviso._id}` : '/api/avisos';
      const method = editingAviso ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setShowForm(false);
        setEditingAviso(null);
        setFormData({ titulo: '', contenido: '', tipo: 'normal', activo: true, imagen: '' });
        fetchAvisos();
      }
    } catch (error) {
      console.error('Error al guardar aviso:', error);
    }
  };

  const handleEdit = (aviso) => {
    setEditingAviso(aviso);
    setFormData({
      titulo: aviso.titulo,
      contenido: aviso.contenido,
      tipo: aviso.tipo,
      activo: aviso.activo,
      imagen: aviso.imagen || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este aviso?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/avisos/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        fetchAvisos();
      }
    } catch (error) {
      console.error('Error al eliminar aviso:', error);
    }
  };

  const handleToggleActive = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/avisos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ activo: !currentStatus })
      });

      if (res.ok) {
        fetchAvisos();
      }
    } catch (error) {
      console.error('Error al actualizar aviso:', error);
    }
  };

  if (loading) {
    return <div className="loading-container">Cargando avisos...</div>;
  }

  return (
    <div className="admin-avisos">
      <header className="admin-header">
        <div className="admin-header-content">
          <button onClick={() => navigate('/admin/dashboard')} className="back-btn">
            ← Volver
          </button>
          <h1>Gestión de Avisos</h1>
          <button onClick={() => setShowForm(true)} className="add-btn">
            + Nuevo Aviso
          </button>
        </div>
      </header>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingAviso ? 'Editar Aviso' : 'Nuevo Aviso'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Título</label>
                <input
                  type="text"
                  value={formData.titulo}
                  onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Contenido</label>
                <textarea
                  value={formData.contenido}
                  onChange={(e) => setFormData({...formData, contenido: e.target.value})}
                  required
                  rows={4}
                />
              </div>
              
              <div className="form-group">
                <label>Imagen (opcional)</label>
                <input
                  type="text"
                  value={formData.imagen}
                  onChange={(e) => setFormData({...formData, imagen: e.target.value})}
                  placeholder="URL de la imagen"
                />
              </div>
              
              <div className="form-group">
                <label>Tipo</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                >
                  <option value="normal">Normal</option>
                  <option value="urgente">Urgente</option>
                  <option value="info">Informativo</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.activo}
                    onChange={(e) => setFormData({...formData, activo: e.target.checked})}
                  />
                  Activo
                </label>
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">
                  Cancelar
                </button>
                <button type="submit" className="submit-btn">
                  {editingAviso ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="admin-main">
        <div className="avisos-list">
          {avisos.length === 0 ? (
            <p className="no-avisos">No hay avisos creados</p>
          ) : (
            avisos.map((aviso) => (
              <div key={aviso._id} className={`aviso-card ${aviso.tipo} ${!aviso.activo ? 'inactive' : ''}`}>
                <div className="aviso-header">
                  <h3>{aviso.titulo}</h3>
                  <span className={`tipo-badge ${aviso.tipo}`}>{aviso.tipo}</span>
                </div>
                <p>{aviso.contenido}</p>
                <div className="aviso-actions">
                  <button onClick={() => handleToggleActive(aviso._id, aviso.activo)} className="toggle-btn">
                    {aviso.activo ? '🔒' : '🔓'}
                  </button>
                  <button onClick={() => handleEdit(aviso)} className="edit-btn">
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(aviso._id)} className="delete-btn">
                    🗑️
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
