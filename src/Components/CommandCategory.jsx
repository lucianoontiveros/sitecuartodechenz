import CommandButton from './buttons/CommandButton';

// Renderiza un grupo de comandos "tag" (Productividad, Autocuidado, etc.)
// dentro de una card, usando CSS Grid responsive (.comandos-tag-grid en
// comandos.css) en vez de la lista <ul><li> de ancho fijo que había antes.
const CommandCategory = ({ groups }) => (
  <>
    {groups.map((group) => (
      <div className="container_comandos_card" key={group.title}>
        <div>
          <h3>{group.title}</h3>
        </div>
        {group.description && (
          <p className="container_comandos_card_p">{group.description}</p>
        )}
        <div className="comandos-tag-grid">
          {group.commands.map((cmd) => (
            <CommandButton
              key={cmd.command}
              displayText={cmd.label}
              command={cmd.command}
            />
          ))}
        </div>
      </div>
    ))}
  </>
);

export default CommandCategory;
