import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
console.log(error) 
   return (
        <div>
            <h1>404 - Not Found</h1>
            <p>La página que estás buscando no existe.</p>
            <p>Por favor, verifica la URL y vuelve a intentarlo.</p>  
            <p>{error.statusText} || {error.message}</p>  
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default NotFound