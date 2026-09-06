// Datos de la sección "Comparte lo que estás haciendo" de /comandos.
// Es la única sección de la página que es realmente una "nube de tags"
// (un montón de botones cortos sin descripción individual), así que es la
// única que tiene sentido sacar del JSX y manejar como datos + una grilla
// responsive genérica (ver Components/CommandCategory.jsx).
//
// El resto de las secciones (Gestión de Tareas, Personaliza tu perfil,
// Gestión de Exámenes) tienen una explicación larga por comando y siguen
// viviendo como JSX directo en Comandos.jsx.
//
// Cada comando es { label, command }:
// - label: lo que se ve en el botón.
// - command: lo que se copia al portapapeles al hacer click.
// Se usan distintos cuando el botón muestra varios alias ("!cocina / !cocinando")
// pero solo uno de ellos tiene que copiarse (antes se copiaba el texto completo
// con la barra incluida, lo cual era un comando inválido para el chat).

const c = (text) => ({ label: text, command: text });

const shareActivitySection = {
  id: 'compartir-actividades',
  heading: 'Comparte lo que estás haciendo',
  intro:
    'Haz que la comunidad sepa en qué estás trabajando o disfrutando con comandos instantáneos.',
  groups: [
    {
      title: 'Productividad',
      description:
        'Actividades enfocadas en el desarrollo intelectual, profesional o académico. Esta categoría abarca momentos dedicados al estudio, el trabajo, la creación de contenido, la solución de problemas o el avance hacia metas concretas.',
      commands: [
        c('!administrando'),
        c('!tp'),
        c('!resumen'),
        c('!estudiando'),
        c('!programando'),
        c('!trabajando'),
        c('!editando'),
        c('!dibujando'),
        c('!pintando'),
        c('!curso'),
        c('!instruyendo'),
        c('!reporte'),
        c('!subrayar'),
        c('!errores'),
        c('!diseñando'),
        c('!desarrollando'),
        c('!lectura'),
        c('!opositando'),
        c('!repasando'),
        c('!pizarra'),
      ],
    },
    {
      title: 'Autocuidado',
      description:
        'Prácticas relacionadas con el bienestar físico y mental. Incluye higiene personal, descanso, relajación, movimiento consciente y cualquier actividad que favorezca el equilibrio y el cuidado de uno mismo.',
      commands: [
        c('!baño'),
        c('!ducha'),
        c('!paseo'),
        c('!meditar'),
        c('!siesta'),
        c('!dormir'),
        c('!entrenar'),
        c('!dientes'),
        c('!estirar'),
        c('!lavadora'),
        c('!platos'),
        c('!limpiando'),
        // "!baño" estaba duplicado dos veces en el archivo original; se dejó una sola vez.
      ],
    },
    {
      title: 'Comida, bebidas e infusiones',
      description:
        'Espacios dedicados a la alimentación y al disfrute de infusiones o bebidas calientes. Incluye momentos de preparación, consumo o pausas reconfortantes para recargar energía.',
      commands: [
        c('!calentar'),
        { label: '!cocina / !cocinando', command: '!cocina' },
        c('!desayunar'),
        c('!almorzar'),
        c('!merendar'),
        c('!cenar'),
        c('!fruta'),
        c('!mate'),
        { label: '!tereré / !terere', command: '!terere' },
        c('!techai'),
        c('!matcha'),
        { label: '!télimon / !telimon', command: '!telimon' },
        c('!café'),
        { label: '!colacao / !chocolatada', command: '!chocolatada' },
        c('!latte'),
        c('!matecocido'),
        c('!cola'),
        c('!refresco'),
        c('!gaseosa'),
        c('!sanguche'),
        c('!energizante'),
        c('!chocolate'),
      ],
    },
    {
      title: 'Organización',
      description:
        'Tareas que ayudan a estructurar, planificar y revisar el día a día. Esta categoría reúne actividades como organizar documentos, actualizar agendas, planificar tareas o reflexionar sobre el progreso personal.',
      commands: [
        c('!organizar'),
        c('!agenda'),
        c('!bitacora'),
        c('!revisando'),
        c('!mensajes'),
        c('!planificando'),
        c('!pagos'),
      ],
    },
    {
      title: 'Eventos',
      description:
        'Momentos puntuales o compartidos con otros, como reuniones, llamadas, clases o salidas. Representan instancias sincronizadas, presenciales o virtuales, que requieren atención y participación activa.',
      commands: [
        c('!call'),
        c('!tramites'),
        { label: '!reunión / !reunion', command: '!reunión' },
        c('!clases'),
        { label: '!volví / !volvi', command: '!volví' },
        c('!compras'),
        c('!medico'),
        c('!viajando'),
        c('!dentista'),
      ],
    },
    {
      title: 'Ocio',
      description:
        'Actividades recreativas para desconectar, disfrutar o estimular la creatividad. Incluye momentos de entretenimiento, pasatiempos y hobbies que ayudan a equilibrar la rutina.',
      commands: [
        c('!serie'),
        c('!jugando'),
        c('!musica'),
        c('!crochet'),
        c('!descansando'),
      ],
    },
  ],
};

export default shareActivitySection;
