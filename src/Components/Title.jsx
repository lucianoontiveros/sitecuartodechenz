import React, { useState, useEffect, useRef } from "react";

const Title = () => {
  // Define el texto completo que se escribirá
  const fullText = "> The first step.";
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
    <>
      {/* Renderiza el título y el texto */}
      <div className="my-4 min-w-[100%] mt-3 text-indigo-500  md:hidden text-center  sm:text-indigo-300  lg:text-green-300 font-semibold fill-transparent">
        {/* Renderiza el texto que se escribe gradualmente y el cursor que parpadea */}
        <h1 className="text-[2em] sm:text-[5em] ">
          {" "}
          {text}
          {/* Renderiza el cursor que parpadea */}
          <span
            className={`inline-block h-[1em] w-[0.5em] ml-[0.2em] ${showCursor ? "bg-white" : "bg-transparent"}`}
          ></span>
        </h1>
        {/* Renderiza un texto adicional */}
        <p className="text-[13px] text-blue-300 sm:text-[1em]">
          "Acelerando el desarrollo, un commit a la vez."
        </p>
      </div>
    </>
  );
};

export default Title;
