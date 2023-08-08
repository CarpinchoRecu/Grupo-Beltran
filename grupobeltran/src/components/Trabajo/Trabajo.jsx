import styleTrabajo from "./styleTrabajo.scss";
import FormTrabajo from "./FormTrabajo.jsx";
import { Link } from "react-router-dom";


const Trabajo = () => {
    return (
        <>

            <div id="titleTrabajo">
                <h2>¿Deseas formar parte del equipo de AsesSalud?</h2>
            </div>
            <div className="sectionsTrabajo">
                <div className="sectionTrabajo1">
                    <h2>Estas buscando un trabajo con capacidad de crecimiento?</h2>
                </div>
                <div className="sectionTrabajo2">
                    <h2>Forma parte de nuestro equipo y expandi tus posibilidades</h2>
                </div>
                <div className="sectionTrabajo3">
                    <div className="circulo">
                        <h2>Envianos tus datos y cv en este formulario</h2>
                        <Link to="/FormTrabajo">Toca aqui</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Trabajo;
