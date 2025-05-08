import "./comandos.css";
import { useState } from 'react';
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
import CommandButton from "../Components/buttons/CommandButton";

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
              <CommandButton 
                displayText="📝 !tarea + descripción"
                command="!tarea |Borra aquÍ y escribe la descripción|"
              />
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
              <CommandButton 
                displayText="🧾 Agregar múltiples tareas: !tarea / !add / !task / !t +
                descripción 1 ; descripción 2 ; descripción 3"
                command="!add |Borra aquÍ y escribe la descripción 1| ; |Borra aquÍ y escribe la descripción 2| ; |Borra aquÍ y escribe la descripción 3: puedes agregar hasta 10, siempre que ingreses una punto y coma entre medio []|"
              />
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
                <code>!add Comprar pan; Llamar al médico; Enviar informe;</code>
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
            <CommandButton 
                displayText="📋 !lista / !list"
                command="!lista"
              />
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
            <CommandButton 
                displayText="✅ !marcar / !check / !v + ID de tarea"
                command="!marcar [Borra aquí y escribe el ID de la tarea]"
              />
              <p>
                Marca una tarea como <strong>realizada</strong> usando su ID...
              </p>
              <p>
                Marks a task as <strong>completed</strong> using its ID...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!check 4tf</code>
              </p>
            </li>

            <li>
            <CommandButton 
                displayText="🚀 !realizadas / !pickup"
                command="!realizadas"
              />
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
            <CommandButton 
                displayText="✏️ !modificar / !cambiar / !change + ID + nueva descripción"
                command="!modificar [Borra aquí y escribe el ID de la tarea]"
              />
             
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
            <CommandButton 
                displayText="🗑️ !eliminar / !borrar / !delete / !x + ID de tarea"
                command="!eliminar [Borra aquí y escribe el ID de la tarea]"
              />
              <p>
                Este comando se utiliza para <strong>quitar una tarea</strong>{" "}
                de tu lista...
              </p>
              <p>
                This command is used to <strong>remove</strong> a task...
              </p>
              <p>
                <strong>Ejemplo / Example:</strong> <code>!delete 2ce</code>
              </p>
            </li>

            <li>
            <CommandButton 
                displayText="🔥 !clear / !borrartodo"
                command="!borrartodo"
              />
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

        {/* PRODUCTIVIDAD */}
        <div className="container_comandos_card">
          <div>    
            <h3>Productividad</h3>
          </div>
          <p>
            Actividades enfocadas en el desarrollo intelectual, profesional o
            académico. Esta categoría abarca momentos dedicados al estudio, el
            trabajo, la creación de contenido, la solución de problemas o el
            avance hacia metas concretas.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
              <CommandButton 
                displayText="!administrando"
                command="!administrando"
              />
              <p>Administrando 📑</p>
            </li>
            <li>
              <CommandButton 
                displayText="!tp"
                command="!tp"
              />
              <p>Trabajo práctico 📑</p>
            </li>
            <li>
              <CommandButton 
                displayText="!resumen"
                command="!resumen"
              />
              <p>Haciendo Resumen 📑</p>
            </li>
            <li>
              <CommandButton 
                displayText="!estudiando"
                command="!estudiando"
              />
              <p>Estudiando 📓</p>
            </li>
            <li>
              <CommandButton 
                displayText="programando"
                command="!programando"
              />
              <p>Programando 💻</p>
            </li>
            <li>
              <CommandButton 
                displayText="!trabajando"
                command="!trabajando"
              />
              <p>Trabajando 💻</p>
            </li>
            <li>
              <CommandButton 
                displayText="!curso"
                command="!curso"
              />
              <p>Haciendo curso 💻</p>
            </li>
            <li>
              <CommandButton 
                displayText="!instruyendo"
                command="!instruyendo"
              />
              <p>Está instruyendo ✍🏻</p>
            </li>
            <li>
              <CommandButton 
                displayText="!reporte"
                command="!reporte"
              />
              <p>Está generando reportes 📑</p>
            </li>
            <li>
              <CommandButton 
                displayText="!subrayar"
                command="!subrayar"
              />
              <p>Está subrayando 📑</p>
            </li>
            <li>
              <CommandButton 
                displayText="!errores"
                command="!errores"
              />
              <p>Está revisando errores 👓</p>
            </li>
            <li>
              <CommandButton 
                displayText="!diseñando"
                command="!diseñando"
              />
              <p>Me encuentro diseñando 📐</p>
            </li>
            <li>
              <CommandButton 
                displayText="!desarrollando"
                command="!desarrollando"
              />
              <p>Desarrollando 💻</p>
            </li>
            <li>
              <CommandButton 
                displayText="!lectura"
                command="!lectura"
              />
              <p>Está leyendo 📖</p>
            </li>
          </ul>
        </div>

        {/* AUTOCUIDADO */}
        <div className="container_comandos_card">
          <div>
            <h3>Autocuidado</h3>
          </div>
          <p className="container_comandos_card_p">
            Prácticas relacionadas con el bienestar físico y mental. Incluye
            higiene personal, descanso, relajación, movimiento consciente y
            cualquier actividad que favorezca el equilibrio y el cuidado de uno
            mismo.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
              <CommandButton 
                displayText="!baño"
                command="!baño"
              />
              <p>En el baño 🚽</p>
            </li>
            <li>
            <CommandButton 
                displayText="!ducha"
                command="!ducha"
              />  
              <p>Duchándose 🛀🏻</p>
            </li>
            <li>
            <CommandButton 
                displayText="!paseo"
                command="!paseo"
              />  
              <p>Dando un paseo 🌳</p>
            </li>

            <li>
            <CommandButton 
                displayText="!meditar"
                command="!meditar"
              />  
              <p>Meditando 🧘🏻‍♀️</p>
            </li>
            <li>
            <CommandButton 
                displayText="!siesta"
                command="!siesta"
              />  
              <p>Mimiendo siesta 🛌🏻</p>
            </li>
            <li>
            <CommandButton 
                displayText="!dormir"
                command="!dormir"
              />  
              <p>Mimiendo 🛌🏻</p>
            </li>
            <li>
            <CommandButton 
                displayText="!dientes"
                command="!dientes"
              />  
              <p>Cepillando dientes 🪥</p>
            </li>
            <li>
            <CommandButton 
                displayText="!estirar"
                command="!estirar"
              />  
              <p>Estirando 🧎🏻‍♂️‍➡️</p>
            </li>
            <li>
            <CommandButton 
                displayText="!lavadora"
                command="!lavadora"
              />  
              <p>Lavando 👕</p>
            </li>
            <li>
            <CommandButton 
                displayText="!limpiando"
                command="!limpiando"
              />
              <p>Está limpiando 🗑️</p>
            </li>
            <li>
            <CommandButton 
                displayText="!baño"
                command="!baño"
              />
              <p>En el baño 🚽</p>
            </li>
          </ul>
        </div>

        {/* COMIDA */}
        <div className="container_comandos_card">
          <div>
            <h3>Comida e infusiones </h3>
          </div>
          <p className="container_comandos_card_p">
            Espacios dedicados a la alimentación y al disfrute de infusiones o
            bebidas calientes. Incluye momentos de preparación, consumo o pausas
            reconfortantes para recargar energía.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
            <CommandButton 
                displayText="!calentar"
                command="!calentar"
              />  
              <p>Calentando 🫖</p>
            </li>
            <li>
            <CommandButton 
                displayText="!almorzar"
                command="!almorzar"
              />  
              <p>Almorzando 🍽️</p>
            </li>
            <li>
            <CommandButton 
                displayText="!desayunar"
                command="!desayunar"
              />  
              <p>Desayunando 🍵</p>
            </li>
            <li>
            <CommandButton 
                displayText="!merendar"
                command="!merendar"
              />  
              <p>Merendando 🍪</p>
            </li>
            <li>
            <CommandButton 
                displayText="!cenar"
                command="!cenar"
              />  
              <p>Cenando 🍽️</p>
            </li>
            <li>
            <CommandButton 
                displayText="!fruta"
                command="!fruta"
              />  
              <p>Comiendo fruta 🍊</p>
            </li>
            <li>
            <CommandButton 
                displayText="!mate / !tereré / !terere"
                command="!mate / !tereré / !terere"
              />  
              <p>Tomando mate o tereré 🧉</p>
            </li>
            <li>
            <CommandButton 
                displayText="!té / !te / !télimon / !telimon / !techai"
                command="!té / !te / !télimon / !telimon / !techai"
              />  
              <p>Tomando un té 🍵</p>
            </li>
            <li>
            <CommandButton 
                displayText="!café / !latte"
                command="!café / !latte"
              />  
              <p>Tomando café ☕</p>
            </li>
            <li>
            <CommandButton 
                displayText="!matecocido"
                command="!matecocido"
              />  
              <p>Tomando un mate cocido 🍵</p>
            </li>
            <li>
            <CommandButton 
                displayText="!cocina / !cocinando"
                command="!cocina / !cocinando"
              />  
              <p>En la cocina 🍳</p>
            </li>
          </ul>
        </div>

        {/* ORGANIZACION */}
        <div className="container_comandos_card">
          <div>
            <h3>Organización</h3>
          </div>
          <p>
            Tareas que ayudan a estructurar, planificar y revisar el día a día.
            Esta categoría reúne actividades como organizar documentos,
            actualizar agendas, planificar tareas o reflexionar sobre el
            progreso personal.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
            <CommandButton 
                displayText="!organizar"
                command="!organizar"
              />  
              <p>Organizando 🧮</p>
            </li>
            <li>
            <CommandButton 
                displayText="!agenda"
                command="!agenda"
              />  
              <p>Revisando Agenda 📒</p>
            </li>
            <li>
            <CommandButton 
                displayText="!bitacora"
                command="!bitacora"
              />  
              <p>Realizando mi bitácora diaria 🗒️</p>
            </li>
            <li>
            <CommandButton 
                displayText="!revisando"
                command="!revisando"
              />
              <p>Revisando contenido 💻</p>
            </li>
            <li>
            <CommandButton 
                displayText="!mensajes"
                command="!mensajes"
              />  
              <p>Revisando Mensajes 📩</p>
            </li>
            <li>
            <CommandButton 
                displayText="!planificando"
                command="!planificando"
              />  
              <p>Estoy planificando 📅</p>
            </li>
          </ul>
        </div>

        {/* EVENTOS */}
        <div className="container_comandos_card">
          <div>
            <h3>Eventos</h3>
          </div>
          <p>
            Momentos puntuales o compartidos con otros, como reuniones,
            llamadas, clases o salidas. Representan instancias sincronizadas,
            presenciales o virtuales, que requieren atención y participación
            activa.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
            <CommandButton 
                displayText="!call"
                command="!call"
              />  
              <p>En llamada 📱</p>
            </li>
            <li>
            <CommandButton 
                displayText="!reunión / !reunion"
                command="!reunión / !reunion"
              />  
              <p>En reunión 📱</p>
            </li>
            <li>
            <CommandButton 
                displayText="!clases"
                command="!clases"
              />  
              <p>En clases 🏫</p>
            </li>
            <li>
            <CommandButton 
                displayText="!volví / !volvi"
                command="!volví / !volvi"
              />  
              <p>Regresando ☝🏻</p>
            </li>
            <li>
            <CommandButton 
                displayText="!compras"
                command="!compras"
              />  
              <p>Comprando 🛒</p>
            </li>
          </ul>
        </div>

        {/* OCIO */}
        <div className="container_comandos_card">
          <div>
            <h3>Ocio</h3>
          </div>
          <p className="container_comandos_card_p">
            Actividades recreativas para desconectar, disfrutar o estimular la
            creatividad. Incluye momentos de entretenimiento, pasatiempos y
            hobbies que ayudan a equilibrar la rutina.
          </p>
          <ul className="container_comandos_card_list ul_activities">
            <li>
            <CommandButton 
                displayText="!serie"
                command="!serie"
              />  
              <p>Mirando serie 📺</p>
            </li>
            <li>
            <CommandButton 
                displayText="!jugando"
                command="!jugando"
              />  
              <p>Jugando 🎮</p>
            </li>
            <li>
            <CommandButton 
                displayText="!musica"
                command="!musica"
              />  
              <p>Escuchando música 🎧</p>
            </li>
            <li>
            <CommandButton 
                displayText="!crochet"
                command="!crochet"
              />  
              <p>Mi momento del Crochet llegó 🧶</p>
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

        {/* INFORMACION*/}
        <div className="container_comandos_card">
          {" "}
          <div>
            {" "}
            <h3>Agregar información</h3>{" "}
          </div>{" "}
          <p className="container_comandos_card_p">
            {" "}
            Usa estos comandos para contarnos más sobre ti: t nacionalidad, tu
            carrera, tu fecha de nacimiento o tus redes sociales. Esto nos ayuda
            a conocerte mejor y a generar vínculos dentro de la comunidad.{" "}
          </p>{" "}
          <ul className="container_comandos_card_list">
            {" "}
            <li>
              {" "}
              <span>!nacionalidad + tu nacionalidad</span>{" "}
              <p>
                {" "}
                Registra tu nacionalidad para que podamos saber de dónde eres y
                celebrar la diversidad de la comunidad. Ejemplo:{" "}
                <code>!nacionalidad Argentina</code>{" "}
              </p>{" "}
            </li>{" "}
            <li>
              {" "}
              <span>!nacimiento + dd-mm</span>{" "}
              <p>
                {" "}
                Guarda tu fecha de nacimiento (sin el año) para que podamos
                identificar tu signo zodiacal y mostrarlo en tu perfil. Ejemplo:{" "}
                <code>!nacimiento 10-09</code>{" "}
              </p>{" "}
            </li>{" "}
            <li>
              {" "}
              <span>!estudiopara + tu carrera o área de estudio</span>{" "}
              <p>
                {" "}
                Comparte con todos qué estás estudiando actualmente o en qué te
                estás formando profesionalmente. Ejemplo:{" "}
                <code>!estudiopara Medicina</code>{" "}
              </p>{" "}
            </li>{" "}
            <li>
              {" "}
              <span>!opositopara + descripción de la oposición</span>{" "}
              <p>
                {" "}
                Si estás preparando una oposición, puedes especificarla con este
                comando para que otros lo sepan y puedan acompañarte. Ejemplo:{" "}
                <code>!opositopara Auxilio Judicial</code>{" "}
              </p>{" "}
            </li>{" "}
            <li>
              {" "}
              <span>!instagram + tu usuario</span>{" "}
              <p>
                {" "}
                Añade tu cuenta de Instagram para que los demás puedan seguirte.
                Ejemplo: <code>!instagram @miusuario</code>{" "}
              </p>{" "}
            </li>{" "}
          </ul>{" "}
        </div>

        {/* REVISAR INFORMACIÓNS*/}
        <div className="container_comandos_card">
          {" "}
          <div>
            {" "}
            <h3>Revisar perfil</h3>{" "}
          </div>{" "}
          <p className="container_comandos_card_p">
            {" "}
            Con estos comandos podrás ver tu perfil o consultar el de otros
            miembros de la comunidad. Ideal para conectar, recordar qué estudia
            alguien o simplemente conocernos mejor.{" "}
          </p>{" "}
          <ul className="container_comandos_card_list">
            {" "}
            <li>
              {" "}
              <span>!datos</span>{" "}
              <p>
                {" "}
                Consulta toda tu información personal registrada: nacionalidad,
                fecha de nacimiento, estudios, signo zodiacal, etc.{" "}
              </p>{" "}
            </li>{" "}
            <li>
              {" "}
              <span>!info + @usuario</span>{" "}
              <p>
                {" "}
                Muestra los datos de otro usuario si este ya registró su
                información previamente. Ejemplo: <code>
                  !info @Pepita
                </code>{" "}
              </p>{" "}
            </li>{" "}
            <li>
              {" "}
              <span>!croqueta</span>{" "}
              <p>
                {" "}
                Si tienes puntos de gestión disponibles, puedes usarlos para
                darle una deliciosa croqueta a Brunito. 🐶 ¡Un mimo digital para
                nuestra mascota comunitaria!{" "}
              </p>{" "}
            </li>{" "}
          </ul>{" "}
        </div>
      </section>
    </div>
  );
};

export default Comandos;
