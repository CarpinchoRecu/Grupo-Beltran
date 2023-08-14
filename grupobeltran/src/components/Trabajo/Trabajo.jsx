import styleTrabajo from "./styleTrabajo.scss";
import FormTrabajo from "./FormTrabajo.jsx";
import { Link } from "react-router-dom";
import flecha from "./assetsTrabajo/flecha.png";
import DelayLink from "../../hooks/DelayLink.jsx";

const Trabajo = () => {
    return (
        <>
            <div className="op">
                <div className="titleTrabajo">
                    <h1>¿ESTAS BUSCANDO UN TRABAJO CON BUEN AMBIENTE LABORAL Y POSIBILIDAD DE CRECIMIENTO?</h1>
                    <h2>¡En AsesSalud te damos esa opurtunidad!</h2>
                    <div className="circulo">
                        <h1>Hace <strong>CLICK</strong> aca</h1>
                        <DelayLink className="linkTrabajo" to="/FormularioTrabajo" delay={310}>
                            <img src={flecha} alt="flecha" />
                        </DelayLink>
                        <h2>Completa el formulario para formar parte de nuestra empresa.</h2>
                    </div>
                    <div className="frase">
                        <h2>"Trabaja en silencio, haz que el exito haga todo el ruido".</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trabajo;
