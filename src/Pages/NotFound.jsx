import { useRouteError, Link } from "react-router-dom";
import IconSite from "../assets/IconSite.png";
import "./notfound.css";

const NotFound = () => {
    const error = useRouteError();
    
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <div className="notfound-image">
                    <img src={IconSite} alt="Cuarto de Chenz" />
                </div>
                
                <div className="notfound-text">
                    <h1 className="notfound-title">404</h1>
                    <h2 className="notfound-subtitle">Página No Encontrada</h2>
                    <p className="notfound-message">
                        La página que estás buscando no existe o ha sido movida.
                    </p>
                    <p className="notfound-detail">
                        Por favor, verifica la URL y vuelve a intentarlo.
                    </p>
                    
                    {error && (
                        <p className="notfound-error">
                            {error.statusText || error.message}
                        </p>
                    )}
                    
                    <Link to="/" className="notfound-button">
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;