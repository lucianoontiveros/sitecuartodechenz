import { useState, useRef } from "react";
import { Button } from "flowbite-react";
import "./button_copy.css";
import logger from "../../utils/logger";

// Antes este componente hacía sounds[comando] contra un diccionario global
// (src/Data/sounds.jsx). Si el nombre no coincidía EXACTO con una key de ese
// diccionario, el sonido simplemente no sonaba y no había ningún error visible.
// Ahora el audio llega listo por prop desde soundsData.js, así que si falta
// se sabe en el momento (audioSrc === null) y se puede avisar en la UI
// en vez de fallar en silencio.
const Button_copy = ({ text, audioSrc }) => {
  const [copiado, setCopiado] = useState(false);
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio();
  }

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
    if (!audioSrc) return;
    audioRef.current.src = audioSrc;
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .catch((error) => logger.error("Error al reproducir sonido", error));
  };

  return (
    <Button
      onClick={() => {
        copiarTexto();
        reproducirSonido();
      }}
      type="button"
      className={`button_card${!audioSrc ? " button_card--sin-audio" : ""}`}
      title={
        !audioSrc
          ? "Este comando todavía no tiene un audio cargado (se copia igual)"
          : undefined
      }
    >
      {copiado ? "Copiado" : text}
      {!audioSrc && (
        <span className="sin-audio-badge" aria-hidden="true">
          🔇
        </span>
      )}
    </Button>
  );
};

export default Button_copy;
