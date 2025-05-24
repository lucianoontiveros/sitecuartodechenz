import React, { useEffect } from "react";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import ScrollAnimation from "../utils/ScrollAnimation";
import Imagen_Aviso from "/img_aviso.png";
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
                24 de mayo de 2025
              </span>
              <span className="aviso-autor">Por: Chenz</span>
            </div>
            <p><strong>Gente bonita,</strong></p>

            <p>¡Que tengan un excelente fin de semana! Que sea provechoso para ordenarse y prepararse para lo que viene. 🌱</p>

            <p>Quiero contarles que hoy cerramos la jornada con algunas actualizaciones que venían pendientes y que ya están listas para disfrutar en el canal:</p>


            <h3>🔧 <strong>HERRAMIENTA DE ACTIVIDADES</strong></h3>
            <p>
              La herramienta que usamos para marcar actividades en directo —esa que siempre está visible en pantalla— fue actualizada.
            </p>
            <p>
              Se sumaron nuevos comandos, se mejoró su rendimiento y se le incorporó una pequeña transición visual que, desde mi humilde criterio, la hace más linda y fluida.
            </p>

            <h3>🎯 <strong>COMANDOS DESBLOQUEADOS POR PUNTOS</strong></h3>
            <p>
              Incorporamos dos comandos nuevos solicitados por puntos del canal. Ya están funcionando y también pueden encontrarlos en el sitio web.
            </p>

            <h3>🖼️ <strong>FONDOS PERSONALIZADOS PARA TAREAS</strong></h3>
            <p>
              Sumamos dos nuevos fondos personalizados a los perfiles de dos suscriptores que los solicitaron.
            </p>
            <p> 
              Recuerden que si están suscriptos y usan el bot de tareas, pueden pedirme su fondo personalizado escribiéndome a 
              <a href="mailto:luciano.a.ontiveros@gmail.com"> luciano.a.ontiveros@gmail.com  </a>. Es una manera de agradecer el apoyo al canal y sumarles un detalle personal al espacio que compartimos. ✨
            </p>
            <p>Solo necesito lo siguiente:</p>
            <ul>
              <li>Su usuario de Twitch</li>
              <li>Una imagen vertical</li>
              <li>El color de tipografía que les gustaría para su panel de tareas</li>
            </ul>
            <p></p>

            <h3>🔜 <strong>¿Y AHORA QUÉ SIGUE?</strong></h3>
            <p>
              Vamos a seguir trabajando en mejoras progresivas. Ya logramos darle una estructura más ordenada a los recursos que usamos en vivo,
              y mi idea es ir incorporando nuevas funciones a medida que avance con mi formación y aprendizaje.
            </p>
            <p>Gracias por estar, por acompañar, por sumar desde el respeto y el entusiasmo.</p>
            <p>Estoy disponible para cualquier sugerencia o comentario que sume valor al espacio.</p>
            <p>Les deseo una gran semana. 💚</p>

            <p><strong>Con cariño, El viejo Verdón</strong></p>
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
