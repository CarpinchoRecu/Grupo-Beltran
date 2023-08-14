import styleFemechaco from "./styleFemechaco.scss";
import chaco from "../../assetsCoberturas/logoFemechaco.png";
import flechita from "../../assetsCoberturas/flechaAzul.png";
import tilde from "../../assetsCoberturas/tickVerde.png";
import tildeAzul from "../../assetsCoberturas/tickAzul.png";
import { useRef, useEffect } from "react";
import BtnInfo from "../../../../hooks/BtnInfo.jsx";

const Femechaco = () => {
    const animateChacoRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useEffect(() => {
        const observerChaco = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("activado");
                        observerChaco.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        animateChacoRefs.forEach((ref) => {
            if (ref.current) {
                observerChaco.observe(ref.current);
            }
        });

        return () => {
            animateChacoRefs.forEach((ref) => {
                if (ref.current) {
                    observerChaco.unobserve(ref.current);
                }
            });
        };
    }, [animateChacoRefs]);

    return (
        <div className="op">
            <div className="femechaco">
                <div className="sectionChaco1" ref={animateChacoRefs[0]}>
                    <img src={chaco} alt="logo femechaco" />
                    <p>
                        Es la organizacion medica mas grande del Nordeste Argentino,
                        comprometidos dia a dia en brindar la mejor calidad de servicio
                        integral de salud para todos los chaqueños hace mas de 30 años.
                    </p>
                </div>
                <div className="sectionChaco2">
                    <div className="sec2-parte1">
                        <div className="titlePlanes" ref={animateChacoRefs[1]}>
                            <h1>PLANES DE PREPAGA</h1>
                        </div>
                        <div className="planesChaco">
                            <div className="contenedorPlan" ref={animateChacoRefs[2]}>
                                <div className="plan" >
                                    <h2>
                                        <img src={flechita} alt="flechita azul" />
                                        <azulp>F100</azulp> de <azul>4</azul> a <azul>21</azul>{" "}
                                        años.
                                    </h2>
                                </div>
                            </div>
                            <div className="contenedorPlan" ref={animateChacoRefs[3]}>
                                <div className="plan" >
                                    <h2>
                                        <img src={flechita} alt="flechita azul" />
                                        <azulp>F200</azulp> de <azul>22</azul> a <azul>59</azul>{" "}
                                        años.
                                    </h2>
                                </div>
                            </div>
                            <div className="contenedorPlan" ref={animateChacoRefs[4]}>
                                <div className="plan" >
                                    <h2>
                                        <img src={flechita} alt="flechita azul" />
                                        <azulp>F300</azulp> de <azul>22</azul> a <azul>59</azul>{" "}
                                        años y grupo familiar.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-parte2" ref={animateChacoRefs[5]}>
                        <h2>PMO</h2>
                        <h2>
                            <azul>P</azul>lan <azul>M</azul>edico <azul>O</azul>bligatorio
                        </h2>
                        <img src={tilde} alt="tilde verde" ref={animateChacoRefs[6]} />
                    </div>
                    <div className="sec2-parte3" ref={animateChacoRefs[7]}>
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
                <BtnInfo to="/Contactanos" delay={200}/>
            </div>
        </div>
    );
};

export default Femechaco;
