import styleVisitar from "./styleVisitar.scss";
import visitar from "../../assetsCoberturas/logoVisitar.png";
import { Link } from "react-router-dom";
const Visitar = () => {
    return (
        <div className="op">
            <div className="visitar">
                <img src={visitar} alt="logo visitar" />
                <h1>
                    Cumplen 30 años en el gerenciamiento y cuidado de la salud de los
                    beneficiarios de Obras Sociales y Medicinas Prepagas en todo el país.
                </h1>
                <p>
                    "Una empresa de salud que atiende las necesidades de sus clientes en
                    forma profesional, confiable y eficiente".
                </p>
                <h2>
                    Para <verde>más información</verde> , ver la cartilla completa y prestaciones
                    disponibles.
                </h2>
                <Link to="/Contactanos" className="linkVisitar">
                    CLICK AQUÍ
                </Link>
            </div>
        </div>
    );
};
export default Visitar;
