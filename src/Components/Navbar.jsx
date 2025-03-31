import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links_elements = () => {
    return (
      <>
        <Link to="/">INICIO</Link>
        <Link to="/comandos">COMANDOS</Link>
        <Link to="/sonidos">SONIDOS</Link>
      </>
    );
  };

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <nav>
        <div className="navbar_container">
          <div className="logo_container">
            <div>CUARTO DE CHENZ</div>
          </div>
          <div className="hidden link_container md:flex">
            <Links_elements />
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavBar}>
              {isOpen ? "activo" : "no activo"}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="list_navbar link_container mt-3.5 text-amber-50 flex bg-amber-500">
          <Links_elements />
        </div>
      )}
    </>
  );
};

export default Navbar;
