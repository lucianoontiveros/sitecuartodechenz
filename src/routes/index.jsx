import { createBrowserRouter } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Inicio />,
    errorElement: <NotFound />,
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