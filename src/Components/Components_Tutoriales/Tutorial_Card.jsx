import React from "react";
import { Card } from "flowbite-react";
import totoro_tutorial from "../Components_Tutoriales/totoro_tutorial.jpg";

function Tutorial_Card() {
  const card_styles =
    "w-full bg-dark text-xs mt-3 xl:text-base text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 ";

  return (
    <div className="tutorial_card size">
      <Card
        className={card_styles}
        imgSrc={totoro_tutorial}
        horizontal
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Comandos para interactuar con BrunitoPet
        </h5>
        <p className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
          En este canal tenemos un bot que recuerda tus tareas. La forma de
          interactuar con él es muy fácil. Su nombre es BrunitoPet y aquí te
          dejamos los comandos, y unos videos tutoriales más abajo. No olvides
          que debes ingresarlos en el chat de Twitch del canal.
        </p>
      </Card>

      <Card
        className={card_styles}
        horizontal
      >
        <h5 className="text-2xl font-bold text-gray-900">
          COMANDOS PARA ADMINISTRAR TAREAS
        </h5>
        <p>
          <span className="tutorial_comandos bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !tarea + más la descripción de la tarea
          </span>
          Ingresando el comando junto con su correspondiente descripción, la
          misma quedará registrada y un mensaje vía chat avisará que se complió
          con la petición.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !lista
          </span>
          Ingresando este comando se desplegará en pantalla la lista de tareas y
          también se expondrá en el chat. De no tener tareas registradas habrá
          un aviso informando la situación.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            {" "}
            !eliminar + ID
          </span>
          Ingresando el comando más el ID la tarea vinculada se elimina.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            {" "}
            !marcar + ID
          </span>
          Ingresando el comando más el ID la tarea vinculada se marca como
          realizada.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !task + task description
          </span>
          By entering the command and then the description the task will be
          logged and the log will be displayed on the screen and in the chat.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !list
          </span>
          Displays on screen and in the chat the list of pending tasks. If no
          task is registered, a message via chat will inform that there are no
          activities.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !delete + ID
          </span>
          Entering the command and adding the ID will allow you to delete the
          linked task.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !check + ID
          </span>
          Entering the command to the chat and adding the corresponding ID will
          allow you to mark your task as done.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !clear
          </span>
          Ingresando este comando se borran todas las tareas. / Entering this
          command deletes all tasks.
        </p>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !pickup
          </span>
          ingresando este comando se marcan todas las tareas. / by entering this
          command all tasks are marked.
        </p>
      </Card>
    </div>
  );
}

export default Tutorial_Card;
