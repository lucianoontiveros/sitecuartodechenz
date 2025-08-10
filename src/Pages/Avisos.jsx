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
          <h2 className="aviso-titulo">Comunicado importante para la comunidad</h2>
        </ScrollAnimation>
        


        <div className="aviso-contenido">
  <ScrollAnimation effect="fade-right" delay={200} className="aviso-texto">
    <div className="aviso-meta">
      <span className="aviso-fecha">10 de agosto de 2025</span>
      <span className="aviso-autor">Por: Lu</span>
    </div>

    <div>
      <h3>📌TE PIDO EMPATÍA, RESPETO Y COMPROMISO</h3>

      <p>
        Quiero agradecer profundamente el acompañamiento y la buena energía de quienes forman parte de este espacio.
      </p>

      <p>
        Les recuerdo que toda comunicación oficial relacionada con este canal, sus decisiones y valores será siempre hecha por mí y desde este entorno. Cualquier comentario o interpretación que circule fuera de este espacio, incluso con la mejor intención, no representa mi voz ni debe tomarse como una postura oficial.
      </p>

      <p>
        Nadie está autorizado a hablar en mi nombre sobre lo que me agrada, me molesta o debería suceder en este lugar. Mucho menos está bien atribuirse valor personal por la estima que yo pueda tener hacia alguien. Si eso ha ocurrido, considero que son actos que, desde mi razonamiento, tienen más que ver con la manipulación de intereses que con el cuidado genuino de este espacio. Agradezco a quienes me lo compartieron con respeto y prudencia.
      </p>

      <p>
        Hay comunicaciones por privado que no se están ejerciendo de buena manera. Tengo casos donde no se ve visiblemente qué cuestión o principio se está afectando a nivel general en el canal, y parece más una disputa personal. Agradezco la ayuda con respecto a moderar, pero hay que saber separar las cuestiones.
      </p>

      <p>
        Con respecto a los espectadores, gente que participa del canal, no voy a contestar los mensajes que me enviaron aduciendo que fueron reprendidos por privado por cuestiones que son totalmente evidentes: Siempre te estás quejando de los juegos, de la música, de lo que duran los breaks, etc. No perderé mi tiempo en ese tipo de mensajes. Recordá que siempre tenés la opción de retirarte del canal, buscar un lugar donde te sientas cómodo o cómoda. Incluso en muchas de estas situaciones usé el sarcasmo, te intenté dar un aviso lo más empático posible, y sigue la reiterancia.
      </p>

      <p>
        Ante evidentes dudas y falta de criterio para resolver algunas situaciones diarias del canal, creé un apartado llamado <a href="https://cuartodechenzswm.netlify.app/reglas" target="_blank" rel="noopener noreferrer">"Reglas"</a>.
      </p>

      <p>
        Este canal se construye con comunicación directa, respeto mutuo y compromiso con el crecimiento. Les agradezco que sigamos cuidando juntos este lugar que compartimos.
      </p>

      <p>
        Con aprecio,<br />
        Lu
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
