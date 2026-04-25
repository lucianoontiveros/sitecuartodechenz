import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import './comentario-form.css';

export default function ComentarioForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [comentarioExistente, setComentarioExistente] = useState(null);
  const [formData, setFormData] = useState({
    comentario: '',
    estrellas: 5
  });
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    const userData = localStorage.getItem('comentarioUser');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      verificarComentarioExistente(parsedUser.sub);
    }
  }, []);

  const verificarComentarioExistente = async (googleId) => {
    try {
      const res = await fetch('/api/comentarios');
      const comentarios = await res.json();
      const existente = comentarios.find(c => c.googleId === googleId);
      if (existente) {
        setComentarioExistente(existente);
        setFormData({
          comentario: existente.comentario,
          estrellas: existente.estrellas
        });
      }
    } catch (error) {
      console.error('Error al verificar comentario:', error);
    }
  };

  const handleGoogleSuccess = async (response) => {
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/auth/google-comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential })
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error en autenticación');
      }
      
      const { user: googleUser } = await res.json();
      const userData = {
        sub: googleUser.sub, // Usar el ID real de Google del backend
        nombre: googleUser.nombre,
        email: googleUser.email
      };
      
      localStorage.setItem('comentarioUser', JSON.stringify(userData));
      setUser(userData);
      await verificarComentarioExistente(userData.sub);
    } catch (error) {
      console.error('Error en login:', error);
      setError(error.message);
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('Debes iniciar sesión con Google para dejar un comentario');
      return;
    }

    if (loading || isSubmitting || isSubmittingRef.current) {
      return; // Prevenir envíos múltiples
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setLoading(true);
    setError('');

    try {
      const url = comentarioExistente 
        ? `/api/comentarios/${comentarioExistente._id}`
        : '/api/comentarios';
      const method = comentarioExistente ? 'PUT' : 'POST';
      
      const body = comentarioExistente
        ? { googleId: user.sub, comentario: formData.comentario, estrellas: formData.estrellas }
        : { googleId: user.sub, nombre: user.nombre, email: user.email, comentario: formData.comentario, estrellas: formData.estrellas };
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al guardar comentario');
      }

      localStorage.removeItem('comentarioUser');
      setUser(null);
      setComentarioExistente(null);
      setFormData({ comentario: '', estrellas: 5 });
      navigate('/');
    } catch (error) {
      console.error('Error al guardar comentario:', error);
      setError(error.message);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('comentarioUser');
    setUser(null);
    setComentarioExistente(null);
    setFormData({ comentario: '', estrellas: 5 });
  };

  const renderEstrellas = () => {
    return Array.from({ length: 5 }, (_, i) => {
      return (
        <button
          key={i}
          type="button"
          onClick={() => setFormData({ ...formData, estrellas: i + 1 })}
          className={`estrella-btn ${i < formData.estrellas ? 'activa' : ''}`}
        >
          ★
        </button>
      );
    });
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="comentario-form-container">
        <div className="comentario-form-card">
          <h1>{comentarioExistente ? 'Editar Comentario' : 'Dejar un Comentario'}</h1>
          <p className="comentario-subtitle">CUARTO DE CHENZ</p>
          
          {error && <div className="error-message">{error}</div>}
          
          {!user ? (
            <div className="google-login-wrapper">
              
              {loading && <div className="loading-spinner">Cargando...</div>}
              <p className="login-info">
                Inicia sesión con Google para dejar tu comentario
              </p>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
              />
            </div>
          ) : (
            <>
              <div className="user-info">
                <div className="user-avatar">
                  {user.nombre.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="user-name">{user.nombre}</p>
                  <p className="user-email">{user.email}</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  Cerrar sesión
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Calificación</label>
                  <div className="estrellas-container">
                    {renderEstrellas()}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Tu Comentario</label>
                  <textarea
                    value={formData.comentario}
                    onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                    required
                    rows={5}
                    placeholder="Comparte tu experiencia..."
                    maxLength={500}
                  />
                  <span className="char-count">{formData.comentario.length}/500</span>
                </div>
                
                <div className="form-actions">
                  <button type="button" onClick={() => navigate('/')} className="cancel-btn">
                    Cancelar
                  </button>
                  <button type="submit" className="submit-btn" disabled={loading || isSubmitting}>
                    {loading || isSubmitting ? 'Guardando...' : (comentarioExistente ? 'Actualizar' : 'Publicar')}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
