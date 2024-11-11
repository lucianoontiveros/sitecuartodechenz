import React, { useState } from "react";
import { Card } from "flowbite-react";
import Totoro_article_2 from "../Components_Tutoriales/Totoro_article_2.png";

function Comandos_predefinidos_card() {
  const card_styles =
    "w-full bg-dark text-xs mt-2 xl:text-base text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 ";
  const span_styles =
    "bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm";
  const activities = [
    { name: "!almorzar:", description: "Almorzando🍽" },
    { name: "!agenda:", description: "Revisando Agenda📒" },
    { name: "!administrando:", description: "Administrando📑" },
    { name: "!entrenar:", description: "Entrenando👟" },
    { name: "!mate:", description: "Tomando mate🧉" },
    { name: "!compras:", description: "Comprando🛒" },
    { name: "!cocina:", description: "En la cocina🍳" },
    { name: "!serie:", description: "Mirando serie📺" },
    { name: "!jugando:", description: "Jugando🎮" },
    { name: "!curso:", description: "Haciendo curso💻" },
    { name: "!tp:", description: "Trabajo práctico📑" },
    { name: "!resumen:", description: "Haciendo Resumen📑" },
    { name: "!call:", description: "En llamada📱" },
    { name: "!reunión / !reunion:", description: "En reunión📱" },
    { name: "!revisando:", description: "Revisando contenido💻" },
    { name: "!estudiando:", description: "Estudiando📓" },
    { name: "!programando:", description: "Programando💻" },
    { name: "!trabajando:", description: "Trabajando💻" },
    { name: "!dormir:", description: "Mimiendo🛌🏻" },
    { name: "!volví / !volvi:", description: "Regresando☝🏻" },
    { name: "!baño:", description: "En el baño🚽" },
    { name: "!ducha:", description: "Duchándose🛀🏻" },
    { name: "!paseo:", description: "Dando un paseo🌳" },
    { name: "!calentar:", description: "Calentando🫖" },
    { name: "!meditar:", description: "Meditando🧘🏻‍♀" },
    { name: "!siesta:", description: "Mimiendo🛌🏻" },
    { name: "!dientes:", description: "Cepillando dientes🪥" },
    { name: "!estirar:", description: "Estirando🧎🏻‍♂➡" },
    { name: "!mensajes:", description: "Revisando Mensajes📩" },
    { name: "!organizar:", description: "Organizando🧮" },
    { name: "!lavadora:", description: "Lavando👕" },
    { name: "!café:", description: "Tomando Café☕" },
    { name: "!té:", description: "Tomando un té🍵" },
    { name: "!te:", description: "Tomando un té🍵" },
    { name: "!télimon:", description: "Tomando un té🍵" },
    { name: "!telimon:", description: "Tomando un té🍵" },
    { name: "!techai:", description: "Tomando un té🍵" },
    { name: "!tereré / !terere:", description: "Tomando un tereré🧉" },
    { name: "!fruta:", description: "Comiendo fruta🍊" },
    { name: "!desayunar:", description: "Desayunando🍵" },
    { name: "!merendar:", description: "Merendando🍪" },
    { name: "!cenar:", description: "Cenando🍽" },
    { name: "!latte:", description: "Tomando Café con leche☕" },
    { name: "!desarrollando:", description: "Desarrollando💻" },
    { name: "!musica:", description: "Escuchando música🎧" },
    { name: "!matecocido:", description: "Tomando un matecocido🍵" },
    { name: "!planificando:", description: "Estoy planificando📅" },
    { name: "!lectura:", description: "Está leyendo 📖" },
    { name: "!cocinando:", description: "Está cocinando 🍳" },
    { name: "!errores:", description: "Está revisando errores 👓" },
    { name: "!instruyendo:", description: "Está instruyendo ✍🏻" },
    { name: "!limpiando:", description: "Está limpiando 🗑️" },
    { name: "!reporte:", description: "Está generando reportes 📑" },
    { name: "!subrayar:", description: "Está subrayando 📑" },
    { name: "!clases:", description: "En clases 🏫" },
  ];

  // Estado para manejar el mensaje de copia de cada comando
  const [copiedCommands, setCopiedCommands] = useState({});

  const copyToClipboard = (text) => {
    const command = text.slice(0, -1);
    navigator.clipboard
      .writeText(command)
      .then(() => {
        // Actualizar el estado para mostrar "Copiado"
        setCopiedCommands((prev) => ({
          ...prev,
          [command]: true,
        }));
        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => {
          setCopiedCommands((prev) => ({
            ...prev,
            [command]: false,
          }));
        }, 2000);
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };

  return (
    <div className="comados_predefinidos mt-3 size">
      <Card
        className={card_styles}
        imgSrc={Totoro_article_2}
        horizontal
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Timer predeterminados
        </h5>
        <p className={span_styles}>
          Gente bonita, les informo que ya puse en funcionamiento unos timers
          por tareas predeterminadas. Ingresando los siguientes comandos,
          aparecerá en pantalla tu usuario y la actividad que estas ejecutando.
        </p>
      </Card>
      <Card
        className={card_styles}
        horizontal
      >
        {activities.map((activity, index) => (
          <p key={index}>
            <span
              className={span_styles}
              onClick={() => copyToClipboard(activity.name)}
              style={{ cursor: "pointer" }} // Cambiar el cursor a pointer para indicar que es clickeable
            >
              {activity.name}{" "}
              {copiedCommands[activity.name.slice(0, -1)] && (
                <span className="text-green-600"> (Copiado)</span>
              )}
            </span>
            {activity.description}
          </p>
        ))}
      </Card>
    </div>
  );
}

export default Comandos_predefinidos_card;
