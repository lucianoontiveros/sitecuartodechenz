import { useState } from "react";
import { Button } from "flowbite-react";
import "./button_copy.css";
import sounds from "../../Data/sounds";
import { useEffect } from "react";
import logger from '../../utils/logger';

const Button_copy = ({ text }) => {
  const [copiado, setCopiado] = useState(false);
  const [audio] = useState(new Audio());

  const copiarTexto = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        logger.log("Texto copiado");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
      })
      .catch((e) => logger.error("Error al copiar texto", e));
  };

  const reproducirSonido = () => {
    const comando = text.replace('!', '');
    const rutaSonido = sounds[comando];
    if (rutaSonido) {
      audio.src = rutaSonido;
      audio.play().catch(error => logger.error('Error al reproducir sonido', error));
    }
  };

  return (
    <>
      <Button
        onClick={(e) => {
          copiarTexto();
          reproducirSonido();
        }}
         type="button"
        className="button_card"
      >
        {copiado ? "Copiado" : text}
      </Button>
    </>
  );
};

export default Button_copy;