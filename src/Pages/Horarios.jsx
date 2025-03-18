import React from "react";
import { Card } from "flowbite-react";
import Totoro_off from "../assets/Totoro_off.jpg";
import Totoro_on from "../assets/Totoro_on.jpg";
import _bar_media from "../Components/_bar_media";

const Horarios = () => {
  return (
    <article className="emisiones mt-3">
      <section className="section_1 animate-dance-movil  flex justify-center flex-wrap ">
        <header className="flex w-auto">
          <Card
            href="#"
            className="border-none bg-black text-sm xl:text-lg text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue "
          >
            <h5 className="text-center text-2xl font-bold tracking-tight">
              Tenemos dos modalidades de emisión:
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              "Las modalidades están diseñadas según las actividades diarias de
              Chenz. Por la mañana, el bot emitirá automáticamente, mientras que
              por la tarde, el se encargará de llevar la transmisión. De todas
              formas, contamos con un bot integrado en el chat que te ayudará a
              gestionar tus tiempos y tareas. Para más información, consulta la
              sección de Tutoriales."
            </p>
          </Card>
        </header>

        <div className=" sm:w-[30%] m-h-[50%] mx-2 my-8  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue text-center ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Turno Mañana
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            04:00 A 13:00 HS ARG
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            09:00 A 17:00 HS ESP
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            01:00 A 10:00 HS MEX DF
          </p>
        </div>
        <div className=" sm:w-[30%] m-h-[50%] mx-2 my-8  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue text-center ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Google Calendar
            </h5>
          </a>
          <p className="mb-3 font-normal  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue ">
            Puedes solicitarnos a través de las redes la invitación de Google
            Calendar para sincronizar las emisiones con tu hora local
          </p>
          <_bar_media />
        </div>
        <div className=" sm:w-[30%] m-h-[50%] mx-2 my-8  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue text-center ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Turno Tarde
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            13:00 A 21:00 HS ARG
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            17:00 A 01:00 HS ESP
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            10:00 A 18:00 HS MEX DF
          </p>
        </div>
      </section>
      <section className="section_2 flex justify-around flex-wrap  mb-2 p-2">
        <Card className="bg-cyan-950 sm:w-[45%] mb-2  animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop">
          <img
            className="rounded-lg"
            width={500}
            height={200}
            src={Totoro_on}
            alt="image 1"
          />
          <h5 className="text-center text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Directos por la Mañana
          </h5>
          <div className="flex items-baseline text-skyBlue">
            Por las mañanas, Chenz está ocupado trabajando, y el stream se
            gestiona automáticamente, manteniendo los tiempos productivos y los
            descansos.
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Mayor enfoque.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Gestión de tareas.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Comandos para interactuar
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Timer !focus para usuarios.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Escenas automáticas.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Música en los descansos.
              </span>
            </li>
          </ul>
        </Card>

        <Card className="bg-slate-800 sm:w-[45%] mb-2 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop">
          <img
            className="rounded-lg"
            width={500}
            height={200}
            src={Totoro_off}
            alt="image 1"
          />
          <h5 className="text-center text-skyBlue sm:text-mintGreen md:text-indigo-300  xl:text-green-200 mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Directos por la Tarde
          </h5>
          <div className="flex items-baseline text-skyBlue mb-[3px]">
            Por las tardes, Chenz se une a los directos, jugando e interactuando
            durante los descansos hasta finalizar la transmisión.
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Mayor interacción con la comunidad.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Gestión de tareas.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Comandos para interactuar
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Timer !focus para usuarios.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Escenas automáticas.
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-white">
                Juegos en los descansos
              </span>
            </li>
          </ul>
        </Card>
      </section>
    </article>
  );
};

export default Horarios;
