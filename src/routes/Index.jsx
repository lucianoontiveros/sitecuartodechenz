import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Inicio from "../Pages/Inicio";
import Comandos from "../Pages/Comandos";
import Sonidos from "../Pages/Sonidos";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/comandos/",
        element: <Comandos />,
      },
      {
        path: "/sonidos/",
        element: <Sonidos />,
      },
    ]
  },
])
