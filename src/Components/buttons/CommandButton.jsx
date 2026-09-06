import { useEffect, useRef, useState } from 'react';

// Antes: el "copiado" se mostraba escribiendo directo sobre el DOM
// (buttonRef.style.backgroundColor = 'aquamarine', buttonRef.textContent = ...)
// dentro de un callback ref. Eso pisa por fuera lo que React ya renderiza,
// hardcodea el color en vez de usar la clase CSS del tema, y si el usuario
// hace click varias veces seguidas los setTimeout se pisan entre sí.
//
// Ahora "copiado" es simplemente estado de React: el texto y la clase
// .comando-btn--copiado se resuelven en el render, como corresponde.
const CommandButton = ({ displayText, command, className = 'comando-btn' }) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  // Limpiar el timeout si el componente se desmonta (por ejemplo al cambiar
  // de sección) para no intentar actualizar estado de un componente ya destruido.
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <button
      className={`${className}${isCopied ? ' comando-btn--copiado' : ''}`}
      onClick={handleCopy}
      type="button"
    >
      {isCopied ? '¡Comando copiado!' : displayText || command}
    </button>
  );
};

export default CommandButton;
