import React from "react";
import tarjeta1 from "../assets/Tarjetas/tarjeta_1.png";
import tarjeta2 from "../assets/Tarjetas/tarjeta_2.png";
import tarjeta3 from "../assets/Tarjetas/tarjeta_3.png";
import tarjeta4 from "../assets/Tarjetas/tarjeta_4.png";
import { NavLink } from "react-router-dom";

const _card = () => {
  // Integrar directamente los datos JSON en el componente
  const data = [
    {
      title: "HORARIO",
      tarjeta: tarjeta1,
      ruta: "/Horarios",
    },
    {
      title: "NOVEDADES",
      tarjeta: tarjeta2,
      ruta: "/avisos",
    },
    {
      title: "COMANDOS",
      tarjeta: tarjeta3,
      ruta: "/comandos",
    },
    {
      title: "TUTORIALES",
      tarjeta: tarjeta4,
      ruta: "/tutoriales",
    },
  ];

  return (
    <div className=" flex flex-col align-middle flex-wrap justify-around sm:flex-row  sm:flex-wrap">
      {data.map((item, index) => (
        <NavLink
          key={index}
          to={item.ruta}
          className={"my-2 mx-2"}
        >
          <div
            key={index}
            className="card bg-black bg-opacity-50 flex flex-col justify-center w-[290px] max-w-[400px] my-2 mx-2 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop bg-gray-900 border-[#D0F8CF] sm:border-[#D6C2F7]"
            style={{
              backgroundImage: `url(${item.tarjeta})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              key={index}
              className=" flex flex-col p-2  h-[269px]  rounded-xl justify-end text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
            >
              <div>
                <h3 className="logo px-8 font-bold text-xl text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default _card;
