import { Link } from "react-router-dom";

const Error404 = () => {

    return (
        <div>
            <h1>Error 404 - Not Found</h1>
            <h4>Vuelve al inicio</h4>
            <Link to="/Inicio">Volver</Link>

        </div >
    )
}

export default Error404