import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        async lazy() {
          const m = await import("../Pages/Inicio");
          return { Component: m.default };
        },
      },
      {
        path: "/comandos/",
        async lazy() {
          const m = await import("../Pages/Comandos");
          return { Component: m.default };
        },
      },
      {
        path: "/sonidos/",
        async lazy() {
          const m = await import("../Pages/Sonidos");
          return { Component: m.default };
        },
      },
      {
        path: "/avisos/",
        async lazy() {
          const m = await import("../Pages/Avisos");
          return { Component: m.default };
        },
      },
      {
        path: "/croquetas/",
        async lazy() {
          const m = await import("../Pages/RoffCoins");
          return { Component: m.default };
        },
      },
      {
        path: "/reglas/",
        async lazy() {
          const m = await import("../Pages/Reglas");
          return { Component: m.default };
        },
      },
    ],
  },
]);
