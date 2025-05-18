import React, { useEffect } from "react";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import ScrollAnimation from "../utils/ScrollAnimation";
import Imagen_Aviso from "/img_aviso.jpeg";
import './avisos.css';

const Avisos = () => {

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

      <section className="aviso-principal">
        <ScrollAnimation effect="fade-up" delay={100}>
          <h2 className="aviso-titulo">SITIO NUEVO Y EN CONSTRUCCIÓN</h2>
        </ScrollAnimation>
        
        <div className="aviso-contenido">
          <ScrollAnimation effect="fade-right" delay={200} className="aviso-texto">
            <div className="aviso-meta">
              <span className="aviso-fecha">
                17 de mayo de 2025
              </span>
              <span className="aviso-autor">Por: Chenz</span>
            </div>
            <p>Gente bonita,</p>
            
            <p>Gracias como siempre por su compañía constante. Me alegra anunciarles que ya está disponible la nueva versión de la página. 🌐✨</p>
            
            <p>Las principales novedades están en la estructura y la presentación: ahora los comandos están divididos por secciones, con botones para copiarlos fácilmente, y un apartado final con todos los sonidos para que elijan cuál usar en sus sesiones.</p>
            
            <p>El contenido se muestra de forma progresiva mientras hacen scroll, buscando que la experiencia sea lo más intuitiva y práctica posible, tanto para comprender como para aplicar la información en el espacio.</p>
            
            <p>Esta semana fue de mucha reflexión y paciencia para mí. Me sentí muy acompañado por ustedes, y traté también de estar más presente en Instagram. Sentí el ida y vuelta, y eso lo valoro muchísimo. 💚</p>
            
            <p>A partir de ahora, estaré tomando los viernes como día de descanso para dedicarme un poco a lo social, organizar planes o trabajar en algunas cosas del canal que son difíciles de probar en vivo. Así que mi presencia será de lunes a jueves y durante los fines de semana.</p>
            
            <p>Como siempre, estoy abierto a sus comentarios, sugerencias o ideas. Pueden escribirme por cualquiera de los medios y estaré atento a todo lo que pueda mejorar la experiencia.</p>
            
            <p>🔸 Y para quienes están suscriptos y utilizan el bot de tareas:<br />
            Pueden escribirme a <a href="mailto:luciano.a.ontiveros@gmail.com" style={{color: 'aquamarine'}}>luciano.a.ontiveros@gmail.com</a> para solicitar un fondo personalizado en su listado. Solo necesito una imagen vertical y que me indiquen qué color prefieren para la tipografía. El resto lo dejo en mis manos.</p>
            
            <p>Eso es todo de mi parte por ahora.<br />
            Gracias nuevamente y que tengan un hermoso comienzo de semana. 🌱</p>
            
            <p>Con cariño,<br />
            El viejo Verdón.</p>
          </ScrollAnimation>
          
          <ScrollAnimation effect="fade-left" delay={300} className="aviso-imagen">
            <img 
              src={Imagen_Aviso} 
              alt="Totoro" 
              className="imagen-totoro"
            />
          </ScrollAnimation>
        </div>
      </section>

      <div className="avisos-content">
        <ScrollAnimation effect="fade-up" delay={200}>
          <div className="posts-container">
            <h2>Últimos Avisos</h2>
            <p className="no-posts">Mantente atento a esta sección para las últimas noticias y actualizaciones.</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );

};

export default Avisos;
