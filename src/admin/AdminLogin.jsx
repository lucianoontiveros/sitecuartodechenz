import { useState, useEffect } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import './admin.css';
import api from '../services/api';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSuccess = async (response) => {
    setLoading(true);
    setError('');
    
    try {
      const res = await api.post('/auth/google', { token: response.credential });
      const { token, user } = res.data;
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminUser', JSON.stringify(user));
      window.location.href = '/admin/dashboard';
    } catch (error) {
      console.error('Error en login:', error);
      setError(error.response?.data?.error || error.message || 'Error al iniciar sesión. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError('Error en el login con Google. Por favor intenta nuevamente.');
  };

  // Forzar color negro en el texto del botón de Google al hacer click
  useEffect(() => {
    const forceBlackColor = () => {
      const spans = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb span');
      spans.forEach(span => {
        span.style.setProperty('color', 'black', 'important');
      });
    };

    const resetColor = () => {
      const spans = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb span');
      spans.forEach(span => {
        span.style.removeProperty('color');
      });
    };

    // Aplicar color negro en eventos de mouse
    document.addEventListener('mousedown', forceBlackColor);
    document.addEventListener('mouseup', resetColor);

    return () => {
      document.removeEventListener('mousedown', forceBlackColor);
      document.removeEventListener('mouseup', resetColor);
    };
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="admin-login-container">
        <div className="admin-login-card">
          <h1>Panel de Administración</h1>
          <p>CUARTO DE CHENZ</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="google-login-wrapper">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </div>
          
          {loading && <div className="loading-spinner">Cargando...</div>}
          
          <p className="login-info">
            Solo usuarios autorizados pueden acceder
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
