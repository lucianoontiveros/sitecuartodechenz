import { useMemo, useState } from 'react'
import CommandButton from './buttons/CommandButton'

// Un mismo explorador (tabs + buscador) para las 3 secciones de comandos que
// antes eran JSX repetido a mano: "Comparte lo que estás haciendo" (variant
// "tags", comandos cortos sin descripción) y "Gestión de Tareas" /
// "Personaliza tu perfil" (variant "detailed", un título + descripción +
// alias + ejemplo por comando).
const CommandExplorer = ({ groups = [], variant = 'detailed' }) => {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? '')
  const [search, setSearch] = useState('')

  const activeGroup = useMemo(
    () => groups.find(group => group.id === activeGroupId) ?? groups[0],
    [groups, activeGroupId]
  )

  const normalizedSearch = search.trim().toLowerCase()

  const filteredCommands = useMemo(() => {
    if (!activeGroup) return []
    if (!normalizedSearch) return activeGroup.commands ?? []

    return (activeGroup.commands ?? []).filter(item => {
      const searchableText = [
        item.command,
        item.label,
        item.title,
        item.description,
        item.details,
        item.example,
        ...(item.aliases ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [activeGroup, normalizedSearch])

  if (!groups.length) return null

  const isTagVariant = variant === 'tags'

  const handleGroupChange = groupId => {
    setActiveGroupId(groupId)
    setSearch('')
  }

  return (
    <div className="command-explorer">
      {/* Categorías */}
      <div
        className="command-explorer-tabs"
        role="tablist"
        aria-label="Categorías de comandos"
      >
        {groups.map(group => {
          const isActive = group.id === activeGroup?.id
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`command-tab${isActive ? ' command-tab--active' : ''}`}
              onClick={() => handleGroupChange(group.id)}
            >
              {group.icon && (
                <span className="command-tab-icon" aria-hidden="true">
                  {group.icon}
                </span>
              )}
              <span>{group.label}</span>
            </button>
          )
        })}
      </div>

      {/* Buscador */}
      <div className="command-explorer-search">
        <label
          htmlFor={`command-search-${activeGroup?.id}`}
          className="sr-only"
        >
          Buscar comando en {activeGroup?.label}
        </label>
        <input
          id={`command-search-${activeGroup?.id}`}
          type="search"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="🔎 Buscar comando..."
          autoComplete="off"
        />
      </div>

      {/* Panel de la categoría activa */}
      <div className="command-explorer-panel" role="tabpanel">
        {activeGroup?.description && (
          <p className="command-explorer-description">
            {activeGroup.description}
          </p>
        )}

        {isTagVariant ? (
          filteredCommands.length > 0 ? (
            <div className="comandos-tag-grid">
              {filteredCommands.map(item => (
                <CommandButton
                  key={item.id}
                  displayText={item.label || item.command}
                  command={item.command}
                />
              ))}
            </div>
          ) : (
            <p className="command-explorer-empty">
              No encontramos comandos que coincidan con tu búsqueda.
            </p>
          )
        ) : filteredCommands.length > 0 ? (
          <div className="command-explorer-list">
            {filteredCommands.map(item => (
              <article key={item.id} className="command-explorer-item">
                <div className="command-explorer-item-header">
                  <div className="command-explorer-item-title">
                    <h4>{item.title || item.label || item.command}</h4>

                    {item.aliases?.length > 0 && (
                      <div className="command-explorer-aliases">
                        {item.aliases.map(alias => (
                          <code key={alias}>{alias}</code>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* El botón siempre copia item.command (el comando real,
                      a veces con una plantilla tipo "[Borra aquí...]" para
                      completar). Antes copiaba item.example si existía, que
                      es solo un texto ilustrativo — un bug que hacía que
                      clickear el botón pegara la oración de ejemplo entera
                      en vez del comando funcional. */}
                  <CommandButton
                    displayText={item.label || item.command}
                    command={item.command}
                  />
                </div>

                {item.description && (
                  <p className="command-explorer-item-description">
                    {item.description}
                  </p>
                )}

                {item.details && (
                  <p className="command-explorer-item-details">
                    {item.details}
                  </p>
                )}

                {item.example && (
                  <div className="command-explorer-example">
                    <span>Ejemplo</span>
                    <code>{item.example}</code>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="command-explorer-empty">
            No encontramos comandos que coincidan con tu búsqueda.
          </p>
        )}
      </div>
    </div>
  )
}

export default CommandExplorer
