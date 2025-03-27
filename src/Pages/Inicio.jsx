import "./inicio.css";
import Aviso_img from "/img/Avisos_img.jsx";
import Horario_img from "/img/Horario_img.jsx";
import Comandos_img from "/img/Comandos_img.jsx";

const Inicio = () => {
  return (
    <>
      <div className="inicio_container">
        <section className="title_section">
          <div className="title_container">
            <h1>CUARTO DE CHENZ</h1>
            <div className="bar_icon">
              <img
                className="icon_bar"
                alt=""
              />
              <img
                className="icon_bar"
                alt=""
              />
              <img
                className="icon_bar"
                alt=""
              />
              <img
                className="icon_bar"
                alt=""
              />
            </div>
          </div>
          <div className="router_section">
            <div className="router_icon">
              <Aviso_img width="20em" height="20em" />
              <h3>AVISOS</h3>
            </div>
            <div className="router_icon">
              <Horario_img width="20em" height="20em" />
              <h3>HORARIO</h3>
            </div>
            <div className="router_icon">
              <Comandos_img width="20em" height="20em" />
              <h3>COMANDOS</h3>
            </div>
          </div>
          <div className="slogan_container">
            <h4>
              Sabemos lo que implica tu esfuerzo
            </h4>
            <button>Chenz</button>
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
      <div className="inicio_div2"> Presentacion </div>
      <div className="inicio_div3"> Contenido </div>
      <div className="inicio_div4"> Horario </div>
    </>
  );
};

export default Inicio;
