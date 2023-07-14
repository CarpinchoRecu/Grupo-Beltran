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
                <h2>Contenido dentro del Parallax</h2>
                <p>
                    Este es el contenido que se mostrará dentro del componente Parallax.
                </p>
            </Parallax>
        </div>
    );
};

export default Coberturas;
