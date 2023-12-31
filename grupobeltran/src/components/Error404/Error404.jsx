import { Link } from "react-router-dom";
import styleError from "./styleError.scss"
import imgError from "./assetsError/imgError.jpeg"

const Error404 = () => {

    return (
        <>
            <div id="error">
                <h1 className="titleError1">Proximamente</h1>
                <h4 className="titleError2">Vuelve al inicio</h4>
                <Link className="linkError" to="/Inicio">Volver</Link>
                <img src={imgError} alt="img_error" />
            </div >
        </>

    )
}

export default Error404