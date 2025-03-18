import React from "react";
import { Card } from "flowbite-react";
import totoro_tutorial_datos from "../Components_Tutoriales/totoro_tutorial_datos.jpg";

function Tutorial_card_1() {
  const card_styles =
    "w-full bg-dark text-xs mt-3 xl:text-base text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 ";

  return (
    <div className="tutorial_card1 size ">
      <Card
        className={card_styles}
        imgSrc={totoro_tutorial_datos}
        horizontal
      >
        <h5 className="tmb-2 text-2xl font-bold tracking-tight ">
          Hazte conocer en nuestra comunidad
        </h5>
        <p className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
          También puedes agregar información para compartir con la comunidad.
          Estos datos serán mostrados cuando interactues con el bot del canal a
          traves de la gestión de tareas.
        </p>
      </Card>

      <Card
        className={card_styles}
        horizontal
      >
        <h5 className="text-2xl font-bold text-gray-900">
          COMANDOS PARA REGISTRAR INFO PERSONAL
        </h5>
        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !nacimiento + dd-mm
          </span>
          Si ingresas tu fecha de nacimiento podremos automáticamente conocer tu
          signo. Próximamente, Brunito recordará si es tu cumpleaños. Importante
          no olvidar ingresar dos dígitos con el guion correspondiente. . Ej:
          !nacimiento 10-09
        </p>

        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !instagram
          </span>
          Puedes poner tu nombre de perfil si tienes instagram. Ej: !instagram
          luciano.a.ontiveros
        </p>

        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !nacionalidad
          </span>
          Puedes indicar allí tu nacionalidad. Ej: !nacionalidad Argentina
        </p>

        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !estudiopara
          </span>
          Si estas estudiando puedes poner allí a lo que te estas dedicando
          ahora mismo. Ej: !estudiopara Ciencias Economicas.
        </p>

        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !opositopara
          </span>
          Si estás opositando puedes dejarnos indicado a qué oposición
          perteneces. Ej: !opositopara La administración Publica.
        </p>

        <p>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            !verusuario + el nombre del usuario (sin @)
          </span>
          Podrás ver los datos más relevantes del usuario, su lista de tareas,
          la ubicación de su perfil y la cantidad de croquetas regaladas a
          BrunitoPet. Recuerda no ingresar el @, simplemente el nombre del
          usuario. Ej !verusuario cuartodechenz
        </p>
      </Card>

      <Card
        className={card_styles}
        horizontal
      >
        <h5 className="tmb-2 text-2xl font-bold tracking-tight">
          COMANDO PARA POMOS / TIMERS PERSONALIZADOS
        </h5>
        <div>
          <p className="">
            <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
              !focus + min:
            </span>
            Ingresando el comando !focus, más lo minutos que necesites de
            concentración, se mostrará en pantalla un cuanto regresiva, que al
            finalizar emitará un sonido de trueno, con un posterior mensaje de
            Brunitopet indicando que tu tiempo de concentración terminó.
            Ejemplo: para 30 minutos puedo ingresar !focus 30.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Tutorial_card_1;
