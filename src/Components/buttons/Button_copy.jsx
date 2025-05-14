import { useState } from "react";
import { Button } from "flowbite-react";
import "./button_copy.css";
import sounds from "../../Data/sounds";
import { useEffect } from "react";

const Button_copy = ({ text }) => {
  const [copiado, setCopiado] = useState(false);
  const [audio] = useState(new Audio());

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

  const reproducirSonido = () => {
    const comando = text.replace('!', '');
    const rutaSonido = sounds[comando];
    if (rutaSonido) {
      audio.src = rutaSonido;
      audio.play().catch(error => console.error('Error al reproducir sonido:', error));
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