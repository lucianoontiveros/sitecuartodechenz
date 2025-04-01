import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onList, setOnlist] = useState("hidden");

  const Links_elements = () => {
    return (
      <>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-blue-500 font-bold underline" : "text-gray-500"
            }`
          }
          to="/"
          end // Esto asegura que solo esté activo en la ruta exacta
        >
          INICIO
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-blue-500 font-bold underline" : "text-gray-500"
            }`
          }
          to="/comandos"
        >
          COMANDOS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-blue-500 font-bold underline" : "text-gray-500"
            }`
          }
          to="/sonidos"
        >
          SONIDOS
        </NavLink>
      </>
    );
  };

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
    if (isOpen === false) {
      setOnlist("contariner_links");
    } else {
      setOnlist("");
    }
  };

  const close_toggleNabar = () => {
    toggleNavBar();
  };

  return (
    <>
      <nav>
        <div className="navbar_container">
          <NavLink
            to="/"
            className="logo_container"
          >
            <div>CUARTO DE CHENZ</div>
          </NavLink>

          <div className="hidden link_container md:flex">
            <Links_elements />
          </div>
          <div className="md:hidden toogle_navbar">
            <button onClick={toggleNavBar}>
              {isOpen ? "Activo" : "no activo"}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="toogle_navbar">
          <div
            className={onList}
            onClick={close_toggleNabar}
          >
            <Links_elements />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
