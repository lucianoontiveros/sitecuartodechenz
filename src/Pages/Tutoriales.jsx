import React from "react";
import Tutorial_Card from "../Components/Components_Tutoriales/Tutorial_Card";
import Tutorial_card_1 from "../Components/Components_Tutoriales/Tutorial_card_1";
import Comandos_predefinidos_card from "../Components/Components_Tutoriales/Comandos_predefinidos_card";
import Tutorial_media_card from "../Components/Components_Tutoriales/Tutorial_media_card";

const Tutoriales = () => {
  return (
    <>
      <div className="tutoriales">
        <Tutorial_Card />
        <Tutorial_card_1 />
        <Comandos_predefinidos_card />
        <Tutorial_media_card />
      </div>
    </>
  );
};

export default Tutoriales;
