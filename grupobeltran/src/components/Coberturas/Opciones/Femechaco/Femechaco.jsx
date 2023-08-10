import styleFemechaco from "./styleFemechaco.scss";
import chaco from "../../assetsCoberturas/logoFemechaco.png";
import flechita from "../../assetsCoberturas/flechaAzul.png";
import tilde from "../../assetsCoberturas/tickVerde.png";
import { Link } from "react-router-dom";

const Femechaco = () => {
    return (
        <div className="op">
            <div className="femechaco">
                <div className="sectionChaco1">
                <Link to="/Coberturas" className="atras">Volver</Link>
                    <img src={chaco} alt="logo femechaco" />
                    <p>
                        Es la organizacion medica mas grande del Nordeste Argentino,
                        comprometidos dia a dia en brindar la mejor calidad de servicio
                        integral de salud para todos los chaqueños hace mas de 30 años.
                    </p>
                </div>
                <div className="sectionChaco2">
                    <div className="sec2-parte1">
                        <h1>PLANES DE PREPAGA</h1>
                        <div className="planesChaco">
                            <div className="plan">
                                <h2>
                                    <img src={flechita} alt="flechita azul" />
                                    <azulp>F100</azulp> de <azul>4</azul> a <azul>21</azul> años.
                                </h2>
                            </div>
                            <div className="plan">
                                <h2>
                                    <img src={flechita} alt="flechita azul" />
                                    <azulp>F200</azulp> de <azul>22</azul> a <azul>59</azul> años.
                                </h2>
                            </div>
                            <div className="plan">
                                <h2>
                                    <img src={flechita} alt="flechita azul" />
                                    <azulp>F300</azulp> de <azul>22</azul> a <azul>59</azul> años
                                    y grupo familiar.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-parte2">
                        <h2>PMO</h2>
                        <h2>
                            <azul>P</azul>lan <azul>M</azul>edico <azul>O</azul>bligatorio
                        </h2>
                        <img src={tilde} alt="tilde verde" />
                    </div>
                    <div className="sec2-parte3">
                        <h2>
                            <tilde>✔️</tilde> Consultas Médicas
                            <br /><br />
                            <tilde>✔️</tilde> Análisis Bioquímicos
                            <br /><br />
                            <tilde>✔️</tilde> 40% Descuento en Farmacias
                            <br /><br />
                            <tilde>✔️</tilde> Internación Clínica y Quirúrgica
                            <br /><br />
                            <tilde>✔️</tilde> Óptica
                            <br /><br />
                            <tilde>✔️</tilde> Ortodoncia
                        </h2>
                        <h2>
                            <tilde>✔️</tilde> Odontología
                            <br /><br />
                            <tilde>✔️</tilde> Fonoudiología
                            <br /><br />
                            <tilde>✔️</tilde> Kinesiología
                            <br /><br />
                            <tilde>✔️</tilde> Alta Complejidad
                            <br /><br />
                            <tilde>✔️</tilde> Asistencia al Viajero
                            <br /><br />
                            <tilde>✔️</tilde> Servicio de Emergencias Médicas
                        </h2>
                        <h2>
                            <tilde>✔️</tilde> Servicio Odontológico Móvil
                            <br /><br />
                            <tilde>✔️</tilde> Plan Materno Infantil
                            <br /><br />
                            <tilde>✔️</tilde> Exámentes preescolares para el niño
                            <br /><br />
                            <tilde>✔️</tilde> Vacunas antigripales
                            <br /><br />
                            <tilde>✔️</tilde> Cobertura de Embarazo y Parto
                        </h2>
                    </div>
                </div>
                <div className="btnChaco">
                    <h2>
                        Para más información, ver la cartilla completa y prestaciones
                        disponibles.
                    </h2>
                    <Link to="/Contactanos" className="linkChaco">CLICK AQUÍ</Link>
                </div>
            </div>
        </div>
    );
};

export default Femechaco;
