import "./inicio.css";
import Avisos_img from "../Components/img/Avisos_img.jsx";
import Horario_img from "../Components/img/Horario_img.jsx";
import Comandos_img from "../Components/img/Comandos_img.jsx";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import img_presentation from "/img_presentation.png";

const Inicio = () => {
  return (
    <>
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
              <a href="/">CHENZ</a>
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

      <div className="presentation_container">
        <div className="presentation_media">
          <img
            className="media_element"
            src={img_presentation}
            alt="imagen presentación"
          />
          <video
            className="media_element"
            src=""
          ></video>
        </div>
        <div className="presentation_info">
          <div className="presentation_text">
            <h3>PRESENTACION</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              libero non ipsa dolores quibusdam id at error similique voluptatem
              quis reprehenderit aliquid, in aliquam quia, nobis consequatur
              voluptatum? Quas, quis?
            </p>
          </div>
          <div className="presentation_card"></div>
        </div>
      </div>

      <div className="inicio_div3"> Contenido </div>
      <div className="inicio_div4"> Horario </div>
    </>
  );
};

export default Inicio;
