import Parallax from "./Parallax.jsx";
import styleCoberturas from "./styleCoberturas.scss";
import img1 from "./assetsCoberturas/imgCobertura1.jpg";
import img2 from "./assetsCoberturas/imgCobertura2.jpg";
import ospida from "./assetsCoberturas/ospida.jpeg";
import sancor from "./assetsCoberturas/sancor.jpeg";
import conexionsalud from "./assetsCoberturas/conexionsalud.jpeg";
import chaco from "./assetsCoberturas/chaco.png"

const Coberturas = () => {
    return (
        <div>
            <div className="content">
                <h1>Nuestras Coberturas</h1>
                <hr />
                <div className="imgContent">
                    <div>
                        <h2>Ospida</h2>
                        <div className="imgsimg">
                            {" "}
                            <img src={ospida} alt="Ospida, Cobertuta medica" />
                        </div>
                    </div>
                    <div>
                        <h2>Conexion Salud</h2>
                        <div className="imgsimg">
                            <img src={conexionsalud} alt="conexionsalud, Cobertuta medica" />
                        </div>
                    </div>
                    <div>
                        <h2>Sancor Salud</h2>
                        <div className="imgsimg">
                            {" "}
                            <img src={sancor} alt="sancor, Cobertuta medica" />
                        </div>
                    </div>
                    <div>
                        <h2>FemeChaco</h2>
                        <div className="imgsimg">
                            {" "}
                            <img src={chaco} alt="FemeChaco, Cobertuta medica" />
                        </div>
                    </div>
                </div>
            </div>

            <Parallax speed={0.4} offset={10} image={img2}>
                <h2>Vamos a elegir la cobertura que necesites</h2>
                <p>Llevamos tu salud a donde vayas</p>
            </Parallax>
        </div>
    );
};

export default Coberturas;
