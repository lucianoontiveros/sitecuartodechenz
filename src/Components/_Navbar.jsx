import React from "react";
import { useLocation } from "react-router-dom";
import iconSite from "../assets/icon.png";
import { Navbar } from "flowbite-react";

// Función para determinar las clases CSS basadas en si el enlace está activo o no
const getNavLinkClass = (isActive) => {
  return isActive
    ? "block nav-link bg-gray-800 py-2 px-3 md:p-0 rounded underline text-white md:bg-transparent underline-green-200 sm:underline-indigo-300 md:underline-mintGreen xl:underline-skyBlue active"
    : "block nav-link text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue py-2 px-3 md:p-0 rounded md:bg-transparent";
};

// Componente del Navbar
const _Navbar = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  return (
    <Navbar
      className="bg-dark flex justify-center w-full"
      fluid
      rounded
    >
      {/* Marca del Navbar con logo */}
      <Navbar.Brand href="/">
        <div className="flex w-full items-center space-x-3 my-2 rtl:space-x-reverse">
          <img
            src={iconSite}
            className="h-12 hidden sm:block"
            alt="Cuarto de Chenz"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="logo animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop mr-5 px-2 uppercase text-mintGreen sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue">
              CUARTO DE CHENZ
            </span>
          </span>
        </div>
      </Navbar.Brand>

      {/* Toggle del Navbar para vista móvil */}
      <div>
        <Navbar.Toggle className="bg-mintGreen sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue" />
      </div>

      {/* Colapso del Navbar con enlaces */}
      <Navbar.Collapse>
        {/* Enlaces del menú */}
        <Navbar.Link
          href="/"
          className={getNavLinkClass(location.pathname === "/")}
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          href="/Comunidad"
          className={getNavLinkClass(location.pathname === "/Comunidad")}
        >
          Comunidad
        </Navbar.Link>
        <Navbar.Link
          href="/Horarios"
          className={getNavLinkClass(location.pathname === "/Horarios")}
        >
          Horarios
        </Navbar.Link>
        <Navbar.Link
          href="/Avisos"
          className={getNavLinkClass(location.pathname === "/Avisos")}
        >
          Avisos
        </Navbar.Link>
        <Navbar.Link
          href="/Comandos"
          className={getNavLinkClass(location.pathname === "/Comandos")}
        >
          Comandos
        </Navbar.Link>
        <Navbar.Link
          href="/Tutoriales"
          className={getNavLinkClass(location.pathname === "/Tutoriales")}
        >
          Tutoriales
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default _Navbar;
