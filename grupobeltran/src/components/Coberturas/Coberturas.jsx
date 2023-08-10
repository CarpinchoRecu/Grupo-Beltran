import styleCoberturas from "./styleCoberturas.scss";
import ospida from "./assetsCoberturas/logoOspida.png";
import assistencial from "./assetsCoberturas/logoAssistencial.png";
import sancor from "./assetsCoberturas/logoSancor.png";
import visitar from "./assetsCoberturas/logoVisitar.png";
import chaco from "./assetsCoberturas/logoFemechaco.png"
import { Link } from "react-router-dom";

const Coberturas = () => {
    return (
        <div className="op">
            <div className="coberturas">
                <div className="contenedorCoberturas">
                    <Link className="cobertura" to="/Ospida">
                        <img src={ospida} alt="logo de ospida" />
                    </Link>
                    <Link className="cobertura" to="/SancorSalud">
                        <img src={sancor} alt="logo de sancor" />
                    </Link>
                    <Link className="cobertura" to="/Visitar">
                        <img src={visitar} alt="logo de visitar" />
                    </Link>
                    <Link className="cobertura" to="/Assistencial">
                        <img src={assistencial} alt="logo de assistencial" />
                    </Link>
                    <Link className="cobertura" to="/Femechaco">
                        <img src={chaco} alt="logo de femechaco" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Coberturas;
