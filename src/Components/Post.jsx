// Importamos React, que es necesario para crear componentes de React.
import React from "react";

// Importamos useLoaderData de react-router-dom. Este hook nos permite acceder a los datos cargados para esta ruta.
import { Link, useLoaderData } from "react-router-dom";

// Definimos un componente de React llamado Post.
const Post = () => {
  // Usamos el hook useLoaderData para obtener los datos de la publicación (post) cargados para esta ruta.
  const { post } = useLoaderData();

  // Renderizamos un elemento de tarjeta (card) de Bootstrap que muestra el título y el cuerpo de la publicación.
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[800px] mt-8 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={post.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.content}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none "
          >
            Volver
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              ariaHidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente Post como el export por defecto de este módulo.
export default Post;

// Definimos una función asíncrona llamada loaderPost que carga los datos de una publicación específica.
export const loaderPost = async ({ params }) => {
  // Hacemos una solicitud a la API de JSONPlaceholder para obtener los datos de la publicación con el ID especificado en params.
  const res = await fetch(`https://jsonplaceholder.org/posts/${params.id}`);

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: "Code: " + res.status,
    };
  }
  // Convertimos la respuesta en JSON.
  const post = await res.json();

  // Devolvemos los datos de la publicación.
  return { post };
};
