import { useState } from "react";
import { Button } from "flowbite-react";

const Button_copy = ({ text }) => {
  const [copiado, setCopiado] = useState(false);

  const copiarTexto = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texto copiado");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Button
        onClick={copiarTexto}
         type="button"
        className="mt-[-80px] max-w-[150px] mx-1 py-2.5 px-5 me-1 mb-1 text-sm font-medium focus:outline-none rounded-lg border  focus:ring-gray-700 border-gray-600 hover:bg-gray-700 text-green-200"
      >
        {copiado ? "Copiado" : text}
      </Button>
    </>
  );
};

export default Button_copy;