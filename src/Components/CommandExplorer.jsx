import { useMemo, useState } from 'react';
import CommandButton from './buttons/CommandButton';

// Reemplaza a CommandCategory.jsx (que mostraba TODAS las categorías, una
// abajo de la otra, con botones de ancho fijo). Ahora se navega por tabs:
// se ve una categoría a la vez, con su descripción y un buscador para
// encontrar un comando puntual sin scrollear una pared de botones.
//
// Los chips (antes "botones anchos que ocupan toda la card") ahora se
// dibujan con flex-wrap: cada uno mide lo que mide su texto, no el 100%
// del contenedor, así que varios entran por fila incluso en un celular.
const CommandExplorer = ({ groups }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState('');

  const activeGroup = groups[activeIndex];

  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return activeGroup.commands;
    return activeGroup.commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        cmd.command.toLowerCase().includes(q)
    );
  }, [activeGroup, query]);

  const handleSelectTab = (index) => {
    setActiveIndex(index);
    setQuery('');
  };

  return (
    <div className="command-explorer">
      <div className="command-explorer-tabs" role="tablist" aria-label="Categorías de comandos">
        {groups.map((group, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={group.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`command-tab${isActive ? ' command-tab--active' : ''}`}
              onClick={() => handleSelectTab(index)}
            >
              <span className="command-tab-icon" aria-hidden="true">
                {group.icon}
              </span>
              {group.title}
            </button>
          );
        })}
      </div>

      <div className="command-explorer-panel">
        <p className="command-explorer-description">{activeGroup.description}</p>

        <label className="command-explorer-search">
          <span className="sr-only">Buscar comando en {activeGroup.title}</span>
          <input
            type="text"
            placeholder={`Buscar en ${activeGroup.title.toLowerCase()}…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <div className="comandos-tag-grid">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <CommandButton
                key={cmd.command}
                displayText={cmd.label}
                command={cmd.command}
              />
            ))
          ) : (
            <p className="command-explorer-empty">
              No hay comandos que coincidan con “{query}”.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandExplorer;
