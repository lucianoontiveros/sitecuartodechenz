import { Card } from "flowbite-react";
import React from "react";
import portada from "../assets/portada_presentacion.png";
import _buttom_travel from "./_buttom_travel";
import _Youtube_video from "./_Youtube_video";

export const _card_presentation = () => {
  return (
    <div className="comunidad">
      <Card
        className="comunidad_element  bg-black bg-opacity-50  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
        renderImage={() => (
          <img
            width={500}
            height={500}
            src={portada}
            alt="Portada presentación"
            loading="lazy"
          />
        )}
      >
        <h5 className="text-2xl font-bold text-gray-900 text-center">
          ¿Ya eres parte de la familia?
        </h5>
        <p className="font-normal text-gray-700 text-center ">
          Nuestra comunidad te da la bienvenida
        </p>
        <_buttom_travel />
      </Card>
      <Card
        className=" comunidad_element2  max-w-[500px] bg-black bg-opacity-50  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
        href="#"
      >
        <h5 className="text-2xl text-center md:text-4xl my-3 font-bold text-gray-900 ">
          Bienvenidas personitas bellas.
        </h5>

        <p className="font-semibold text-xs xl:text-base ">
          "Espero que aquí encuentres un lugar donde te sientas acompañado y
          cómodo, y donde adquieras la constancia necesaria para acercarte cada
          día más a tus metas. Seremos testigos de tus logros, reconociendo que
          el esfuerzo y el compromiso son tuyos. No nos llevaremos el crédito,
          pero sí la satisfacción de saber que si tú puedes, nosotros también.
        </p>
        <p className="font-semibold text-xs xl:text-base ">
          Te ofrecemos un espacio de buenas vibras, basado en el respeto, donde
          podrás compartir tus objetivos, celebrar tus éxitos y recibir el apoyo
          de la comunidad en lo que necesites. Mi nombre es Luciano, aunque los
          amigos me llaman Chenz, y te invito a unirte a nuestras largas
          jornadas."
        </p>

        <p className="card p-2 mb-3 border font-normal text-center text-xs xl:text-base text-gray-700 ">
          Este canal representa a una pequeña comunidad de estudiantes,
          profesionales y freelancers que se reúnen para compartir sus
          experiencias a través de diversos medios digitales. Nos enorgullece
          estar en compañía de personas tan maravillosas.
        </p>
      </Card>
      <div className="comunidad_element3  ">
        <Card className="bg-dark max-h-[500px] mt-5 text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
          <_Youtube_video
            embedId="WkmVQohDvK8"
            atribute="w-[100%] min-h-[300px]"
          />
        </Card>
        <Card className="bg-dark max-h-[500px] mt-5 text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
          <_Youtube_video
            embedId="c2menI72qfo"
            atribute="w-[100%] min-h-[300px]"
          />
        </Card>
      </div>
    </div>
  );
};

export default _card_presentation;
