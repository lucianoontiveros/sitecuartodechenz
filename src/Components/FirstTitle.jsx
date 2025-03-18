import React, { useState, useEffect } from "react";

const FirstTitle = () => {
  // Define el texto completo que se escribirá
  const fullText = "> The first step to create.";
  // Define el estado para almacenar el texto que se mostrará gradualmente
  const [text, setText] = useState("");
  // Define el estado para controlar la visibilidad del cursor
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Inicia un intervalo para agregar gradualmente caracteres al texto
    let index = 0;
    const textIntervalId = setInterval(() => {
      // Actualiza el texto agregando el próximo carácter del texto completo
      setText((prevText) => prevText + fullText[index]);
      // Incrementa el índice para apuntar al próximo carácter
      index++;
      // Si se ha escrito todo el texto completo, detén el intervalo
      if (index === fullText.length - 1) {
        clearInterval(textIntervalId);
      }
    }, 100); // Ajusta la velocidad de escritura aquí

    // Inicia un intervalo para alternar la visibilidad del cursor
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Ajusta la velocidad de parpadeo del cursor aquí

    // Limpia los intervalos cuando el componente se desmonta
    return () => {
      clearInterval(textIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, []); // El efecto solo se ejecuta una vez, cuando el componente se monta

  return (
    // Renderiza el título con el texto que se escribe gradualmente y un cursor que parpadea
    <div className="text-6xl hidden md:block absolute  text-green-300 font-semibold fill-transparent">
      <h1>
        {" "}
        {text}
        {/* Renderiza el cursor que parpadea */}
        <span
          className={`inline-block h-[1em] w-[0.5em] ml-[0.2em] ${showCursor ? "bg-white" : "bg-transparent"}`}
        ></span>
      </h1>
    </div>
  );
};

export default FirstTitle;
