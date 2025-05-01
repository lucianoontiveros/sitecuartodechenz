import "./comandos.css";
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";
import card_comando_tareas from "/card_comandos_1.png";
import card_comando_activities from "/card_comandos_2.png";
import card_comando_userdata from "/card_comandos_3.png";
import IconList from "../Components/img/IconList.jsx";
import IconActivities from "../Components/img/IconActivities.jsx";
import IconDataUser from "../Components/img/IconDataUser.jsx";

const Comandos = () => {
  return (
    <div className="container_comandos">
      {/* inicio  */}
      <section className="title_container_comandos">
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
      </section>

      {/* induce */}
      <section className="container_indice">
        <div className="container_indice_item">
          {" "}
          <img
            src={card_comando_tareas}
            alt=""
          />{" "}
          <div>
            <h3>GESTIÓN INTELIGENTE DE TAREAS</h3>
            <p>
              ✅ 📌 Tomar el control de tus pendientes nunca fue tan fácil. A
              través de comandos simples, puedes gestionar tu lista de tareas
              sin distracciones ni complicaciones. ✍️ Agrega nuevas actividades
              con rapidez, 🛠️ edita los detalles cuando lo necesites, ✅ marca
              tareas como completadas para llevar un seguimiento preciso y 🗑️
              elimina aquellas que ya no sean relevantes. ¿Necesitas un sistema
              que se adapte a tu ritmo de vida? ¡Aquí lo tienes! Cada tarea
              puede ser registrada y manipulada en segundos, permitiéndote
              enfocarte en lo que realmente importa. ⏳ Con esta función,
              transformarás el caos en productividad, estructurando tu día de
              manera eficiente sin perder tiempo en procesos tediosos. La
              organización está al alcance de un comando. 🚀
            </p>
          </div>
        </div>

        <div className="container_indice_item">
          {" "}
          <img
            src={card_comando_activities}
            alt=""
          />{" "}
          <div>
            <h3>COMPARTE LO QUE ESTÁS HACIENDO</h3>
            <p>
              💡 La comunidad está viva y en constante movimiento, y ahora
              puedes ser parte de esa dinámica compartiendo en tiempo real lo
              que estás haciendo. ⏳ Con un solo comando, puedes anunciar si
              estás 📖 leyendo, 📚 estudiando, 🍳 cocinando, 😴 descansando o 💼
              trabajando, entre muchas otras actividades. ¿Por qué es importante
              esto? 🤝 Porque te permite conectar con personas que están en
              situaciones similares, generar conversaciones interesantes y hacer
              que tu presencia en la comunidad sea más auténtica. 💬 ¿Te
              imaginas una red donde todos intercambian lo que están haciendo en
              el momento, generando una interacción fluida y espontánea? 🌐 Aquí
              es posible. Con esta función, no solo te expresas, sino que
              también descubres qué está pasando en la comunidad de una manera
              rápida y entretenida. ✨ ¡Ser parte de la conversación nunca fue
              tan accesible!
            </p>
          </div>
        </div>

        <div className="container_indice_item">
          {" "}
          <img
            src={card_comando_userdata}
            alt=""
          />{" "}
          <div>
            <h3>PERSONALIZA TU PERFIL</h3>
            <p>
              🏷️ 🆙 Tu identidad es única, y ahora puedes reflejarla dentro de
              la comunidad con información que te define. 🇦🇷 Registra tu
              nacionalidad, 🎂 fecha de cumpleaños, 📖 carrera o estudios
              actuales, e incluso 🔗 tu perfil de Instagram para que otros
              puedan conocerte mejor y conectar contigo de manera auténtica. 💡
              Compartir estos detalles permite fortalecer relaciones dentro de
              la comunidad, crear redes con personas de intereses similares y
              potenciar tu presencia en un entorno colaborativo. 🤝 La comunidad
              es un espacio donde cada usuario aporta algo valioso, y tu perfil
              personalizado es la puerta de entrada para nuevas conexiones. 🌟
              Ya sea que busques amistades, compañeros de estudio o simplemente
              compartir quién eres, esta función te permite hacerlo de manera
              sencilla y efectiva. 🏆 ¡Haz que tu perfil cobre vida con cada
              detalle que agregues!
            </p>
          </div>
        </div>
      </section>

      {/* Comandos de tareas   */}
      <section className="container_comandos">
        <div className="container_comandos_titles">
          <IconList />
          <div className="container_comandos_titles_text">
            <h3>Gestión Inteligente de Tareas.</h3>
            <p>
              Organiza tu día con comandos simples: agrega, modifica, completa o
              elimina tus tareas en segundos.{" "}
            </p>
          </div>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Comandos de actividades   */}
      <section className="container_comandos">
        <div className="container_comandos_titles">
          <IconActivities />
          <div className="container_comandos_titles_text">
            <h3>Comparte lo que estás haciendo</h3>
            <p>
              Haz que la comunidad sepa en qué estás trabajando o disfrutando
              con comandos instantáneos.
            </p>
          </div>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Comandos de actividades   */}
      <section className="container_comandos">
        <div className="container_comandos_titles">
          <IconDataUser />
          <div className="container_comandos_titles_text">
            <h3>Personaliza tu perfil</h3>
            <p>
              Dale vida a tu presencia en la comunidad registrando tu
              nacionalidad, cumpleaños, estudios y redes sociales.
            </p>
          </div>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
            <li>
              <span>Lorem ipsum dolor.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptatibus nisi quae, optio ipsam illo nostrum hic
                dicta nulla assumenda! Eaque, aperiam! Illo dolore quam quae
                voluptas cumque harum molestiae.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Comandos;
