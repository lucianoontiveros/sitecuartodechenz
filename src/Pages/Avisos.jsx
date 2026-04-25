import React, { useEffect, useState } from "react";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import ScrollAnimation from "../utils/ScrollAnimation";
import Imagen_Aviso from "/img_aviso.png";
import "./avisos.css";
import api from '../services/api';

const Avisos = () => {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAvisos();
  }, []);

  const fetchAvisos = async () => {
    try {
      const res = await api.get('/avisos');
      // Filtrar solo avisos activos y ordenar por fecha de creación
      const avisosActivos = res.data
        .filter(aviso => aviso.activo)
        .sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion));
      setAvisos(avisosActivos);
    } catch (error) {
      console.error('Error al cargar avisos:', error);
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

  return (
    <div className="avisos-container">
      <section className="title_container_comandos">
        <h1>CUARTO DE CHENZ</h1>
        <div className="bar_icon">
          <a
            className="icon_bar_element"
            href="https://www.instagram.com/luciano.a.ontiveros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_instagram />
          </a>
          <a
            className="icon_bar_element"
            href="https://www.tiktok.com/@cuartodechenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_tiktok />
          </a>
          <a
            className="icon_bar_element"
            href="https://x.com/AgustnOntivero6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_x />
          </a>
          <a
            className="icon_bar_element"
            href="https://www.youtube.com/@cuartodechenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_youtube />
          </a>
        </div>
      </section>

      {loading ? (
        <div className="loading-container">Cargando avisos...</div>
      ) : avisos.length === 0 ? (
        <div className="avisos-content">
          <ScrollAnimation effect="fade-up" delay={200}>
            <div className="posts-container">
              <h2>Últimos Avisos</h2>
              <p className="no-posts">
                No hay avisos activos en este momento. Mantente atento a esta sección para las últimas noticias y actualizaciones.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      ) : (
        avisos.map((aviso, index) => (
          <section key={aviso._id} className="aviso-principal">
            <ScrollAnimation effect="fade-up" delay={100 + (index * 100)}>
              <h2 className="aviso-titulo">{aviso.titulo}</h2>
            </ScrollAnimation>

            <div className="aviso-contenido">
              <ScrollAnimation
                effect="fade-right"
                delay={200 + (index * 100)}
                className="aviso-texto"
              >
                <div className="aviso-meta">
                  <span className="aviso-fecha">{formatDate(aviso.fechaCreacion)}</span>
                  {aviso.autorEmail && (
                    <span className="aviso-autor">Por: {aviso.autorEmail.split('@')[0]}</span>
                  )}
                </div>

                <div className={`tipo-badge ${aviso.tipo}`}>
                  {aviso.tipo}
                </div>

                <div>
                  {aviso.contenido.split('\n\n').map((paragraph, i) => (
                    paragraph.trim() && (
                      <p key={i}>{paragraph}</p>
                    )
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                effect="fade-left"
                delay={300 + (index * 100)}
                className="aviso-imagen"
              >
                <img
                  src={aviso.imagen || Imagen_Aviso}
                  alt="Aviso"
                  className="imagen-totoro"
                />
              </ScrollAnimation>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default Avisos;
