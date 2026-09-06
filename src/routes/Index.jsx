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
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando…</div>,
      },
      {
        path: "/comandos/",
        async lazy() {
          const m = await import("../Pages/Comandos");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando comandos…</div>,
      },
      {
        path: "/sonidos/",
        async lazy() {
          const m = await import("../Pages/Sonidos");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando sonidos…</div>,
      },
      {
        path: "/avisos/",
        async lazy() {
          const m = await import("../Pages/Avisos");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando avisos…</div>,
      },
      {
        path: "/croquetas/",
        async lazy() {
          const m = await import("../Pages/RoffCoins");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando croquetas...</div>,
      },
      {
        path: "/reglas/",
        async lazy() {
          const m = await import("../Pages/Reglas");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando reglas…</div>,
      },
      {
        path: "/subscription/",
        async lazy() {
          const m = await import("../Pages/Subscription");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando suscripción…</div>,
      },
      {
        path: "/comentario",
        async lazy() {
          const m = await import("../Pages/ComentarioForm");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando formulario…</div>,
      },
      {
        path: "/admin/login",
        async lazy() {
          const m = await import("../admin/AdminLogin");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando login…</div>,
      },
      {
        path: "/admin/dashboard",
        async lazy() {
          const m = await import("../admin/AdminDashboard");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando dashboard…</div>,
      },
      {
        path: "/admin/avisos",
        async lazy() {
          const m = await import("../admin/AvisosManager");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando avisos…</div>,
      },
      {
        path: "/admin/comentarios",
        async lazy() {
          const m = await import("../admin/ComentariosManager");
          return { Component: m.default };
        },
        HydrateFallback: () => <div style={{padding:'2rem', textAlign:'center'}}>Cargando comentarios…</div>,
      },
    ],
  },
]);
