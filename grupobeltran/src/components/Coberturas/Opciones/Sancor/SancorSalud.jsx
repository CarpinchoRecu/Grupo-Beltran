import styleSancor from "./styleSancor.scss";
import sancor from "../../assetsCoberturas/logoSancor.png";
import BtnInfo from "../../../../hooks/BtnInfo.jsx";
import ambulancia from "./assetsSancor/ambulancia.png";
import celular from "./assetsSancor/celular.png";
import diente from "./assetsSancor/diente.png";
import family from "./assetsSancor/family.png";
import manosSalud from "./assetsSancor/manosSalud.png";
import wifi from "./assetsSancor/wifi.png";
import SliderSancor from "./SliderSancor.jsx";
import flechaVioleta from "./assetsSancor/flechaVioleta.png";

const SancorSalud = () => {
    return (
        <div className="op">
            <div className="sancor">
                <div className="sectionSancor1">
                    <img src={sancor} alt="logo Sancor" />
                    <p>
                        Cobertura medica a nivel nacional. <br /> Cuentan con un plan para
                        vos y toda tu familia.
                    </p>
                </div>
                <div className="sectionSancor2">
                    <div className="contenedorBeneficios">
                        <div className="beneficios">
                            <img src={family} alt="icon familia" />
                            <h2>Cobertura medica Integral</h2>
                            <p>
                                Todos los planes cuentan con cobertura en consultas y practicas
                                medicas, internacion al 100% y emergencias medicas a domicilio.
                            </p>
                        </div>
                        <div className="beneficios">
                            <img src={manosSalud} alt="icon de manos" />
                            <h2>la Red de Prestadores mas Grande del Pais</h2>
                            <p>Medicos, sanatorios y centros de diagnostico.</p>
                        </div>
                        <div className="beneficios">
                            <img src={celular} alt="icon mobile" />
                            <h2>Consulta medica por Videollamada</h2>
                            <p>Con cualquier especialista, en cualquier momento.</p>
                        </div>
                        <div className="beneficios">
                            <img src={diente} alt="icon diente" />
                            <h2>Odontolodia General al 100%</h2>
                            <p>Consultas y tratamientos.</p>
                        </div>
                        <div className="beneficios">
                            <img src={ambulancia} alt="icon ambulancia" />
                            <h2>Emergencias Medicas las 24hs</h2>
                            <p>
                                Servicio de atencion medica en domicilio. urgencias y
                                emergencias medicas las 24hs
                            </p>
                        </div>
                        <div className="beneficios">
                            <img src={wifi} alt="icon wifi" />
                            <h2>Gestiones Online</h2>
                            <p>Autorizaciones, consulta tu factura, imprimi tu credencial.</p>
                        </div>
                    </div>
                </div>
                <SliderSancor />
                <div className="sectionSancor3">
                    <div className="planes">
                        <h2>PLAN F700 Y F800</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Acceso a los
                                servicios solo presentando la credencial. <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Consultas
                                médicas sin tope ni límites. Visitas médicas a domicilio. Con
                                coseguros.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Servicio de
                                Emergencia y Urgencia.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Estudios y
                                prácticas de diagnóstico y tratamiento sin tope y sin límite.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura de
                                tratamientos oncológicos y trasplantes.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Rehabilitación:
                                Fisiatría y Kinesiología y Fonoaudiología.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Salud mental.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Nutrición.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Internación
                                clínica y quirúrgica, sin costos ni topes de días, en clínicas y
                                sanatorios de la red de prestadores.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Maternidad:
                                Cobertura para la mamá y el recién nacido. Plan Materno Infantil.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Plan F700:
                                Cobertura en medicamentos con vademécum y vacunas. Además
                                cobertura de medicamentos crónicos y especiales.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" />
                                Plan F800: Cobertura en medicamentos 40% sin vademécum. Además
                                cobertura de medicamentos crónicos y especiales.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Odontología.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Óptica.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Se comercializa
                                en zona AMBA, Mendoza, San Juan, San Luis, Córdoba, Rosario,
                                Santa Fe y Salta.
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 1000</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Plan muy
                                economico.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Emergencias a
                                domicilio las 24hs.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Ortodoncia al
                                100% de 8 a 16 años.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> 30 sesiones de
                                psicología por año, con copago.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Pastillas
                                anticonceptivas, DIU y anillo vaginal al 100%.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Consulta médica
                                con cualquier especialista sin limite.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Óptica: 1 par
                                de cristales por año.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura en
                                todo el país.
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 1500</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Mayor red de
                                prestadores.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Habitación
                                individual en caso de internación.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cirugía
                                refractiva.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura en
                                todo el país y paises limitrofes.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Médico a
                                domicilio.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Sesiones de
                                kinesiología sin límite.
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 3000</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cartilla con
                                los mejores sanatorios del país.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> 50% de
                                descuento en farmacias.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Prótesis
                                odontológicas al 100%.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Reintegros.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura
                                nacional e internacional en todo el mundo.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Ortodoncia al
                                100% hasta 30 años.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> 40 sesiones de
                                psicología por año.
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 3500</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Acceso a los
                                servicios solo presentando la credencial. <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Consultas
                                médicas sin cargos ni límites y visitas médicas a domicilio.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Servicio de
                                Emergencia y Urgencia.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Reintegros en
                                consultas médicas, estudios y prácticas de diagnóstico,
                                tratamientos y rehabilitación y honorarios quirúrgicos.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Estudios y
                                prácticas de diagnóstico y tratamiento sin cargo y sin límite.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura de
                                tratamientos oncológicos y trasplantes.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Rehabilitación:
                                Fisiatría y Kinesiología y Fonoaudiología.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Salud mental.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Nutrición.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Internación
                                clínica y quirúrgica, sin costos ni topes de días, en clínicas y
                                sanatorios de la red de prestadores.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Maternidad:
                                Cobertura para la mamá y el recién nacido. Programa Materno
                                Infantil.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura en
                                medicamentos sin vademécum y vacunas. Además cobertura de
                                medicamentos crónicos y especiales.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Odontología.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Óptica.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Asistencia al
                                viajero Internacional
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Reconocimiento
                                especial en procedimiento de recolección y procesamiento de
                                células madres.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura sin
                                cargo durante 1 año para el grupo familiar primario ante el
                                fallecimiento del Asociado Titular.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura ante
                                situaciones especiales a través del Subsidio Único por
                                Fallecimiento
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 4000</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Acceso a los
                                servicios solo presentando la credencial. <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Consultas
                                médicas sin cargos ni límites y visitas médicas a domicilio.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Servicio de
                                Emergencia y Urgencia.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Reintegros en
                                consultas médicas, estudios y prácticas de diagnóstico,
                                tratamientos y rehabilitación y honorarios quirúrgicos.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Estudios y
                                prácticas de diagnóstico y tratamiento sin cargo y sin límite.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura de
                                tratamientos oncológicos y trasplantes.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Rehabilitación:
                                Fisiatría y Kinesiología y Fonoaudiología.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Salud mental.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Nutrición.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Internación
                                clínica y quirúrgica, sin costos ni topes de días, en clínicas y
                                sanatorios de la red de prestadores.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Maternidad:
                                Cobertura para la mamá y el recién nacido. Programa Materno
                                Infantil.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura en
                                medicamentos sin vademécum y vacunas. Además cobertura de
                                medicamentos crónicos y especiales.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Odontología.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Óptica.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Asistencia al
                                viajero Internacional Reconocimiento especial en procedimiento
                                de recolección y procesamiento de células madres.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura sin
                                cargo durante 1 año para el grupo familiar primario ante el
                                fallecimiento del Asociado Titular.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura ante
                                situaciones especiales a través del Subsidio Único por
                                Fallecimiento.
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 4500</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Todas las
                                prestaciones de los planes anteriores.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Mayor
                                reintegros odontológicos al 100%.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Mayor
                                reintegros en prótesis e implantes odontológicos, ortodoncia,
                                óptica, terapia intensiva y consultas médicas.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cirugía
                                estética y tratamiento estético cada año.
                            </p>
                        </div>
                    </div>
                    <div className="planes">
                        <h2>PLAN 5000 EXCLUSIVE Y 6000 EXCLUSIVE</h2>
                        <div className="contenedorBeneficios">
                            <p>
                                <img src={flechaVioleta} alt="flecha Violeta" /> Todas las
                                prestaciones de los planes anteriores.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cirugía
                                Refractiva.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cirugía
                                Estética.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Cobertura en
                                terapias alternativas.
                                <br />
                                <img src={flechaVioleta} alt="flecha Violeta" /> Coberturas
                                especiales (checkeo preventivo, tratamientos para dejar de
                                fumar, implantes capilares).
                            </p>
                            <h3>
                                •Supra Salud Alta Complejidad: respaldo económico ante
                                intervenciones Quirúrgicas de Alta Complejidad, con reintegros
                                adicionales a los reconocimientos del Plan de Salud. <br />
                                •Supra Salud Prótesis: Refuerzo a la cobertura del Plan de
                                Salud, ampliando el reconocimiento de Prótesis Nacionales e
                                Importadas.
                                <br />
                                •Supra Salud Odontología: Cobertura en Prótesis y/o implantes
                                odontológicos, a través de reintegros adicionales al
                                reconocimiento del Plan de Salud.
                            </h3>
                        </div>
                    </div>
                </div>
                <BtnInfo to="/Contactanos" delay={200} />
            </div>
        </div>
    );
};

export default SancorSalud;
