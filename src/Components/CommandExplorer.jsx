import { useMemo, useState } from 'react'
import CommandButton from './buttons/CommandButton'

const CommandExplorer = ({ groups = [], variant = 'detailed' }) => {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? '')
  const [search, setSearch] = useState('')

  const activeGroup = useMemo(
    () =>
      groups.find((group) => group.id === activeGroupId) ?? groups[0],
    [groups, activeGroupId],
  )

  const normalizedSearch = search.trim().toLowerCase()

  const filteredCommands = useMemo(() => {
    if (!activeGroup) return []

    if (!normalizedSearch) {
      return activeGroup.commands ?? []
    }

    return (activeGroup.commands ?? []).filter((item) => {
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

  if (!groups.length) {
    return null
  }

  const isTagVariant = variant === 'tags'

  const handleGroupChange = (groupId) => {
    setActiveGroupId(groupId)
    setSearch('')
  }

  return (
    <div className="command-explorer">
      {/* =====================================================
          CATEGORÍAS
          ===================================================== */}

      <div
        className="command-explorer-tabs"
        role="tablist"
        aria-label="Categorías de comandos"
      >
        {groups.map((group) => {
          const isActive = group.id === activeGroup?.id

          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`command-tab ${
                isActive ? 'command-tab--active' : ''
              }`}
              onClick={() => handleGroupChange(group.id)}
            >
              {group.icon && (
                <span
                  className="command-tab-icon"
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
              )}

              <span>{group.label}</span>
            </button>
          )
        })}
      </div>

      {/* =====================================================
          BUSCADOR
          ===================================================== */}

      <div className="command-explorer-search">
        <label
          htmlFor={`command-search-${activeGroup?.id}`}
          className="sr-only"
        >
          Buscar comando
        </label>

        <input
          id={`command-search-${activeGroup?.id}`}
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="🔎 Buscar comando..."
          autoComplete="off"
        />
      </div>

      {/* =====================================================
          PANEL
          ===================================================== */}

      <div className="command-explorer-panel" role="tabpanel">
        {activeGroup?.description && (
          <p className="command-explorer-description">
            {activeGroup.description}
          </p>
        )}

        {/* ===================================================
            VARIANTE TAGS
            Se utiliza para Actividades.
            =================================================== */}

        {isTagVariant ? (
          filteredCommands.length > 0 ? (
            <div className="comandos-tag-grid">
              {filteredCommands.map((item) => (
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
        ) : (
          /* =================================================
             VARIANTE DETALLADA
             Se utiliza para Tareas, Perfil y Exámenes.
             ================================================= */

          filteredCommands.length > 0 ? (
            <div className="command-explorer-list">
              {filteredCommands.map((item) => (
                <article
                  key={item.id}
                  className="command-explorer-item"
                >
                  <div className="command-explorer-item-header">
                    <div className="command-explorer-item-title">
                      <h4>
                        {item.title || item.label || item.command}
                      </h4>

                      {item.aliases?.length > 0 && (
                        <div className="command-explorer-aliases">
                          {item.aliases.map((alias) => (
                            <code key={alias}>{alias}</code>
                          ))}
                        </div>
                      )}
                    </div>

                    <CommandButton
                      displayText={item.command}
                      command={item.example || item.command}
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
          )
        )}
      </div>
    </div>
  )
}

export default CommandExplorer