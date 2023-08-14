import styleAssistencial from "./styleAssistencial.scss";
import assistencial from "../../assetsCoberturas/logoAssistencial.png";
import flechita from "../../assetsCoberturas/flechaAzul.png";
import tilde from "../../assetsCoberturas/tickVerde.png";
import tildeAzul from "../../assetsCoberturas/tickAzul.png";
import { Link } from "react-router-dom";

const Assistencial = () => {
    return (
        <div className="op">
            <div className="assistencial">
                <div className="sectionAssistencial1">
                    <Link to="/Coberturas" className="atras">
                        Volver
                    </Link>
                    <img src={Assistencial} alt="logo Assistencial" />
                    <p>
                        Es la organizacion medica mas grande del Nordeste Argentino,
                        comprometidos dia a dia en brindar la mejor calidad de servicio
                        integral de salud para todos los chaqueños hace mas de 30 años.
                    </p>
                </div>
                <div className="sectionAssistencial2">
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
                            <img src={tildeAzul} alt="tilde azul" /> Consultas Médicas
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Análisis Bioquímicos
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> 40% Descuento en
                            Farmacias
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Internación Clínica y
                            Quirúrgica
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Óptica
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Ortodoncia
                        </h2>
                        <h2>
                            <img src={tildeAzul} alt="tilde azul" /> Odontología
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Fonoudiología
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Kinesiología
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Alta Complejidad
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Asistencia al Viajero
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Servicio de Emergencias
                            Médicas
                        </h2>
                        <h2>
                            <img src={tildeAzul} alt="tilde azul" /> Servicio Odontológico
                            Móvil
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Plan Materno Infantil
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Exámentes preescolares
                            para el niño
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Vacunas antigripales
                            <br />
                            <br />
                            <img src={tildeAzul} alt="tilde azul" /> Cobertura de Embarazo y
                            Parto
                        </h2>
                    </div>
                </div>
                <div className="btnAssistencial">
                    <h2>
                        Para más información, ver la cartilla completa y prestaciones
                        disponibles.
                    </h2>
                    <Link to="/Contactanos" className="linkChaco">
                        CLICK AQUÍ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Assistencial;