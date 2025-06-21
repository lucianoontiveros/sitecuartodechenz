import React, { useEffect } from "react";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import ScrollAnimation from "../utils/ScrollAnimation";
import Imagen_Aviso from "/img_aviso.webp";
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
      <span className="aviso-fecha">24 de mayo de 2025</span>
      <span className="aviso-autor">Por: Chenz</span>
    </div>

    <div>
    <p>✨¡Hola, personitas bellas!✨</p>

<p>
  Gracias, de corazón, por estar, por acompañar y por la paciencia de siempre. 💛  
  Solo paso a desearles un finde lleno de foco, descanso o lo que necesiten, y que inicien los próximos días con energía renovada.
</p>

<p>
  Un recordatorio importante: tratarse con amabilidad es el primer paso para que todo empiece a fluir.  
  La tranquilidad no se encuentra afuera, nace desde adentro. Muchas cosas escapan a nuestro control,  
  pero lo esencial —eso que realmente transforma— solo pide una cosa: presencia.  
  No se trata de correr detrás de resultados, sino de actuar hoy como la persona que queremos ser. 🌱
</p>

<h3>📢 Novedades técnicas</h3>

<ul>
  <li>Nuevos comandos: <code>!bingo</code>, <code>!lek</code> y <code>!noo</code> para sumar diversión!</li>
  <li>
    <strong>Bot de tareas mejorado:</strong>
    <p>Ahora funciona sin necesidad de agregar información personal. Más accesible, más simple.</p>
  </li>
  <li>
    <strong>Y sí… el bot que se saludaba solo 😂:</strong>
    <p>¡Casi resuelto! Estamos en la última fase de prueba tras ajustar su lógica, con correcciones de rendimiento.</p>
  </li>
</ul>

<p>
  🔹 Mantenemos los horarios habituales (viernes libre), aunque hoy me encuentran en vivo aprovechando el feriado.  
  ¡Feliz Día de la Bandera para quienes lo celebran! 🇦🇷
</p>

<p>
  <strong>Y pronto:</strong> ¡streams también durante mis vacaciones!  
  Como siempre, gracias por ser parte de esta comunidad que crece con sentido y constancia.
</p>

<p>
  Con cariño,<br />
  Lu (y Brunito 🐾)
</p>
</div>
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
