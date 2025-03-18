import React, { useState } from "react";
import { Button } from "flowbite-react";

const BotonCopiar = ({ text }) => {
  // Estado para controlar si el botón ha sido copiado
  const [copiado, setCopiado] = useState(false);

  const copiarTexto = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texto copiado");
        // Marcar el botón como copiado
        setCopiado(true);
        // Después de un tiempo, volver a establecer el estado como no copiado
        setTimeout(() => setCopiado(false), 2000);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Button
        onClick={copiarTexto}
        type="button"
        className="mt-[-80px] max-w-[150px] mx-1 py-2.5 px-5 me-1 mb-1 text-sm font-medium focus:outline-none bg-black rounded-lg border border-gray-200 focus:ring-gray-700 border-gray-600 hover:bg-gray-700 text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
      >
        {copiado ? "Copiado" : text}
      </Button>
    </>
  );
};

export default BotonCopiar;
