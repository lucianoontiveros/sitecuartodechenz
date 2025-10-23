import React, { useEffect } from "react";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import ScrollAnimation from "../utils/ScrollAnimation";
import Imagen_Aviso from "/img_aviso.png";
import "./avisos.css";

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
          <h2 className="aviso-titulo">Comunicado semanal</h2>
        </ScrollAnimation>

        <div className="aviso-contenido">
          <ScrollAnimation
            effect="fade-right"
            delay={200}
            className="aviso-texto"
          >
            <div className="aviso-meta">
              <span className="aviso-fecha">2 de septiembre de 2025</span>
              <span className="aviso-autor">Por: Lu</span>
            </div>

            <div>
              <p>🌿✨ <strong>Gente bonita</strong> ✨🌿</p>

              <p>
                Quiero compartirles un par de novedades importantes respecto a
                nuestros encuentros en Twitch 🎥📚.  
              </p>

              <p>
                🕒 <strong>Cambio de horarios SOLO este fin de semana:</strong><br/>  
                por cuestiones laborales voy a estar cubriendo actividades en
                las madrugadas del sábado y domingo. Eso significa que los
                directos se van a mover de esta forma:  
              </p>

              <ul>
                <li>📌 <strong>Viernes 21:00 hs Arg → hasta el sábado 08:00 hs.</strong></li>
                <li>📌 <strong>Sábado 21:00 hs Arg → hasta el domingo 08:00 hs.</strong></li>
              </ul>

              <p>
                Durante la mañana y la tarde del sábado y domingo no habrá
                transmisiones. Sé que muchos suelen acompañar en esos horarios,
                por eso aviso con tiempo 🙏.  
                <br/>
                🚨 Importante: es un cambio <strong>único y puntual</strong>,
                solo para este fin de semana. El resto de los días seguimos
                como siempre ✨.  
              </p>

              <p>
                📆 <strong>Lunes a jueves seguimos con el horario habitual</strong>.  
              </p>

              <p>
                📖 Si recién estás volviendo de tus vacaciones 🏖️, te pido que
                leas las reglas del canal 👉{" "}
                <a
                  href="https://cuartodechenzswm.netlify.app/reglas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cuartodechenzswm.netlify.app/reglas
                </a>
              </p>

              <p>
                🤖 Sobre el bot: estoy trabajando en algunos errores detectados
                en la asignación de clases. Lo bueno es que los <strong>fondos
                personalizados funcionan sin problemas</strong>, así que pueden
                usarlos tranquilos 🙌.
              </p>

              <p>
                Gracias de corazón por la compañía, por el apoyo constante y por
                hacer de este canal un espacio donde estudiar juntos siempre
                vale la pena 💚✨.  
              </p>

              <p>
                Un abrazo enorme 🤗,<br />
                <strong>El verde 🌱</strong>
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            effect="fade-left"
            delay={300}
            className="aviso-imagen"
          >
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
            <p className="no-posts">
              Mantente atento a esta sección para las últimas noticias y
              actualizaciones.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Avisos;
