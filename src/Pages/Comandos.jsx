import './comandos.css'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

import Icon_instagram from '../Components/img_icons/Icon_instagram.jsx'
import Icon_tiktok from '../Components/img_icons/Icon_tiktok.jsx'
import Icon_x from '../Components/img_icons/Icon_x.jsx'
import Icon_youtube from '../Components/img_icons/Icon_youtube.jsx'

import card_comando_tareas from '/card_comandos_1.png'
import card_comando_activities from '/card_comandos_2.png'
import card_comando_userdata from '/card_comandos_3.png'

import IconList from '../Components/img/IconList.jsx'
import IconActivities from '../Components/img/IconActivities.jsx'
import IconDataUser from '../Components/img/IconDataUser.jsx'

import CommandExplorer from '../Components/CommandExplorer'

import shareActivitySection from '../Data/commandsData'

const Comandos = () => {
  const [ref1, isVisible1] = useScrollAnimation()
  const [ref2, isVisible2] = useScrollAnimation()
  const [ref3, isVisible3] = useScrollAnimation()
  const [ref4, isVisible4] = useScrollAnimation()
  const [ref5, isVisible5] = useScrollAnimation()

  return (
    <div className="container_comandos_page">

      {/* =========================================================
          PORTADA
      ========================================================= */}

      <section
        ref={ref1}
        className={`title_container_comandos fade-in-up ${
          isVisible1 ? 'visible' : ''
        }`}
      >
        <h1>CUARTO DE CHENZ</h1>

        <div className="bar_icon">
          <a
            className="icon_bar_element"
            href="https://www.instagram.com/luciano.a.ontiveros/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon_instagram />
          </a>

          <a
            className="icon_bar_element"
            href="https://www.tiktok.com/@cuartodechenz"
            target="_blank"
            rel="noreferrer"
          >
            <Icon_tiktok />
          </a>

          <a
            className="icon_bar_element"
            href="https://x.com/AgustnOntivero6"
            target="_blank"
            rel="noreferrer"
          >
            <Icon_x />
          </a>

          <a
            className="icon_bar_element"
            href="https://www.youtube.com/@cuartodechenz"
            target="_blank"
            rel="noreferrer"
          >
            <Icon_youtube />
          </a>
        </div>
      </section>

      {/* =========================================================
          ÍNDICE
      ========================================================= */}

      <section
        ref={ref2}
        className={`container_indice fade-in-up ${
          isVisible2 ? 'visible' : ''
        }`}
      >

        {/* TAREAS */}

        <button
          ref={ref3}
          type="button"
          className={`container_indice_item fade-in-left ${
            isVisible3 ? 'visible' : ''
          }`}
          onClick={() =>
            document
              .getElementById('gestion-tareas')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <img src={card_comando_tareas} alt="" />

          <div className="container_indice_item_overlay">
            <h3>GESTIÓN DE TAREAS</h3>

            <p>
              Organizá tus pendientes directamente desde el chat.
              Agregá, completá, modificá o eliminá tareas usando
              comandos simples.
            </p>
          </div>
        </button>

        {/* ACTIVIDADES */}

        <button
          ref={ref4}
          type="button"
          className={`container_indice_item fade-in-right ${
            isVisible4 ? 'visible delay-1' : ''
          }`}
          onClick={() =>
            document
              .getElementById('compartir-actividades')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <img src={card_comando_activities} alt="" />

          <div className="container_indice_item_overlay">
            <h3>COMPARTÍ LO QUE ESTÁS HACIENDO</h3>

            <p>
              Contale a la comunidad qué estás haciendo en este
              momento y descubrí qué están haciendo los demás.
            </p>
          </div>
        </button>

        {/* PERFIL */}

        <button
          ref={ref5}
          type="button"
          className={`container_indice_item fade-in-left ${
            isVisible5 ? 'visible delay-2' : ''
          }`}
          onClick={() =>
            document
              .getElementById('personalizar-perfil')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <img src={card_comando_userdata} alt="" />

          <div className="container_indice_item_overlay">
            <h3>PERSONALIZÁ TU PERFIL</h3>

            <p>
              Compartí información sobre vos y personalizá tu
              presencia dentro de la comunidad.
            </p>
          </div>
        </button>

      </section>

      {/* =========================================================
          GESTIÓN DE TAREAS
      ========================================================= */}

      <section
        id="gestion-tareas"
        className="command-section"
      >

        <div className="container_comandos_titles">

          <IconList />

          <div className="container_comandos_titles_text">

            <h3>Gestión inteligente de tareas</h3>

            <p>
              Organizá tus pendientes directamente desde el chat.
              Buscá el comando que necesitás y ejecutalo con un solo clic.
            </p>

          </div>

        </div>

        <CommandExplorer
          groups={taskCommandGroups}
        />

      </section>

      {/* =========================================================
          COMPARTIR ACTIVIDADES
      ========================================================= */}

      <section
        id="compartir-actividades"
        className="command-section"
      >

        <div className="container_comandos_titles">

          <IconActivities />

          <div className="container_comandos_titles_text">

            <h3>{shareActivitySection.heading}</h3>

            <p>
              {shareActivitySection.intro}
            </p>

          </div>

        </div>

        <CommandExplorer
  groups={shareActivitySection.groups}
  variant="tags"
/>
      </section>

      {/* =========================================================
          PERSONALIZAR PERFIL
      ========================================================= */}

      <section
        id="personalizar-perfil"
        className="command-section"
      >

        <div className="container_comandos_titles">

          <IconDataUser />

          <div className="container_comandos_titles_text">

            <h3>Personalizá tu perfil</h3>

            <p>
              Registrá información sobre vos y compartila con la
              comunidad para que otros puedan conocerte mejor.
            </p>

          </div>

        </div>

        <CommandExplorer
          groups={profileCommandGroups}
        />

      </section>

      {/* =========================================================
          GESTIÓN DE EXÁMENES
      ========================================================= */}

      <section
        id="gestion-examenes"
        className="command-section"
      >

        <div className="container_comandos_titles">

          <div className="command-section-title-icon">
            🎓
          </div>

          <div className="container_comandos_titles_text">

            <h3>Gestión de exámenes</h3>

            <p>
              Registrá, consultá y organizá tus próximos exámenes
              directamente desde el chat.
            </p>

          </div>

        </div>

        <CommandExplorer
          groups={examCommandGroups}
        />

      </section>

    </div>
  )
}


/* ===============================================================
   COMANDOS DE TAREAS
================================================================ */

const taskCommandGroups = [

  {
    id: 'agregar',
    label: 'Agregar',
    icon: '📝',

    commands: [

      {
        id: 'tarea',
        command: '!tarea',
        aliases: ['!t'],
        title: '!tarea + descripción',

        description:
          'Agrega una nueva tarea con una descripción personalizada.',

        details:
          'También podés utilizar la versión corta !t. El sistema permite un máximo de 10 tareas por usuario.',

        example:
          '!tarea Estudiar React durante una hora',
      },

      {
        id: 'multiple',
        command: '!add',
        aliases: ['!tarea', '!task', '!t'],

        title: 'Agregar múltiples tareas',

        description:
          'Agregá varias tareas en un solo mensaje separándolas con punto y coma (;).',

        details:
          'Cada tarea será procesada individualmente siempre que no superes el límite total de 10 tareas.',

        example:
          '!add Comprar pan; Estudiar Java; Leer documentación',
      },

    ],
  },


  {
    id: 'revisar',
    label: 'Revisar',
    icon: '📋',

    commands: [

      {
        id: 'lista',

        command: '!lista',

        aliases: ['!list'],

        title: '!lista / !list',

        description:
          'Muestra tus tareas pendientes en pantalla y en el chat.',

        example:
          '!list',
      },

      {
        id: 'marcar',

        command: '!marcar',

        aliases: ['!check', '!v'],

        title: '!marcar + ID',

        description:
          'Marca una tarea como realizada utilizando su ID.',

        example:
          '!check 4tf',
      },

      {
        id: 'marcar-multiples',

        command: '!marcar',

        aliases: ['!check', '!v'],

        title: 'Marcar varias tareas',

        description:
          'Marca varias tareas como realizadas utilizando sus IDs separados por punto y coma.',

        example:
          '!check 4tf;6tf;8bd',
      },

      {
        id: 'realizadas',

        command: '!realizadas',

        aliases: ['!pickup'],

        title: '!realizadas / !pickup',

        description:
          'Marca todas tus tareas pendientes como realizadas en un solo paso.',

        example:
          '!pickup',
      },

    ],
  },


  {
    id: 'modificar',
    label: 'Modificar',
    icon: '✏️',

    commands: [

      {
        id: 'modificar',

        command: '!modificar',

        aliases: ['!cambiar', '!change'],

        title: '!modificar + ID + descripción',

        description:
          'Editá o actualizá una tarea existente.',

        example:
          '!modificar s3u Estudiar capítulo 5 de matemáticas',
      },

    ],
  },


  {
    id: 'eliminar',
    label: 'Eliminar',
    icon: '🗑️',

    commands: [

      {
        id: 'eliminar',

        command: '!eliminar',

        aliases: ['!borrar', '!delete', '!x'],

        title: '!eliminar + ID',

        description:
          'Eliminá una tarea específica utilizando su ID.',

        example:
          '!delete 2ce',
      },

      {
        id: 'eliminar-multiples',

        command: '!eliminar',

        aliases: ['!borrar', '!delete', '!x'],

        title: 'Eliminar varias tareas',

        description:
          'Eliminá varias tareas utilizando sus IDs separados por punto y coma.',

        example:
          '!delete 2ce;4af;8bd',
      },

      {
        id: 'borrar-todo',

        command: '!borrartodo',

        aliases: ['!clear'],

        title: '!borrartodo / !clear',

        description:
          'Eliminá todas las tareas de tu lista.',

        example:
          '!clear',
      },

    ],
  },

]


/* ===============================================================
   COMANDOS DE PERFIL
================================================================ */

const profileCommandGroups = [

  {
    id: 'informacion',
    label: 'Información',
    icon: '👤',

    commands: [

      {
        id: 'nacionalidad',

        command: '!nacionalidad',

        title: '!nacionalidad + país',

        description:
          'Registrá tu nacionalidad para mostrarla en tu perfil.',

        example:
          '!nacionalidad Argentina',
      },

      {
        id: 'nacimiento',

        command: '!nacimiento',

        title: '!nacimiento + dd-mm',

        description:
          'Guardá tu fecha de nacimiento sin indicar el año.',

        details:
          'El sistema utiliza esta información para identificar tu signo zodiacal.',

        example:
          '!nacimiento 10-09',
      },

      {
        id: 'estudiopara',

        command: '!estudiopara',

        title: '!estudiopara + carrera',

        description:
          'Compartí qué estás estudiando actualmente o en qué área te estás formando.',

        example:
          '!estudiopara Medicina',
      },

      {
        id: 'opositopara',

        command: '!opositopara',

        title: '!opositopara + descripción',

        description:
          'Indicá si estás preparando una oposición y cuál.',

        example:
          '!opositopara Auxilio Judicial',
      },

      {
        id: 'instagram',

        command: '!instagram',

        title: '!instagram + usuario',

        description:
          'Añadí tu cuenta de Instagram para que otros miembros puedan encontrarte.',

        example:
          '!instagram @miusuario',
      },

    ],
  },


  {
    id: 'consultar',
    label: 'Consultar',
    icon: '🔎',

    commands: [

      {
        id: 'datos',

        command: '!datos',

        title: '!datos',

        description:
          'Consultá toda la información personal que registraste en tu perfil.',

        example:
          '!datos',
      },

      {
        id: 'info',

        command: '!info',

        title: '!info + @usuario',

        description:
          'Consultá la información pública registrada por otro miembro de la comunidad.',

        example:
          '!info @Pepita',
      },

    ],
  },


  {
    id: 'comunidad',
    label: 'Comunidad',
    icon: '🐶',

    commands: [

      {
        id: 'croqueta',

        command: '!croqueta',

        title: '!croqueta',

        description:
          'Usá tus puntos de gestión para darle una croqueta a Brunito.',

        example:
          '!croqueta',
      },

    ],
  },

]


/* ===============================================================
   COMANDOS DE EXÁMENES
================================================================ */

const examCommandGroups = [

  {
    id: 'agregar',
    label: 'Agregar',
    icon: '➕',

    commands: [

      {
        id: 'addexam',

        command: '!addexam',

        title: '!addexam + fecha + tipo + descripción',

        description:
          'Registrá un nuevo examen indicando la fecha, el tipo y la materia.',

        details:
          'La fecha utiliza el formato dd-mm. Los tipos disponibles son FIN (Final), REC (Recuperatorio) y PAR (Parcial).',

        example:
          '!addexam 12-03 FIN Matemática II',
      },

    ],
  },


  {
    id: 'consultar',
    label: 'Consultar',
    icon: '👁️',

    commands: [

      {
        id: 'reviewexam',

        command: '!reviewexam',

        title: '!reviewexam',

        description:
          'Consultá todos tus exámenes pendientes.',

        details:
          'La lista muestra el ID, fecha, tipo y descripción. Los exámenes vencidos se eliminan automáticamente.',

        example:
          '!reviewexam',
      },

      {
        id: 'summary',

        command: '!summary',

        title: '!summary',

        description:
          'Consultá los exámenes próximos de toda la comunidad.',

        details:
          'Muestra los exámenes de los próximos 30 días ordenados por proximidad.',

        example:
          '!summary',
      },

    ],
  },


  {
    id: 'eliminar',
    label: 'Eliminar',
    icon: '🗑️',

    commands: [

      {
        id: 'examdelete',

        command: '!examdelete',

        title: '!examdelete + ID',

        description:
          'Eliminá un examen específico utilizando su ID.',

        example:
          '!examdelete abc123',
      },

      {
        id: 'deleteallexam',

        command: '!deleteallexam',

        title: '!deleteallexam',

        description:
          'Eliminá todos tus exámenes registrados.',

        example:
          '!deleteallexam',
      },

    ],
  },


  {
    id: 'sistema',
    label: 'Sistema',
    icon: '⚙️',

    commands: [

      {
        id: 'funcionamiento',

        command: '!summary',

        title: 'Características del sistema',

        description:
          'El sistema valida las fechas, elimina automáticamente los exámenes vencidos, ordena los resultados por proximidad y genera IDs únicos.',

        details:
          'También dispone de confirmaciones automáticas y un resumen global mediante !summary.',

        example:
          '!summary',
      },

    ],
  },

]


export default Comandos
