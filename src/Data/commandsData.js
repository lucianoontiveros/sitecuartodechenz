// Datos de la sección "Comparte lo que estás haciendo" de /comandos.
//
// Esta sección utiliza el mismo CommandExplorer que el resto de la página,
// pero mantiene una presentación simple: cada actividad funciona como
// un comando corto que puede copiarse al portapapeles.
//
// La estructura general es:
// groups
//   └── commands
//         ├── id
//         ├── command
//         ├── label
//         └── title
//
// "label" es el texto que se muestra en el botón.
// "command" es el comando real que se copia.
//
// Cuando existen alias, por ejemplo:
//   !cocina / !cocinando
//
// el label muestra ambos, pero "command" contiene solamente el comando
// válido que debe copiarse al chat.

const createCommand = (id, label, command = label) => ({
  id,
  command,
  title: label,
  label,
});

const shareActivitySection = {
  id: 'compartir-actividades',

  heading: 'Comparte lo que estás haciendo',

  intro:
    'Haz que la comunidad sepa en qué estás trabajando o disfrutando con comandos instantáneos.',

  groups: [
    {
      id: 'productividad',
      label: 'Productividad',
      description:
        'Actividades enfocadas en el desarrollo intelectual, profesional o académico. Esta categoría abarca momentos dedicados al estudio, el trabajo, la creación de contenido, la solución de problemas o el avance hacia metas concretas.',

      commands: [
        createCommand('administrando', '!administrando'),
        createCommand('tp', '!tp'),
        createCommand('resumen', '!resumen'),
        createCommand('estudiando', '!estudiando'),
        createCommand('programando', '!programando'),
        createCommand('trabajando', '!trabajando'),
        createCommand('editando', '!editando'),
        createCommand('dibujando', '!dibujando'),
        createCommand('pintando', '!pintando'),
        createCommand('curso', '!curso'),
        createCommand('instruyendo', '!instruyendo'),
        createCommand('reporte', '!reporte'),
        createCommand('subrayar', '!subrayar'),
        createCommand('errores', '!errores'),
        createCommand('diseñando', '!diseñando'),
        createCommand('desarrollando', '!desarrollando'),
        createCommand('lectura', '!lectura'),
        createCommand('opositando', '!opositando'),
        createCommand('repasando', '!repasando'),
        createCommand('pizarra', '!pizarra'),
      ],
    },

    {
      id: 'autocuidado',
      label: 'Autocuidado',
      description:
        'Prácticas relacionadas con el bienestar físico y mental. Incluye higiene personal, descanso, relajación, movimiento consciente y cualquier actividad que favorezca el equilibrio y el cuidado de uno mismo.',

      commands: [
        createCommand('bano', '!baño'),
        createCommand('ducha', '!ducha'),
        createCommand('paseo', '!paseo'),
        createCommand('meditar', '!meditar'),
        createCommand('siesta', '!siesta'),
        createCommand('dormir', '!dormir'),
        createCommand('entrenar', '!entrenar'),
        createCommand('dientes', '!dientes'),
        createCommand('estirar', '!estirar'),
        createCommand('lavadora', '!lavadora'),
        createCommand('platos', '!platos'),
        createCommand('limpiando', '!limpiando'),
      ],
    },

    {
      id: 'comida-bebidas',
      label: 'Comida y bebidas',
      description:
        'Espacios dedicados a la alimentación y al disfrute de infusiones o bebidas calientes. Incluye momentos de preparación, consumo o pausas reconfortantes para recargar energía.',

      commands: [
        createCommand('calentar', '!calentar'),

        createCommand(
          'cocina',
          '!cocina / !cocinando',
          '!cocina',
        ),

        createCommand('desayunar', '!desayunar'),
        createCommand('almorzar', '!almorzar'),
        createCommand('merendar', '!merendar'),
        createCommand('cenar', '!cenar'),
        createCommand('fruta', '!fruta'),
        createCommand('mate', '!mate'),

        createCommand(
          'terere',
          '!tereré / !terere',
          '!terere',
        ),

        createCommand('techai', '!techai'),
        createCommand('matcha', '!matcha'),

        createCommand(
          'telimon',
          '!télimon / !telimon',
          '!telimon',
        ),

        createCommand('cafe', '!café'),

        createCommand(
          'colacao',
          '!colacao / !chocolatada',
          '!chocolatada',
        ),

        createCommand('latte', '!latte'),
        createCommand('matecocido', '!matecocido'),
        createCommand('cola', '!cola'),
        createCommand('refresco', '!refresco'),
        createCommand('gaseosa', '!gaseosa'),
        createCommand('sanguche', '!sanguche'),
        createCommand('energizante', '!energizante'),
        createCommand('chocolate', '!chocolate'),
      ],
    },

    {
      id: 'organizacion',
      label: 'Organización',
      description:
        'Tareas que ayudan a estructurar, planificar y revisar el día a día. Esta categoría reúne actividades como organizar documentos, actualizar agendas, planificar tareas o reflexionar sobre el progreso personal.',

      commands: [
        createCommand('organizar', '!organizar'),
        createCommand('agenda', '!agenda'),
        createCommand('bitacora', '!bitacora'),
        createCommand('revisando', '!revisando'),
        createCommand('mensajes', '!mensajes'),
        createCommand('planificando', '!planificando'),
        createCommand('pagos', '!pagos'),
      ],
    },

    {
      id: 'eventos',
      label: 'Eventos',
      description:
        'Momentos puntuales o compartidos con otros, como reuniones, llamadas, clases o salidas. Representan instancias sincronizadas, presenciales o virtuales, que requieren atención y participación activa.',

      commands: [
        createCommand('call', '!call'),
        createCommand('tramites', '!tramites'),

        createCommand(
          'reunion',
          '!reunión / !reunion',
          '!reunión',
        ),

        createCommand('clases', '!clases'),

        createCommand(
          'volvi',
          '!volví / !volvi',
          '!volví',
        ),

        createCommand('compras', '!compras'),
        createCommand('medico', '!medico'),
        createCommand('viajando', '!viajando'),
        createCommand('dentista', '!dentista'),
      ],
    },

    {
      id: 'ocio',
      label: 'Ocio',
      description:
        'Actividades recreativas para desconectar, disfrutar o estimular la creatividad. Incluye momentos de entretenimiento, pasatiempos y hobbies que ayudan a equilibrar la rutina.',

      commands: [
        createCommand('serie', '!serie'),
        createCommand('jugando', '!jugando'),
        createCommand('musica', '!musica'),
        createCommand('crochet', '!crochet'),
        createCommand('descansando', '!descansando'),
      ],
    },
  ],
};

export default shareActivitySection;