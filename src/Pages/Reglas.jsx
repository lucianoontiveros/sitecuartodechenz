import React from 'react';
import './reglas.css';
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";

const Reglas = () => {
  return (

    
    <div className="reglas-container">

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
    </div>

    

      <header className="reglas-header">
        <h1>📜 Reglas de Convivencia y Moderación </h1>
      </header>

      <section className="reglas-section">
  <h2>VIP y Moderadores</h2>
  <p>
    La asignación de VIPs y moderadores se basa en la participación, el respeto y es una decisión completamente subjetiva del streamer. No mantengas expectativas ni presiones para obtener esos roles, ya que la elección depende únicamente del criterio de quien lleva adelante el canal.
  </p>
</section>



      <section className="reglas-section">
        <h2>1. Respeto ante todo</h2>
        <ul>
        <li>No se permiten comentarios u opiniones sobre temas como religión, política u otros que puedan generar discusiones ajenas al ambiente de estudio. Este canal no está destinado para debates de ese tipo; aquí venimos a estudiar o trabajar. Sólo el streamer podrá abordar esos temas si así lo desea, ya que es quien lleva adelante el formato y da la cara por el canal.</li>
        </ul>

        <h3>2. Cero drama y discusiones personales</h3>
        <ul>
          <li>Evita traer conflictos externos o conversaciones privadas al chat.</li>
          <li>Si tienes un problema con otro usuario, usa mensajes privados o habla con la moderación.</li>
        </ul>

        <h3>3. Mantener el foco del canal</h3>
        <ul>
          <li>El canal es un espacio para estudio, productividad y crecimiento personal.</li>
          <li>Está bien saludar y conversar en los breaks, pero evita desviar el chat a temas ajenos por demasiado tiempo.</li>
        </ul>

        <h3>4. Nada de spam o autopromoción sin permiso</h3>
        <ul>
          <li>Links, redes o promociones solo con autorización del streamer o moderadores.</li>
        </ul>

        <h3>5. Lenguaje claro y amable</h3>
        <ul>
          <li>Evita mensajes ambiguos, pasivo-agresivos o con doble sentido que puedan generar malentendidos.</li>
        </ul>

        <h3>6. Confianza y honestidad</h3>
        <ul>
          <li>No hables en nombre de otras personas sin su consentimiento.</li>
          <li>No difundas información privada de otros usuarios.</li>
        </ul>
      </section>
      <section className="reglas-section">
  <h2>📌 Nota sobre el rol de moderador</h2>
  <p>
    Soy consciente de que en el canal hay muchos moderadores: un grupo que ejerce activamente sus funciones, 
    y otros que mantienen el rol de forma representativa, como reconocimiento por su tiempo y aporte al chat.
  </p>
  <p>
    Sin embargo, todo aquel que ejecute acciones de moderación debe aplicar estas reglas. De lo contrario, 
    si siendo moderador se observa reiterancia en actuar con individualidad o en compañía fuera de estas 
    normas, el rol será dado de baja por un año, sin más.
  </p>
  <p>
    Aunque esta decisión pueda perjudicarme, pues valoro mucho su ayuda, es importante entender que al ejercer sus funciones 
    representan la postura de toda una comunidad. No ser tolerantes o no expresarse de manera adecuada nos expone como grupo. 
    Por ello, te ruego prudencia y una actitud resolutiva basada en la empatía. Cualquier duda, estoy a disposición para consultarla.
  </p>
  <p>
    Esta es, en mi criterio, la medida más justa para preservar la armonía y coherencia del espacio.
  </p>
</section>

      <section className="reglas-section">
        <h2>⚖️ Posibles Consecuencias ante Incumplimiento de las Reglas</h2>
        
        <h3>1️⃣ Advertencia verbal en el chat</h3>
        <ul>
          <li>Primera intervención del moderador, explicando brevemente la regla incumplida.</li>
          <li>Objetivo: educar y evitar la repetición.</li>
          <li>Ejemplo: "Recuerda que en el canal evitamos temas personales para mantener el foco en el estudio, gracias 🙏".</li>
        </ul>

        <h3>2️⃣ Advertencia privada</h3>
        <ul>
          <li>Si el comportamiento continúa, se envía un mensaje directo (Discord, Twitch Whisper, etc.) explicando el motivo.</li>
          <li>Objetivo: dar espacio para corregir sin exponer públicamente.</li>
        </ul>

        <h3>3️⃣ Silencio temporal (mute / timeout)</h3>
        <ul>
          <li>Duración sugerida: 5 a 15 minutos, según la situación.</li>
          <li>Objetivo: enfriar tensiones y recuperar el orden del chat.</li>
          <li>El moderador explica brevemente que es para mantener el ambiente de estudio.</li>
        </ul>

        <h3>4️⃣ Expulsión temporal del canal</h3>
        <ul>
          <li>De 24 horas a 7 días, según la gravedad o reincidencia.</li>
          <li>Se aplica cuando el usuario rompe reglas repetidamente o crea un ambiente tóxico.</li>
        </ul>

        <h3>5️⃣ Expulsión permanente (ban)</h3>
        <ul>
          <li>Para casos graves: insultos directos, acoso, discriminación, spam masivo o amenazas.</li>
          <li>No se revierte salvo revisión del streamer.</li>
        </ul>
      </section>
      <section className="reglas-section">
  <h2>SOBRE LA REPRESENTACIÓN DEL ESPACIO:</h2>
  <p>
    Les recuerdo que toda comunicación oficial relacionada con este canal, sus decisiones y valores será siempre hecha por mí y desde este entorno. Cualquier comentario o interpretación que circule fuera de este espacio, incluso con la mejor intención, no representa mi voz ni debe tomarse como una postura oficial.
  </p>
  <p>
    Nadie está autorizado a hablar en mi nombre sobre lo que me agrada, me molesta o debería suceder en este lugar. Mucho menos está bien atribuirse valor personal por la estima que yo pueda tener hacia alguien. Si eso ha ocurrido, considero que son actos que, desde mi razonamiento, tienen más que ver con la manipulación de intereses que con el cuidado genuino de este espacio.
  </p>
</section>

      
    </div>
  );
};

export default Reglas;
