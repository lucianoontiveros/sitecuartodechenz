import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import './carrusel-comentarios.css';
import api from '../services/api';

const CarruselComentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComentario, setSelectedComentario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchComentarios();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchComentarios = async () => {
    try {
      // Agregar timeout para evitar que se quede colgado
      const res = await api.get('/comentarios', {
        timeout: 5000 // 5 segundos de timeout
      });
      const data = res.data;
      
      // Optimización: limitar a los primeros 10 comentarios para mejor rendimiento
      const limitedComentarios = data.slice(0, 10);
      
      // Eliminar duplicados basados en _id
      const uniqueComentarios = limitedComentarios.filter((comentario, index, self) =>
        index === self.findIndex((c) => c._id === comentario._id)
      );
      setComentarios(uniqueComentarios);
    } catch (error) {
      console.error('Error al cargar comentarios:', error);
      // En caso de error, mostrar mensaje de error específico
      if (error.code === 'ECONNABORTED') {
        console.error('Timeout al cargar comentarios');
      }
    } finally {
      setLoading(false);
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

  const handleComentarioClick = (comentario) => {
    setSelectedComentario(comentario);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedComentario(null);
  };

  const settings = {
    dots: true,
    infinite: comentarios.length > 3, // Solo infinite si hay más de 3 comentarios
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: comentarios.length > 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: comentarios.length > 1,
        }
      }
    ]
  };

  if (loading) {
    return (
      <div className="carrusel-container">
        <h2 className="carrusel-title">Lo que dicen nuestros usuarios</h2>
        <div className="carrusel-loading">
          <div className="spinner-icon"></div>
          <span>Cargando comentarios...</span>
        </div>
      </div>
    );
  }

  if (comentarios.length === 0) {
    return (
      <div className="carrusel-container">
        <h2 className="carrusel-title">Lo que dicen nuestros usuarios</h2>
        <div className="carrusel-empty">
          <h3>Comentarios</h3>
          <p>Aún no hay comentarios. ¡Sé el primero en dejar el tuyo!</p>
        </div>
        <div className="carrusel-action">
          <button onClick={() => navigate('/comentario')} className="btn-agregar-comentario">
            Dejar un comentario
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="carrusel-container">
      <h2 className="carrusel-title">Lo que dicen nuestros usuarios</h2>
      <Slider {...settings}>
        {comentarios.map((comentario) => (
          <div key={comentario._id} className="comentario-card">
            <div className="comentario-header">
              <div className="comentario-avatar">
                {comentario.nombre.charAt(0).toUpperCase()}
              </div>
              <div className="comentario-info">
                <h4 className="comentario-nombre">{comentario.nombre}</h4>
                <div className="comentario-estrellas">
                  {renderEstrellas(comentario.estrellas)}
                </div>
              </div>
            </div>
            <p 
              className="comentario-texto" 
              onClick={() => handleComentarioClick(comentario)}
              title="Click para ver comentario completo"
            >
              {comentario.comentario}
            </p>
            <div className="comentario-footer">
              <span className="comentario-fecha">{formatDate(comentario.fechaCreacion)}</span>
            </div>
          </div>
        ))}
      </Slider>
      <div className="carrusel-action">
        <button onClick={() => navigate('/comentario')} className="btn-agregar-comentario">
          Dejar un comentario
        </button>
      </div>

      {modalOpen && selectedComentario && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-avatar">
                {selectedComentario.nombre.charAt(0).toUpperCase()}
              </div>
              <div className="modal-info">
                <h3 className="modal-nombre">{selectedComentario.nombre}</h3>
                <div className="modal-estrellas">
                  {renderEstrellas(selectedComentario.estrellas)}
                </div>
              </div>
            </div>
            <p className="modal-texto">{selectedComentario.comentario}</p>
            <div className="modal-footer">
              <span className="modal-fecha">{formatDate(selectedComentario.fechaCreacion)}</span>
              <button onClick={handleCloseModal} className="modal-close">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarruselComentarios;
