import "./inicio.css";
import Avisos_img from "../Components/img/Avisos_img.jsx";
import Horario_img from "../Components/img/Horario_img.jsx";
import Comandos_img from "../Components/img/Comandos_img.jsx";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import Icon_discord from "../Components/img_icons/Icon_discord.jsx";
import Icon_whatsapp from "../Components/img_icons/Icon_whatsapp.jsx";
import img_presentation from "/img_presentation.png";
import img_card_presentation from "/img_card_presentation.png";
import img_cuarto_1 from "/img_cuarto_1.jpeg";
import img_cuarto_2 from "/img_cuarto_2.jpeg";
import img_cuarto_4 from "/img_cuarto_4.jpeg";
import card_1 from "/img_card_one.png";
import card_2 from "/img_card_two.png";
import IconHouse from "../Components/img/IconHouse.jsx";
import IconCrono from "../Components/img/IconCrono.jsx";
import IconCloud from "../Components/img/IconCloud.jsx";
import IconMetrics from "../Components/img/IconMetrics.jsx";
import IconTask from "../Components/img/IconTask.jsx";
import { NavLink } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import CarruselComentarios from "../Components/CarruselComentarios.jsx";

const Inicio = () => {
  // Hooks para animaciones al hacer scroll
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();
  const [ref6, isVisible6] = useScrollAnimation();
  const [ref7, isVisible7] = useScrollAnimation();
  const [ref8, isVisible8] = useScrollAnimation();
  
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .fade-in-up {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-left {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-right {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-up.visible {
          opacity: 1;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .fade-in-left.visible {
          opacity: 1;
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .fade-in-right.visible {
          opacity: 1;
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        /* Retrasos para animaciones escalonadas */
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Sección de Inicio  */}
      <div className="inicio_container">
        <section className="title_section">
          <div className="title_container">
            <h1>CUARTO DE CHENZ</h1>
            <div className="bar_icon">
              <a
                className="icon_bar_element"
                href="https://www.instagram.com/luciano.a.ontiveros/"
                target="_blank"
              >
                <Icon_instagram />
              </a>
              <a
                className="icon_bar_element"
                href="https://www.tiktok.com/@cuartodechenz"
                target="_blank"
              >
                <Icon_tiktok />
              </a>
              <a
                className="icon_bar_element"
                href="https://x.com/AgustnOntivero6"
                target="_blank"
              >
                <Icon_x />
              </a>
              <a
                className="icon_bar_element"
                href="https://www.youtube.com/@cuartodechenz"
                target="_blank"
              >
                <Icon_youtube />
              </a>
            </div>
          </div>

          <div className="inicio_banner">
            <div
              className="router_section"
              to="/avisos/"
            >
              <NavLink
                className="router_icon"
                to="/avisos/"
              >
                <Avisos_img
                  width="20em"
                  height="20em"
                />
                <h3>AVISOS</h3>
              </NavLink>
              <a
                className="router_icon"
                href="#horario"
              >
                <Horario_img
                  width="20em"
                  height="20em"
                />
                <h3>HORARIO</h3>
              </a>
              <NavLink
                className="router_icon"
                to="/comandos"
              >
                <Comandos_img
                  width="20em"
                  height="20em"
                />
                <h3>COMANDOS</h3>
              </NavLink>
            </div>
            <div className="slogan_container">
              <h4>SABEMOS EL SIGNIFICADO DE TU ESFUERZO</h4>
              <a href="#presentation_element">MI CUARTO</a>
            </div>
          </div>
        </section>
        <section className="img_section">
          <img
            src="/img_inicio.png"
            alt="Inicio"
            className="img_inicio"
          />
        </section>
        <div id="presentation"></div>
      </div>

      {/* Carrusel de Comentarios */}
      <CarruselComentarios />
     
      {/* Presentación del canal  */}
      <div className="presentation_container">
        <div
          id="presentation_element"
          ref={ref1}
          className={`presentation_element fade-in-up ${isVisible1 ? 'visible' : ''}`}
        >
          <img
            className="media_element img"
            src={img_presentation}
            alt="imagen presentación"
          />
          <div className="presentation_element_text">
            <div className="tittle_and_icon">
              <IconHouse />
              <h3>UN ESPACIO DE ESTUDIO Y TRABAJO</h3>
            </div>
            <p>
              ¡Hola a todos y bienvenidos a este espacio de crecimiento y
              dedicación! Aquí no solo estudiamos o trabajamos, sino que
              compartimos nuestras metas y aspiraciones, formando una comunidad
              que se apoya mutuamente. Cada proyecto, cada idea y cada instante
              aquí reflejan mi aprendizaje autodidacta en programación, moldeado
              por horas de estudio y práctica. Es un viaje que recorremos
              juntos, en el que cada paso nos hace más fuertes, más enfocados y
              más conectados. Gracias por estar aquí, por acompañarme en los
              momentos de esfuerzo y en los respiros que nos recargan. Juntos
              construimos un ambiente de motivación y productividad donde cada
              logro es compartido. ¡Sigamos adelante en este viaje de
              crecimiento!
            </p>
          </div>
        </div>
        <div 
          ref={ref2}
          className={`presentation_element_ fade-in-up ${isVisible2 ? 'visible delay-1' : ''}`}
        >
          <div className="presentation_element_card">
            <img
              className="border_element"
              src={img_card_presentation}
              alt=""
            />
            <div className="presentation_element_text">
              <h3>ÚNETE A NUESTRA COMUNIDAD EN DISCORD</h3>
              <p>
                ¡Únete a nuestra comunidad en Discord! Un espacio libre y
                gratuito donde las reglas son simples: respeto y buena onda.
                Aquí encontrarás a las increíbles personalidades de nuestra
                comunidad listas para acompañarte en tus largas jornadas, ya sea
                que estés transmitiendo en Twitch o simplemente necesites
                compañía. ¡Te esperamos con los brazos abiertos!
              </p>

              <button
                onClick={() =>
                  window.open("https://discord.gg/UdU3wvpWu7", "_blank")
                }
              >
                ÚNETE
              </button>
            </div>
          </div>
          <iframe
            className="media_element iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WkmVQohDvK8?si=W-f1cllhDpDqLlIm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* Presentación del container   */}
      <div className="contenido_conteiner">
        <div 
          ref={ref3}
          className={`contenido_item fade-in-left ${isVisible3 ? 'visible' : ''}`}
        >
          <img
            className="img_contenido_element img"
            src={img_cuarto_1}
            alt=""
          />

          <div className="contenido_element">
            <div className="tittle_and_icon">
              <IconCrono />
              <h3>VERSIÓN PERSONALIZADA DEL MÉTODO POMODORO</h3>
            </div>
            <p>
              En nuestras transmisiones, replicamos una versión personalizada
              del método Pomodoro, con sesiones de 60 minutos de trabajo
              concentrado y 10 minutos de descanso. Este enfoque fomenta la
              productividad y el foco, ideal para aquellos que buscan optimizar
              su tiempo.
            </p>
            <p>
              Transmito de lunes a viernes, e incluso durante los fines de
              semana, por lo que muchas veces encontrarás sesiones en las que
              estaré trabajando en vivo. En estas transmisiones, los "pomos"
              (momentos productivos y descansos) suceden automáticamente, aunque
              no participe directamente en ellos.
            </p>
            <p>
              Para facilitar tu experiencia, tendrás a tu disposición comandos
              que te permitirán gestionar tus tareas, actividades y horarios a
              tu manera. Además, al final de mi jornada laboral, me uno a la
              comunidad para interactuar contigo en cada descanso, creando un
              espacio de apoyo mutuo y crecimiento conjunto.
            </p>
          </div>
        </div>
        <div 
          ref={ref4}
          className={`contenido_item_1 fade-in-right ${isVisible4 ? 'visible' : ''}`}
        >
          <div className="contenido_element">
            <div className="tittle_and_icon">
              <IconCloud />
              <h3>EL PODER DE LA LLUVIA EN TU PRODUCTIVIDAD.</h3>
            </div>
            <p>
              En nuestros momentos productivos, el sonido de la lluvia toma
              protagonismo. Este efecto sonoro no es una simple elección al
              azar: está científicamente comprobado que los sonidos naturales,
              como la lluvia, ayudan a reducir el estrés, mejorar la
              concentración y promover un estado de calma ideal para el estudio
              y el trabajo.
            </p>
            <p>
              Lluvia actúa como un "ruido blanco" que bloquea distracciones
              externas, creando un entorno sonoro equilibrado y relajante,
              perfecto para entrar en tu zona de máxima concentración. Además,
              está diseñado pensando en tu flexibilidad. Puedes combinar este
              sonido ambiental con cualquier lista musical de tu preferencia
              desde otra pestaña de tu navegador. ¡Funcionarán de maravilla
              juntos, potenciando tu experiencia mientras avanzas en tus tareas!
            </p>
            <p>
              Así, este espacio no solo busca acompañarte, sino también
              ofrecerte herramientas prácticas y efectivas para que aproveches
              al máximo cada momento productivo. 💡✨
            </p>
          </div>
          <img
            className="img_contenido_element img"
            src={img_cuarto_2}
            alt=""
          />
        </div>
        <div 
          ref={ref5}
          className={`contenido_item_2 fade-in-left ${isVisible5 ? 'visible' : ''}`}
        >
          <img
            className="img_contenido_element img"
            src={img_cuarto_4}
            alt=""
          />
          <div className="contenido_element">
            <div className="tittle_and_icon">
              <IconMetrics />
              <h3>COMANDOS PARA GESTIONAR TU PRODUCTIVIDAD</h3>
            </div>
            <p>
              Nuestro canal está diseñado pensando en maximizar tu enfoque y
              organización. Aquí encontrarás comandos que te permiten gestionar
              tus tareas de manera sencilla y eficiente, crear listas
              personalizadas para tus actividades y descubrir muchas
              funcionalidades que se adaptan a tu ritmo de trabajo y estudio.
            </p>
            <p>
              Estos comandos están desarrollados cuidadosamente para ayudarte a
              mantener el control de tu jornada, priorizar tus objetivos y
              optimizar tus tiempos. Desde organizar tus pendientes hasta
              dividir tus actividades en bloques manejables, todo está pensado
              en ti.
            </p>
            <p>
              Únete a un espacio donde la productividad y la creatividad van de
              la mano, respaldado por herramientas que harán que tus días sean
              más enfocados y gratificantes. Este no es solo un canal: es tu
              aliado en cada meta que te propongas alcanzar. 🚀
            </p>
          </div>
        </div>
        <div id="horario"></div>
      </div>
      {/* Presentación en el horario   */}
      <div className="horario_container">
        <div 
          ref={ref6}
          className={`horario_card fade-in-up ${isVisible6 ? 'visible' : ''}`}
        >
          <div className="horario_element_card">
            <img
              src={card_1}
              alt=""
            />
            <div className="card_text">
              <h3>UN LUGAR PARA TI</h3>
              <p>
                Este espacio está pensado para acompañarte mientras estudias o trabajas, ofreciendo un ambiente de foco y constancia.
              </p>
              <ul>
                <li>
                  <IconTask />
                  Gestion de tareas
                </li>
                <li>
                  <IconTask />
                  Comandos para interactuar
                </li>
                <li>
                  <IconTask />
                  Timer !focus para usuarios
                </li>
                <li>
                  <IconTask />
                  Juegos interactivos con el chat
                </li>
                <li>
                  <IconTask />
                  Música en los descansos
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div
          className="horario_element_text"
          
        >
          <div 
            ref={ref7}
            className={`horario_card fade-in-up ${isVisible7 ? 'visible delay-1' : ''}`}
          >
            <div className="text_elements">
              <h3>NUESTROS HORARIOS</h3>
          
              <h5>LUNES A JUEVES</h5>
              <ul>
                <li>14:00 a 21:00 hs ARG</li>
                <li>14:00 a 21:00 hs BRA</li>
                <li>19:00 a 02:00 hs ESP</li>
                <li>11:00 A 18:00 HS MEX</li>
                <li>18:00 A 01:00 HS POR</li>
                <li>12:00 A 19:00 HS COL</li>
              </ul>
              <h5>DOMINGOS Y SÁBADOS</h5>
              <ul>
                <li>14:00 a 21:00 hs ARG</li>
                <li>14:00 a 21:00 hs BRA</li>
                <li>19:00 a 02:00 hs ESP</li>
                <li>11:00 A 18:00 HS MEX</li>
                <li>18:00 A 01:00 HS POR</li>
                <li>12:00 A 19:00 HS COL</li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          ref={ref8}
          className={`horario_card fade-in-up ${isVisible8 ? 'visible delay-2' : ''}`}
        >
          <div className="horario_element_card">
            <img
              src={card_2}
              alt=""
            />
            <div className="card_text">
              <h3>NOTIFICACIONES Y AVISOS</h3>
              <p>
                Podes recibir notificaciones a través de nuestro discord y el grupo de whatsapp
                para informarte cualquier novedad, también por Instagram por donde Chenz se encuentra más activo.
              </p>
              <div className="social_buttons">
                <button
                  onClick={() => window.open("https://discord.gg/5NFDjMdkMk", "_blank")}
                  className="social_button"
                >
                  Discord
                </button>
                <button
                  onClick={() => window.open("https://chat.whatsapp.com/BUKr649TEl37GfzdcYd7gf", "_blank")}
                  className="social_button"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => window.open("https://www.instagram.com/luciano.a.ontiveros/", "_blank")}
                  className="social_button"
                >
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Agregar estilos para las animaciones */}
      <style>{`
        /* Asegurarse de que las imágenes y textos tengan transición suave */
        img, p, h1, h2, h3, h4, h5, h6, li {
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Inicio;