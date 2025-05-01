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

        <div className="container_comandos_card                                                                                                                                                                                                                                                                                         ">
          <div>
            <h3>AGREGAR TAREAS</h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>
                📝 !tarea / !add / !task / !t + descripción de la tarea
              </span>
              <p>
                Estos comandos te permiten agregar una nueva tarea con una
                descripción personalizada. Si prefieres una forma más breve,
                podés usar la versión corta <strong>!t</strong>. El sistema
                permite un máximo de <strong>10 tareas</strong> por usuario. Si
                intentás superar ese límite, recibirás un mensaje de
                advertencia.
              </p>
              <p>
                These commands allow you to add a new task with a custom
                description. For a shorter version, you can use{" "}
                <strong>!t</strong>. The task limit is{" "}
                <strong>10 per user</strong>. If you try to exceed it, a warning
                will be shown.
              </p>
              <p>
                <strong>Ejemplo / Example:</strong>{" "}
                <code>!tarea Esta es la descripción de la nueva tarea</code>
              </p>
            </li>

            <li>
              <span>
                🧾 Agregar múltiples tareas: !tarea / !add / !task / !t +
                descripción 1 ; descripción 2 ; descripción 3
              </span>
              <p>
                También es posible agregar varias tareas en un solo mensaje
                separándolas con punto y coma (<strong>;</strong>). Cada tarea
                será procesada de forma individual, siempre que no superes el
                límite total de 10 tareas.
              </p>
              <p>
                You can also add multiple tasks at once by separating each one
                with a semicolon (<strong>;</strong>). Each task will be handled
                individually, as long as you don’t exceed the 10-task limit.
              </p>
              <p>
                <strong>Ejemplo / Example:</strong>{" "}
                <code>!add Comprar pan; Llamar al médico; Enviar informe</code>
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>REVISAR LISTA Y MARCAR </h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>📋 !lista / !list</span>
              <p>
                Este comando muestra en pantalla y en el chat todas las tareas
                pendientes que tenés en tu lista...
              </p>
              <p>
                This command displays all your pending tasks on screen and in
                the chat...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!list</code>
              </p>
            </li>

            <li>
              <span>✅ !marcar / !check / !v + ID de tarea</span>
              <p>
                Marca una tarea como <strong>realizada</strong> usando su ID...
              </p>
              <p>
                Marks a task as <strong>completed</strong> using its ID...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!check 4</code>
              </p>
            </li>

            <li>
              <span>🚀 !realizadas / !pickup</span>
              <p>
                Marca todas tus tareas pendientes como realizadas en un solo
                paso...
              </p>
              <p>Marks all your pending tasks as completed at once...</p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!pickup</code>
              </p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          <div>
            <h3>MODIFICAR Y ELIMINAR TAREAS</h3>
          </div>
          <ul className="container_comandos_card_list">
            <li>
              <span>
                ✏️ !modificar / !cambiar / !change + ID + nueva descripción
              </span>
              <p>
                Este comando te permite <strong>editar o actualizar</strong> una
                tarea...
              </p>
              <p>
                Use this command to <strong>edit or update</strong> a task...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong>{" "}
                <code>!modificar s3u Estudiar capítulo 5 de matemáticas</code>
              </p>
            </li>

            <li>
              <span>🗑️ !eliminar / !borrar / !delete / !x + ID de tarea</span>
              <p>
                Este comando se utiliza para <strong>quitar una tarea</strong>{" "}
                de tu lista...
              </p>
              <p>
                This command is used to <strong>remove</strong> a task...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!delete 2</code>
              </p>
            </li>

            <li>
              <span>🔥 !clear / !borrartodo</span>
              <p>
                Con este comando podés <strong>eliminar todas</strong> las
                tareas de tu lista...
              </p>
              <p>
                This command allows you to <strong>delete all</strong> your
                tasks...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!clear</code>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Comandos de actividades   */}
      <section className="container_comandos">
        {/* Comandos de actividades   */}
        <div className="container_comandos_titles">
          <IconActivities />
          <div className="container_comandos_titles_text">
            <h3>Comparte lo que estás haciendo</h3>
            <p className="container_comandos_card_p">
              Haz que la comunidad sepa en qué estás trabajando o disfrutando
              con comandos instantáneos.
            </p>
          </div>
        </div>

        <div className="container_comandos_card">
          {/* PRODUCTIVIDAD */}
          <div>
            <h3>Productividad</h3>
          </div>
          <p>
            Actividades relacionadas con el estudio, trabajo, planificación y
            gestión del tiempo. Esta categoría reúne momentos donde se busca
            avanzar en tareas intelectuales, cumplir metas o mantener el orden
            del día.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
              <span>!agenda</span>
              <p>Revisando Agenda 📒</p>
            </li>
            <li>
              <span>!administrando</span>
              <p>Administrando 📑</p>
            </li>
            <li>
              <span>!tp</span>
              <p>Trabajo práctico 📑</p>
            </li>
            <li>
              <span>!resumen</span>
              <p>Haciendo Resumen 📑</p>
            </li>
            <li>
              <span>!call</span>
              <p>En llamada 📱</p>
            </li>
            <li>
              <span>!reunión / !reunion</span>
              <p>En reunión 📱</p>
            </li>
            <li>
              <span>!revisando</span>
              <p>Revisando contenido 💻</p>
            </li>
            <li>
              <span>!estudiando</span>
              <p>Estudiando 📓</p>
            </li>
            <li>
              <span>!programando</span>
              <p>Programando 💻</p>
            </li>
            <li>
              <span>!trabajando</span>
              <p>Trabajando 💻</p>
            </li>
            <li>
              <span>!curso</span>
              <p>Haciendo curso 💻</p>
            </li>
            <li>
              <span>!mensajes</span>
              <p>Revisando Mensajes 📩</p>
            </li>
            <li>
              <span>!organizar</span>
              <p>Organizando 🧮</p>
            </li>
            <li>
              <span>!planificando</span>
              <p>Estoy planificando 📅</p>
            </li>
            <li>
              <span>!lectura</span>
              <p>Está leyendo 📖</p>
            </li>
            <li>
              <span>!errores</span>
              <p>Está revisando errores 👓</p>
            </li>
            <li>
              <span>!instruyendo</span>
              <p>Está instruyendo ✍🏻</p>
            </li>
            <li>
              <span>!reporte</span>
              <p>Está generando reportes 📑</p>
            </li>
            <li>
              <span>!subrayar</span>
              <p>Está subrayando 📑</p>
            </li>
            <li>
              <span>!clases</span>
              <p>En clases 🏫</p>
            </li>
            <li>
              <span>!desarrollando</span>
              <p>Desarrollando 💻</p>
            </li>
            <li>
              <span>!diseñando</span>
              <p>Me encuentro diseñando 📐</p>
            </li>
            <li>
              <span>!bitacora</span>
              <p>Realizando mi bitácora diaria 🗒️</p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          {/* AUTOCUIDADO */}
          <div>
            <h3>Autocuidado</h3>
          </div>
          <p className="container_comandos_card_p">
            Momentos esenciales del día a día que todos compartimos: comida,
            higiene y autocuidado.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
              <span>!baño</span>
              <p>En el baño 🚽</p>
            </li>
            <li>
              <span>!ducha</span>
              <p>Duchándose 🛀🏻</p>
            </li>
            <li>
              <span>!paseo</span>
              <p>Dando un paseo 🌳</p>
            </li>
            <li>
              <span>!calentar</span>
              <p>Calentando 🫖</p>
            </li>
            <li>
              <span>!meditar</span>
              <p>Meditando 🧘🏻‍♀️</p>
            </li>
            <li>
              <span>!siesta</span>
              <p>Mimiendo 🛌🏻</p>
            </li>
            <li>
              <span>!dormir</span>
              <p>Mimiendo 🛌🏻</p>
            </li>
            <li>
              <span>!dientes</span>
              <p>Cepillando dientes 🪥</p>
            </li>
            <li>
              <span>!estirar</span>
              <p>Estirando 🧎🏻‍♂️‍➡️</p>
            </li>
            <li>
              <span>!lavadora</span>
              <p>Lavando 👕</p>
            </li>
            <li>
              <span>!limpiando</span>
              <p>Está limpiando 🗑️</p>
            </li>
          </ul>
        </div>

        <div className="container_comandos_card">
          {/* OCIO */}
          <div>
            <h3>Ocio</h3>
          </div>
          <p className="container_comandos_card_p">
            Momentos esenciales del día a día que todos compartimos: comida,
            higiene y autocuidado.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
              <span>!almorzar</span>
              <p>Almorzando 🍽️</p>
            </li>
            <li>
              <span>!desayunar</span>
              <p>Desayunando 🍵</p>
            </li>
            <li>
              <span>!merendar</span>
              <p>Merendando 🍪</p>
            </li>
            <li>
              <span>!cenar</span>
              <p>Cenando 🍽️</p>
            </li>
            <li>
              <span>!fruta</span>
              <p>Comiendo fruta 🍊</p>
            </li>
            <li>
              <span>!mate / !tereré / !terere</span>
              <p>Tomando mate o tereré 🧉</p>
            </li>
            <li>
              <span>!té / !te / !télimon / !telimon / !techai</span>
              <p>Tomando un té 🍵</p>
            </li>
            <li>
              <span>!café / !latte</span>
              <p>Tomando café ☕</p>
            </li>
            <li>
              <span>!matecocido</span>
              <p>Tomando un mate cocido 🍵</p>
            </li>
            <li>
              <span>!cocina / !cocinando</span>
              <p>En la cocina 🍳</p>
            </li>
            <li>
              <span>!compras</span>
              <p>Comprando 🛒</p>
            </li>
            <li>
              <span>!serie</span>
              <p>Mirando serie 📺</p>
            </li>
            <li>
              <span>!jugando</span>
              <p>Jugando 🎮</p>
            </li>
            <li>
              <span>!musica</span>
              <p>Escuchando música 🎧</p>
            </li>
            <li>
              <span>!crochet</span>
              <p>Mi momento del Crochet llegó 🧶</p>
            </li>
            <li>
              <span>!volví / !volvi</span>
              <p>Regresando ☝🏻</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Comandos de user data
       */}

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
