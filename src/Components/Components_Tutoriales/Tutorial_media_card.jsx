import React from "react";
import { Card } from "flowbite-react";
import portada from "../Components_Tutoriales/portada_presentacion.png";
import _buttom_travel from "../_buttom_travel";

function Tutorial_media_card() {
  const card_styles =
    "w-full bg-dark mb-2 mt-3 text-xs mx-1  xl:text-base text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 ";

  return (
    <div className="tutorial_media flex flex-row w-full flex-wrap justify-center size">
      <Card
        className={card_styles}
        imgSrc={portada}
        horizontal
      >
        <h5 className="text-2xl font-bold text-gray-900">
          ¿Ya eres parte de la familia?
        </h5>
        <p className="font-normal text-gray-700 ">
          Nuestra comunidad te da la bienvenida.
        </p>
        <_buttom_travel />
      </Card>
      <Card
        className={card_styles}
        horizontal
      >
        <iframe
          className="mx-0 p-0 "
          src="https://www.youtube.com/embed/qi24YyPXmo0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          height="300px"
        ></iframe>
        <h5 className="tmb-2 text-2xl font-bold tracking-tight">BRUNITOPET</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Aquí te explicamos un poco de que trata el bot de tareas y como
          introducir los comandos. Si bien la pagina y el aspecto del bot cambia
          constantemente, la lógica es la misma.
        </p>
      </Card>
      <Card
        className={card_styles}
        horizontal
      >
        <iframe
          className="mx-0 p-0 "
          src="https://www.youtube.com/embed/yR-CkFv7YPI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          height="300px"
        ></iframe>
        <h5 className="tmb-2 text-2xl font-bold tracking-tight">
          TUTORIAL DISCORD
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          No te quedes afuera de discord. Aquí te damos los pasos a seguir para
          que puedas unirte a nuestra comunidad.
        </p>
      </Card>
      <Card
        className={card_styles}
        horizontal
      >
        <iframe
          className="mx-0 p-0 "
          src="https://www.youtube.com/embed/yeH22xGI1DQ?si=N1ZII-uTwCh1W0v9"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          height="300px"
        ></iframe>
        <h5 className="tmb-2 text-2xl font-bold tracking-tight">
          NOTION PARA ESTUDIANTES
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Te dejo un tutorial para organizarte en Notion. Es simplemente un
          idea. No te preocupes si no tenes conocimiento de la herramientas,
          porque te explico paso por paso lo que hay que hacer.
        </p>
      </Card>
    </div>
  );
}

export default Tutorial_media_card;
