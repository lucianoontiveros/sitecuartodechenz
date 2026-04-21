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
        <ScrollAnimation
          effect="fade-up"
          delay={100}
        >
          <h2 className="aviso-titulo">Cierre de año</h2>
        </ScrollAnimation>

        <div className="aviso-contenido">
          <ScrollAnimation
            effect="fade-right"
            delay={200}
            className="aviso-texto"
          >
            <div className="aviso-meta">
              <span className="aviso-fecha">Diciembre de 2025</span>
              <span className="aviso-autor">Por: Lu</span>
            </div>

            <div>
              <p>
                <strong>
                  Bueno, gente hermosa, gracias de corazón por la compañía
                  durante todo este 2025.
                </strong>
              </p>

              <p>
                En estos días, en algunos saluditos, me dejaron mensajes de
                agradecimiento por el espacio, y quiero decir algo importante:
                dure lo que dure este canal, mi intención siempre es que sea
                provechoso, y estar a la altura del compromiso que implica
                compartir tiempo con otros.
              </p>

              <p>
                El canal ya lleva cinco años de vida, y un poco menos con el
                formato <em>Study With Me</em>. Por acá pasaron muchísimas
                personas; algunas estuvieron un rato, otras dejaron huella, pero
                todas aportaron algo. Con su presencia, con su paciencia y con
                su atención en el detalle, me permitieron construir lo que hoy
                es el Cuarto de Chenz y sostenerme en el hacer y en el mejorar.
              </p>

              <p>
                Va a sonar simple, pero es sincero: parte de poder irme a dormir
                tranquilo es sentir que no le debo nada a nadie. Todo está
                saldado. Porque cuando vos agradecés el espacio, yo agradezco tu
                tiempo, y eso vale muchísimo. Vivimos en un mundo complejo, y lo
                único que nos queda es intentar hacer las cosas lo más simple
                posible. A veces sale bien, a veces sale pésimo, pero lo que
                marca la diferencia es poder entender, corregir y seguir.
              </p>

              <p>
                Así que si a lo largo del año acertamos o nos equivocamos, no
                siento que nadie me deba nada, ni que yo deba algo. Simplemente
                hago lo mejor que puedo, en consonancia con lo que creo. Y con
                eso, alcanza. Gracias de verdad a quienes lo valoran y eligen
                quedarse.
              </p>

              <p>
                <strong>
                  Mi deseo personal, frente a ustedes y a sus proyectos, es que
                  no vuelvan más a este canal.
                </strong>
              </p>

              <p>
                Que se reciban, que empiecen donde tengan que empezar, que hagan
                lo que tengan que hacer y que sean felices, carajo. Que hagan lo
                que les gusta y no se jodan la vida: los miedos no están para
                evitarlos, están para atravesarlos.
              </p>

              <p>
                Lo digo de corazón, porque para mí así tiene que ser. Y debería
                ser lo más normal del mundo. Acá hubo gente que pasó ocho horas
                seguidas conmigo, una jornada completa de trabajo, y hace dos
                años que no veo. Y cuando exponen sus rutinas, sus profesiones,
                sus logros, celebrando cosas, se me llenan los ojos de
                felicidad. De verdad. Me llena el alma.
              </p>

              <p>
                Porque al final de cuentas, una de las cosas más bonitas de la
                vida es poder alegrarse sinceramente cuando a la buena gente le
                va bien.
              </p>

              <p>
                Intento no medir si un año fue malo o bueno. Uso números cuando
                hacen falta, porque son claros y ayudan a profundizar, a ver
                dónde mejorar, dónde desistir y dónde prestar atención. Pero,
                sinceramente, prefiero evaluarlo por lo que aprendí y por lo que
                pude soltar.
              </p>

              <p>
                Ojalá hayas aprendido un montón. Ojalá te quieras mucho. Y ojalá
                hayas entendido que parte de tu responsabilidad es adoptar
                aquello que te hace bien y dejar de lado lo que no forma parte
                de tus intereses ni de tus valores.
              </p>

              <p>
                Entiendo todo lo otro también: a medida que uno crece en edad y
                en logros, aparecen más despedidas. Pero vos y yo lo sabemos:
                más allá del estatus, del lugar o de las circunstancias, las
                dificultades siempre van a estar. Al final de cuentas, lo que
                nos empuja hacia adelante es el amor y la confianza que nos
                damos a nosotros mismos y a los demás.
              </p>

              <p>
                Un abrazo enorme 🤍
                <br />
                Nos vemos en el estudio.
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
        <ScrollAnimation
          effect="fade-up"
          delay={200}
        >
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
