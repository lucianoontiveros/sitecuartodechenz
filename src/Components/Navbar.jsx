import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { useState, useRef, useEffect } from "react";
import Menu from "./img/Menu.jsx";
import OutMenu from "./img/OutMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onList, setOnlist] = useState("hidden");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null); // Referencia al menú
  const location = useLocation();

  const Links_elements = () => {
    return (
      <>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/"
          end // Esto asegura que solo esté activo en la ruta exacta
        >
          INICIO
        </NavLink>
        {<NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/avisos"
        >
          AVISOS
        </NavLink>}
      <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/comandos"
        >
          COMANDOS
        </NavLink> 
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/sonidos"
        >
          SONIDOS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/croquetas"
        >
          CROQUETAS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/reglas"
        >
          REGLAS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link_items ${
              isActive ? "text-green-400 font-bold underline" : "text-gray-500"
            }`
          }
          to="/subscription"
        >
          SUBSCRIPTION
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            className={({ isActive }) =>
              `login-button ${isActive ? "active" : ""}`
            }
            to="/admin/dashboard"
          >
            PANEL
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              `login-button ${isActive ? "active" : ""}`
            }
            to="/admin/login"
          >
            LOGIN
          </NavLink>
        )}
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

  // Detectar clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú si el clic es fuera del contenedor
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Verificar si el usuario está logueado
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('adminToken');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    // Escuchar cambios en localStorage (para cuando se hace logout desde el panel)
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [location]); // Re-verificar cuando cambia la ubicación

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

          <div className="link_container desktop-only">
            <Links_elements />
          </div>
          <div className="mobile-menu-btn">
            <button onClick={toggleNavBar}>
              {isOpen ? <OutMenu /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="toogle_navbar "
          ref={menuRef}
        >
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
