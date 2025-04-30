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
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              dolores inventore praesentium soluta saepe est ea, sunt, at totam
              cumque voluptatem minus delectus autem? Adipisci sint vitae harum
              repellat perferendis. Exercitationem, dolorum voluptates? Ab,
              voluptatem itaque adipisci enim pariatur eius quasi ipsam minima,
              illo assumenda saepe quia nam dolor impedit, officia est soluta
              veritatis repellendus rerum blanditiis magnam rem perferendis.
              Officia iure modi maiores ea consequatur architecto ducimus, illo
              commodi maxime obcaecati alias magnam numquam. Officiis harum
              itaque distinctio odit, quas voluptatibus ipsum aliquid ab
              aspernatur, nesciunt tempore cumque vero. Tempora officiis aliquam
              sint amet? Corporis reprehenderit id accusamus omnis, blanditiis
              eum asperiores corrupti quaerat doloribus vel accusantium dolorem
              placeat eos sapiente ex totam eligendi vero pariatur a
              praesentium! Sint. Quidem veritatis officia nam velit, voluptates
              debitis corporis earum nesciunt ratione exercitationem amet non
              laborum assumenda. Neque totam aspernatur nostrum mollitia
              corporis quas dolores? Asperiores praesentium deleniti aspernatur
              facilis eligendi. Inventore earum voluptatum accusamus odit,
              voluptates quidem nostrum aspernatur! Omnis ea provident,
              reprehenderit facilis, mollitia, qui nesciunt iure fuga quis
              debitis hic! Deleniti, provident! Earum temporibus quam ipsam
              iusto laudantium.
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
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              dolores inventore praesentium soluta saepe est ea, sunt, at totam
              cumque voluptatem minus delectus autem? Adipisci sint vitae harum
              repellat perferendis. Exercitationem, dolorum voluptates? Ab,
              voluptatem itaque adipisci enim pariatur eius quasi ipsam minima,
              illo assumenda saepe quia nam dolor impedit, officia est soluta
              veritatis repellendus rerum blanditiis magnam rem perferendis.
              Officia iure modi maiores ea consequatur architecto ducimus, illo
              commodi maxime obcaecati alias magnam numquam. Officiis harum
              itaque distinctio odit, quas voluptatibus ipsum aliquid ab
              aspernatur, nesciunt tempore cumque vero. Tempora officiis aliquam
              sint amet? Corporis reprehenderit id accusamus omnis, blanditiis
              eum asperiores corrupti quaerat doloribus vel accusantium dolorem
              placeat eos sapiente ex totam eligendi vero pariatur a
              praesentium! Sint. Quidem veritatis officia nam velit, voluptates
              debitis corporis earum nesciunt ratione exercitationem amet non
              laborum assumenda. Neque totam aspernatur nostrum mollitia
              corporis quas dolores? Asperiores praesentium deleniti aspernatur
              facilis eligendi. Inventore earum voluptatum accusamus odit,
              voluptates quidem nostrum aspernatur! Omnis ea provident,
              reprehenderit facilis, mollitia, qui nesciunt iure fuga quis
              debitis hic! Deleniti, provident! Earum temporibus quam ipsam
              iusto laudantium.
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
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              dolores inventore praesentium soluta saepe est ea, sunt, at totam
              cumque voluptatem minus delectus autem? Adipisci sint vitae harum
              repellat perferendis. Exercitationem, dolorum voluptates? Ab,
              voluptatem itaque adipisci enim pariatur eius quasi ipsam minima,
              illo assumenda saepe quia nam dolor impedit, officia est soluta
              veritatis repellendus rerum blanditiis magnam rem perferendis.
              Officia iure modi maiores ea consequatur architecto ducimus, illo
              commodi maxime obcaecati alias magnam numquam. Officiis harum
              itaque distinctio odit, quas voluptatibus ipsum aliquid ab
              aspernatur, nesciunt tempore cumque vero. Tempora officiis aliquam
              sint amet? Corporis reprehenderit id accusamus omnis, blanditiis
              eum asperiores corrupti quaerat doloribus vel accusantium dolorem
              placeat eos sapiente ex totam eligendi vero pariatur a
              praesentium! Sint. Quidem veritatis officia nam velit, voluptates
              debitis corporis earum nesciunt ratione exercitationem amet non
              laborum assumenda. Neque totam aspernatur nostrum mollitia
              corporis quas dolores? Asperiores praesentium deleniti aspernatur
              facilis eligendi. Inventore earum voluptatum accusamus odit,
              voluptates quidem nostrum aspernatur! Omnis ea provident,
              reprehenderit facilis, mollitia, qui nesciunt iure fuga quis
              debitis hic! Deleniti, provident! Earum temporibus quam ipsam
              iusto laudantium.
            </p>
          </div>
        </div>
      </section>

      {/* Comandos de tareas   */}
      <section className="container_comandos">
        <div className="container_comandos_titles">
          <IconList />
          <div className="container_comandos_titles_text">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.
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
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.
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
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.
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
