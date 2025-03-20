import { createBrowserRouter } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Comandos from "../Pages/Comandos";
import Sonidos from "../Pages/Sonidos";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Inicio />,
    errorElement: <NotFound />,
  },
  {
    path: "/comandos/",
    element: <Comandos />,
  },
  {
    path: "/sonidos/",
    element: <Sonidos />,
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
 ])