import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="navbar_container">
                <div className="logo_container">
                    <div>CUARTO DE CHENZ</div>
                </div>
                <div className="link_container">
                    <Link to="/">INICIO</Link>
                    <Link to="/comandos">COMANDOS</Link>
                    <Link to="/sonidos">SONIDOS</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar   