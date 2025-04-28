import "./inicio.css";
import Avisos_img from "../Components/img/Avisos_img.jsx";
import Horario_img from "../Components/img/Horario_img.jsx";
import Comandos_img from "../Components/img/Comandos_img.jsx";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
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

const Inicio = () => {
  return (
    <>
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
              <NavLink className="router_icon">
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
              <a href="/">MI CUARTO</a>
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
      </div>
      {/* Presentación del canal  */}
      <div className="presentation_container">
        <div className="presentation_element">
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
              Bienvenidas personitas bellas a nuestro rincón de esfuerzo y
              constancia. Este canal no es solo un lugar para estudiar o
              trabajar; es un espacio donde tus propósitos encuentran compañía y
              tus metas se convierten en inspiración para nuestra comunidad.
              Aquí comparto mis horas de dedicación, mis proyectos, pensamientos
              y esos pequeños momentos que logramos juntos. Estoy estudiando
              programación de manera autodidacta y cada cosa que encuentres en
              este espacio, está diseñado por cada contenido y actitudes que
              logré incorporar a veces de estudio y práctica. Te agradecemos por
              ser parte de esta travesía, ya sea que estés en la etapa más
              intensa de tu día o en un respiro necesario. Aquí, juntos, somos
              más fuertes, más enfocados y, sobre todo, más conectados. ¡Gracias
              por acompañarme en este viaje de crecimiento y productividad!
            </p>
          </div>
        </div>
        <div className="presentation_element_">
          <div className="presentation_element_card">
            <img
              className="border_element"
              src={img_card_presentation}
              alt=""
            />
            <div className="presentation_element_text">
              <h3>UNA COMUNIDAD A TU SERVICIO </h3>
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
        <div className="contenido_item">
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
        <div className="contenido_item_1">
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
        <div className="contenido_item_2">
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
      </div>
      {/* Presentación en el horario   */}
      <div className="horario_container">
        <div className="horario_card">
          <div className="horario_element_card">
            <img
              src={card_1}
              alt=""
            />
            <div className="card_text">
              <h3>TURNO MADRUGADA</h3>
              <p>
                Por las mañanas, me dedico completamente a mi trabajo, por lo
                que las transmisiones se ejecutan automáticamente, replicando un
                entorno de productividad que respeta tus tiempos. Mantenemos los
                intervalos de trabajo y descanso, asegurándonos de que puedas
                continuar con tu rutina sin interrupciones.
              </p>
              <ul>
                <li>
                  <IconTask />
                  Mayor enfoque
                </li>
                <li>
                  <IconTask />
                  Gestion de tareas
                </li>
                <li>
                  <IconTask />
                  comandos para interactuar
                </li>
                <li>
                  <IconTask />
                  Timer !focus para usaurios
                </li>
                <li>
                  <IconTask />
                  Escenas automáticas
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
          id="horario"
        >
          <div className="horario_card">
            <div className="text_elements">
              <h3>NUESTROS HORARIOS</h3>
              <p>
                Este espacio está pensado para acompañarte mientras estudias o
                trabajas, ofreciendo un ambiente de foco y constancia. Aunque no
                esté presente en cada momento, sabes que estamos juntos en esta
                jornada. Y al final de mi día laboral, estaré aquí para
                interactuar contigo y compartir un descanso bien merecido.
              </p>
              <h5>EMISIONES DIARIAS</h5>
              <ul>
                <li>Hora en Argentina: 04:00 a 19:00 hs</li>
                <li>España: 09:00 a 00:00 hs</li>
                <li>México: 01:00 a 16:00 hs</li>
                <li>Colombia: 02:00 a 17:00 hs</li>
                <li>México: 01:00 a 16:00 hs</li>
                <li>Honduras: 01:00 a 16:00 hs</li>
                <li>Brasil: 04:00 a 19:00 hs</li>
                <li>Estados Unidos (Este): 03:00 a 18:00 hs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="horario_card">
          <div className="horario_element_card">
            <img
              src={card_2}
              alt=""
            />
            <div className="card_text">
              <h3>TURNO TARDE - NOCHE</h3>
              <p>
                Por las tardes, me uno a los directos para continuar mi
                formación, explorar nuevo contenido y compartir momentos
                interactivos con la comunidad. Durante los descansos, aprovecho
                para conectarme contigo, creando un espacio único para
                acompañarnos mientras avanzamos en nuestras metas.
              </p>
              <ul>
                <li>
                  <IconTask />
                  Mayor enfoque
                </li>
                <li>
                  <IconTask />
                  Gestion de tareas
                </li>
                <li>
                  <IconTask />
                  comandos para interactuar
                </li>
                <li>
                  <IconTask />
                  Timer !focus para usaurios
                </li>
                <li>
                  <IconTask />
                  Escenas automáticas
                </li>
                <li>
                  <IconTask />
                  Música en los descansos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
