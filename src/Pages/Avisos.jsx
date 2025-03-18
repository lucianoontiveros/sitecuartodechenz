import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

import _buttom_travel from "../Components/_buttom_travel";
import Totoro_image from "../assets/Totoro_article_1.png";
import _Youtube_video from "../Components/_Youtube_video";
const About = () => {
  return (
    <article className="articulo mt-20">
      <section className="articulo_media flex flex-col ">
        <Card className=" bg-dark max-h-[500px] mt-5 text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
          <img
            className="rounded-lg m-0 p-0 max-h-[450px] "
            src={Totoro_image}
            alt="Imagen Articulo"
          />
        </Card>
        <Card className="bg-dark articulo_video mt-2 text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
          <_Youtube_video
            embedId="WkmVQohDvK8"
            atribute="w-[100%] min-h-[300px]"
          />
        </Card>
      </section>

      <section className="articulo_aviso my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
        <h1 className="text-2xl font-bold mb-2">Se vienen más cambios</h1>
        <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
          20/09/204 for Chenz
        </span>
        <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
        <p className="mt-2">
          Gente bonita, espero que se encuentren muy bien, llevando adelante un
          excelente viernes. Paso a informar que por fin reuní el tiempo para
          poder organizar de una mejor manera la página del canal. Al momento de
          crearla prioricé hacerla en un corto tiempo sin ordenar ciertos
          apartados como corresponde. Seguiré trabajando en ella, pero, ya se
          encuentra una versión preliminar. No es nada del otro mundo, sin
          embargo, es un comienzo.
        </p>
        <p className="mt-2">
          Pronto estaré poniendo manos a la obra en una nueva versión del bot.
          Cambiaremos algunos comandos con la finalidad de hacer más rápidas las
          gestiones habituales, y poder a su vez, lograr un mayor rendimiento.
          También intentaré aplicar cambios visuales.
        </p>
        <p className="mt-2">
          Por si te perdiste las noticias relevantes del canal, nuestra María
          Wolf se convirtió en abogada (Nivel dios). Y, por otro lado, Daniel en
          bici, sacó su tesis y se consagró también. Felicidades, chicos, sé lo
          súper merecen y no me puedo imaginar lo que se debe sentir cumplir una
          etapa a lo grande como ustedes lo hicieron. Es una placer siempre
          contar con su compañía.
        </p>
        <p className="mt-3">
          No sé si lo notaron, pero a mi entender, Twitch está tirando mucha
          publicidad en la plataforma. Es un poco complejo para los "study with
          me" transmitir, porque a veces rompe con sus sesiones de enfoque,
          aunque sé que la plataforma necesita subsistir con base en esos
          ingresos. Por ello subí el sonido de la lluvia, característica de mi
          canal, para que pueda regular el volumen, cosas que al entrar las
          publicidades no los asuste. Por ello también, estaré reasignando la
          propiedad VIP para los usuarios más activos. Por el momento no sé sí
          el rol mod. Si puedo hoy, me pongo en tarea basándome en los consejos
          de la gente que suele estar más pendiente de quienes saludan,
          interactúan y demás, así les puedo mejorar la experiencia, evitando
          los anuncios, ya que por lo menos en mi país, permitirse una
          suscripción para tal fin, es un sacrificio.
        </p>
        <p className="mt-3">
          Espero que tengan un gran fin de semana. Iré avisando novedades en
          cuanto pueda.
        </p>
        <p className="mt-2">un abrazo.</p>
        <spam className="mt-3">Chenz</spam>
        <div className="mt-5">
          <Button gradientDuoTone="cyanToBlue">
            <a
              href="https://discord.gg/84FYb8TWB7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avisos anteriores
            </a>
          </Button>
        </div>
      </section>
    </article>
  );
};

export default About;
