import stylemonotributo from "./styleMonotributo.scss";
import ospida from "./assetsCoberturas/logoOspida.png";
import sancor from "./assetsCoberturas/logoSancor.png";
import visitar from "./assetsCoberturas/logoVisitar.png";
import chaco from "./assetsCoberturas/logoFemechaco.png"
import DelayLink from "../../hooks/DelayLink.jsx";

const Monotributo = () => {
    return (
        <div className="op">
            <div className="monotributo">
                <div className="contenedorCoberturas">
                    <DelayLink className="cobertura" to="/Coberturas/Ospida" delay={600}>
                        <img src={ospida} alt="logo ospida" />
                    </DelayLink>
                    <DelayLink className="cobertura" to="/Coberturas/SancorSalud" delay={600}>
                        <img src={sancor} alt="logo sancorsalud" />
                    </DelayLink>
                    <DelayLink className="cobertura" to="/Coberturas/Visitar" delay={600}>
                        <img src={visitar} alt="logo visitar" />
                    </DelayLink>
                    <DelayLink className="cobertura" to="/Coberturas/Femechaco" delay={600}>
                        <img src={chaco} alt="logo ospida" />
                    </DelayLink>
                </div>
            </div>
        </div>
    );
};

export default Monotributo;
