import React from "react";

const Card = () => {
  // Integrar directamente los datos JSON en el componente
  const data = [
    {
      title: "HORARIO",
      descripcion: "Conoce nuestros horarios de transmisión",
      tarjeta: "_tarjeta_1.jpeg",
    },
    {
      title: "NOVEDADES",
      descripcion: "Enterarte de las novedades de nuestra comunidad",
      tarjeta: "_tarjeta_2.jpeg",
    },
    {
      title: "COMANDOS",
      descripcion: "Estos son los comandos del chat de twitch",
      tarjeta: "_tarjeta_3.jpeg",
    },
    {
      title: "BLOG",
      descripcion: "Un espacio para comunicar y compartir",
      tarjeta: "_tarjeta_4.jpeg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap my-2 mx-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="card my-2 mx-2 w-[270px] h-[130px] sm:h-[270px] animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop flex flex-col justify-center items-center bg-gray-900 border-[#D0F8CF] sm:border-[#D6C2F7] bg-[url(src\assets\Tarjetas\${item.tarjeta})]"
          style={{
            backgroundImage: `url(./src/assets/Tarjetas/${item.tarjeta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 flex flex-col p-5 w-full h-[269px] rounded-xl justify-center items-center text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p>{item.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
