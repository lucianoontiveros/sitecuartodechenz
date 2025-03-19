import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    index: true,
    element: <h1 className="text-2xl">Inicio</h1 >,
  },
  {
    path: "/Comunidad/",
    element: <h1 className="text-2xl">Comunidad</h1 >,
  },
  {
    path: "/Horarios/",
    element: <h1 className="text-2xl">Horarios</h1 >,
  },
  {
    path: "/Avisos/",
    element: <h1 className="text-2xl">Avisos</h1 >,
  },
  {
    path: "/Tutoriales/",
    element: <h1 className="text-2xl">Tutoriales</h1 >,
  },
  {
    path: "/Comandos/",
    element: <h1 className="text-2xl">Comandos</h1 >,
  },
 ])