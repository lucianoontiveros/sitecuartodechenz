import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import api from '../services/api';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    
    if (!token) {
      navigate('/admin/login');
      return;
    }
    
    if (userData) {
      setUser(JSON.parse(userData));
    }
    
    setLoading(false);
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (token) {
        // Llamar al endpoint de logout para revocar el token
        await api.post('/auth/logout');
      }
      
      // Limpiar localStorage
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      navigate('/admin/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Aún así limpiar localStorage y redirigir
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      navigate('/admin/login');
    }
  };

  if (loading) {
    return <div className="loading-container">Cargando...</div>;
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Panel de Administración</h1>
          <div className="admin-user-info">
            <span>{user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-cards">
          <div className="admin-card" onClick={() => navigate('/admin/avisos')}>
            <h2>📢 Avisos</h2>
            <p>Gestionar avisos del sitio</p>
          </div>
          
          <div className="admin-card">
            <h2>👥 Usuarios</h2>
            <p>Gestionar usuarios (próximamente)</p>
          </div>
          
          <div className="admin-card">
            <h2>📊 Estadísticas</h2>
            <p>Ver métricas (próximamente)</p>
          </div>
          
          <div className="admin-card">
            <h2>⚙️ Configuración</h2>
            <p>Configuración general (próximamente)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
