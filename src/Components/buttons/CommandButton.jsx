import { useState } from 'react';

const CommandButton = ({ displayText, command, className = 'comando-btn' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    
    // Limpiar el mensaje después de 2 segundos
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button 
      className={className}
      onClick={handleCopy}
      ref={buttonRef => {
        if (buttonRef) {
          if (isCopied) {
            buttonRef.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            buttonRef.style.color = 'black';
            buttonRef.textContent = '¡Comando copiado!';
            
            // Restaurar el texto original después de 2 segundos
            setTimeout(() => {
              buttonRef.style.backgroundColor = 'aquamarine';
              buttonRef.style.color = 'black';
              buttonRef.textContent = displayText || command;
            }, 2000);
          }
        }
      }}
    >
      {displayText || command}
    </button>
  );
};

export default CommandButton;
