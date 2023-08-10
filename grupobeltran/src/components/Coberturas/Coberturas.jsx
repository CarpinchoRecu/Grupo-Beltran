import styleCoberturas from "./styleCoberturas.scss";
import ospida from "./assetsCoberturas/logoOspida.png";
import assistencial from "./assetsCoberturas/logoAssistencial.png";
import sancor from "./assetsCoberturas/logoSancor.png";
import visitar from "./assetsCoberturas/logoVisitar.png";
import chaco from "./assetsCoberturas/logoFemechaco.png";

const Coberturas = () => {
    return (
        <div className="op">
            <div className="coberturas">
                <div className="contenedorCoberturas">
                    <div className="cobertura">
                        <img src={ospida} alt="logo de ospida" />
                    </div>
                    <div className="cobertura">
                        <img src={assistencial} alt="logo de assistencial" />
                    </div>
                    <div className="cobertura">
                        <img src={sancor} alt="logo de sancor" />
                    </div>
                    <div className="cobertura">
                        <img src={visitar} alt="logo de visitar" />
                    </div>
                    <div className="cobertura">
                        <img src={chaco} alt="logo de femechaco" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coberturas;
