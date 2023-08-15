import React, { useEffect, useState, useRef } from "react";
import styleOspida from "./styleOspida.scss";
import ospida from "../../assetsCoberturas/logoOspida.png";
import flechita from "../../assetsCoberturas/flechaVerde.png";
import BtnInfo from "../../../../hooks/BtnInfo.jsx";

const Ospida = () => {
    const animateRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("activado");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        animateRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            animateRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [animateRefs]);

    return (
        <div className="op">
            <div className="ospida">
                <div className="sectionOspida1" ref={animateRefs[0]}>
                    <img src={ospida} alt="logo Sancor" />
                    <p>
                        Obra Social del Personal de Imprentas, diarios y afines a{" "}
                        <negrita>Nivel Nacional</negrita>.
                    </p>
                </div>
                <div className="sectionOspida2">
                    <div className="sec2-parte1" ref={animateRefs[1]}>
                        <h1>PROGRAMAS DE PREVENCIÓN PARA EL AFILIADO (PMO)</h1>
                    </div>
                    <div className="sec2-parte2" ref={animateRefs[2]}>
                        <h2>
                            <img src={flechita} alt="flecha verde" /> Programa de prevención
                            de cáncer femenino.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" />{" "}
                            <negrita>Odontologia:</negrita>
                            <br />
                            <br />
                            •Consulta de diagnóstico y plan de tratamiento.
                            <br />
                            <br />
                            •Consultas de urgencia.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> 100% de Cobertura en
                            internacion.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" />{" "}
                            <negrita>Salud Mental:</negrita>
                            <br />
                            <br />
                            •30 consultas ambulatorias anuales.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> Colocación del implante
                            subdermico, DIU, entre otros.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> 25 sesiones por año de
                            Kineseologia y fonoudiologia.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> Entre 40% y 100% de
                            cobertura en medicación.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> 100% de cobertura en
                            medicación para pacientes internados.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> Cobertura del 100% en
                            anteojos hasta los 15 años de edad.
                            <br />
                            <br />
                            <img src={flechita} alt="flecha verde" /> 100% de cobertura en
                            prótesis internas
                        </h2>
                    </div>
                    <BtnInfo to="/Contactanos" delay={200} />
                </div>
            </div>
        </div>
    );
};

export default Ospida;
