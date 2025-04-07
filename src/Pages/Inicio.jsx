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
import card_2 from "/img_card_two.jpg";

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
                href="https://www.instagram.com/cuarto_de_chenz/"
                target="_blank"
              >
                <Icon_instagram />
              </a>
              <a
                className="icon_bar_element"
                href="https://www.tiktok.com/@cuarto_de_chenz"
                target="_blank"
              >
                <Icon_tiktok />
              </a>
              <a
                className="icon_bar_element"
                href="https://x.com/cuartodechenz"
                target="_blank"
              >
                <Icon_x />
              </a>
              <a
                className="icon_bar_element"
                href="https://www.youtube.com/@cuarto_de_chenz"
                target="_blank"
              >
                <Icon_youtube />
              </a>
            </div>
          </div>

          <div className="inicio_banner">
            <div className="router_section">
              <div className="router_icon">
                <Avisos_img
                  width="20em"
                  height="20em"
                />
                <h3>AVISOS</h3>
              </div>
              <div className="router_icon">
                <Horario_img
                  width="20em"
                  height="20em"
                />
                <h3>HORARIO</h3>
              </div>
              <div className="router_icon">
                <Comandos_img
                  width="20em"
                  height="20em"
                />
                <h3>COMANDOS</h3>
              </div>
            </div>
            <div className="slogan_container">
              <h4>SABEMOS LO QUE SIGNIFICA TU ESFUERZO</h4>
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
        <div className="presentation_media">
          <img
            className="media_element"
            src={img_presentation}
            alt="imagen presentación"
          />

          <iframe
            className="media_element"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WkmVQohDvK8?si=W-f1cllhDpDqLlIm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="presentation_info">
          <div className="media_element text">
            <h3>PRESENTACION</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              libero non ipsa dolores quibusdam id at error similique voluptatem
              quis reprehenderit aliquid, in aliquam quia, nobis consequatur
              voluptatum? Quas, quis?
            </p>
          </div>
          <div className="media_element card">
            <img
              src={img_card_presentation}
              alt=""
            />
            <div className="media_element text">
              <h3>ESTE ES EL TITULO DE LA TARJETA </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                modi, numquam rerum delectus inventore culpa et placeat dolore
                dicta qui illo commodi distinctio atque id quidem iste minus
                maxime expedita.
              </p>
              <button>UNETE</button>
            </div>
          </div>
        </div>
      </div>
      {/* Presentación del container   */}
      <div className="contenido_conteiner">
        <div className="contenido_item">
          <img
            className="img_contenido_element"
            src={img_cuarto_1}
            alt=""
          />
          <div className="contenido_element">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium debitis inventore corrupti magnam temporibus dolores.
              Impedit consequuntur voluptatum, quae animi corrupti iusto
              accusamus voluptate, dolores eum itaque dolorem velit iste!
            </p>
          </div>
        </div>
        <div className="contenido_item_1">
          <div className="contenido_element">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium debitis inventore corrupti magnam temporibus dolores.
              Impedit consequuntur voluptatum, quae animi corrupti iusto
              accusamus voluptate, dolores eum itaque dolorem velit iste!
            </p>
          </div>
          <img
            className="img_contenido_element"
            src={img_cuarto_2}
            alt=""
          />
        </div>
        <div className="contenido_item_2">
          <img
            className="img_contenido_element"
            src={img_cuarto_4}
            alt=""
          />
          <div className="contenido_element">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium debitis inventore corrupti magnam temporibus dolores.
              Impedit consequuntur voluptatum, quae animi corrupti iusto
              accusamus voluptate, dolores eum itaque dolorem velit iste!
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
              <h3>TURNO MADRUGADA - MAÑANA</h3>
              <p>
                Por las mañanas, Chenz ocupa sus horas trabajando, por la cual
                la emisión se ejecuta automaticamente y en vivo. Manteniendo los
                tiempos productivos y tus descansos, para no interrumpir tu
                rutina.
              </p>
              <ul>
                <li>Mayor enfoque</li>
                <li>Gestion de tareas</li>
                <li>comandos para interactuar</li>
                <li>Timer !focus para usaurios</li>
                <li>Escenas automáticas</li>
                <li>Música en los descansos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="horario_element_text">
          <div className="horario_card">
            <div className="text_elements">
              <h3>HORARIOS POR PAIS</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat nulla corporis eius pariatur doloribus laborum,
                voluptatem ex commodi praesentium mollitia sequi quidem dolor
                voluptatibus consectetur provident suscipit? Tempore, saepe
                odit.
              </p>
              <h5>Listado de horarios</h5>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
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
                Por las tardes, Chenz se une a los directos para continuar su
                formación, jugando e interactuando durante los descansos, hasta
                finalizar la tranmisión.
              </p>
              <ul>
                <li>Mayor enfoque</li>
                <li>Gestion de tareas</li>
                <li>comandos para interactuar</li>
                <li>Timer !focus para usaurios</li>
                <li>Escenas automáticas</li>
                <li>Música en los descansos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
