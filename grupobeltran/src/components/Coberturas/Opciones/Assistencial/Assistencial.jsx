import styleAssistencial from "./styleAssistencial.scss";
import assistencial from "../../assetsCoberturas/logoAssistencial.png";
import flechita from "../../assetsCoberturas/flechaAzul.png";
import tilde from "../../assetsCoberturas/tickVerde.png";
import tildeAzul from "../../assetsCoberturas/tickAzul.png";
import Sumador from "../../../../hooks/Sumador.jsx";
import BtnInfo from "../../../../hooks/BtnInfo.jsx";

const Assistencial = () => {
    return (
        <div className="op">
            <div className="assistencial">
                <div className="sectionAssistencial1">
                    <img src={assistencial} alt="logo Assistencial" />
                    <h2>
                        Sumáte a una de las mejores Coberturas de <azul>GBA</azul>.
                    </h2>
                </div>
                <div className="sectionAssistencial2">
                    <div className="sumador">
                        <Sumador startNumber={0} finalNumber={150} tiempo={20} />
                        <h2>Centros Medicos</h2>
                    </div>
                    <div className="sumador">
                        <Sumador startNumber={130} finalNumber={600} tiempo={6} />
                        <h2>Prestadores</h2>
                    </div>
                    <div className="sumador">
                        <Sumador startNumber={629200} finalNumber={630000} tiempo={2} />
                        <h2>Afiliados</h2>
                    </div>
                </div>
                <div className="sectionAssistencial3">
                    <div className="cardAssis">
                        <h1>CUIDADOS PALIATIVOS</h1>
                        <h2>
                            Es la asistencia activa y total de los pacientes por un equipo
                            multidisciplinario, cuando el paciente tiene una expectativa de
                            vida que no supera los 6 meses.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>HEMODIÁLISIS Y DIALISIS PERITONEAL CONTINUA AMBULATORIA</h1>
                        <h2>La cobertura es del 100%</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>PROGRAMA DE PREVENCIÓN DE CÁNCER FEMENINO</h1>
                        <h2>En especial, de cáncer de mama y cuello uterino</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>SALUD SEXUAL Y REPRODUCTIVA</h1>
                        <h2>
                            La colocación y extracción del implante subdérmico, el DIU y el
                            Sistema Intrauterino de Liberación de Levonorgestrel como métodos
                            anticonceptivos.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>PLAN MATERNO INFANTIL</h1>
                        <h2>
                            Está cubierto todo el embarazo y hasta el primer mes luego del
                            nacimiento.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>ODONTOLOGÍA</h1>
                        <h2>
                            Incluye la prevención, fluoración y campañas de educación para la
                            salud bucal.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>PRÓTESIS Y ÓRTESIS</h1>
                        <h2>
                            La cobertura es del 100% en prótesis e implantes de colocación
                            interna permanente.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>VIH/SIDA</h1>
                        <h2>
                            Están incluidos los tratamientos médicos, psicológicos y
                            medicamentos para personas que viven con VIH/SIDA.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>ADICCIONES</h1>
                        <h2>
                            Tratamientos médicos, psicológicos y medicamentos para personas
                            con problemas de drogadicción.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>CONSULTAS MÉDICAS</h1>
                        <h2>Cobertura 100%</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>OTOAMPLÍFONOS</h1>
                        <h2>Cobertura 100%</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>LABORATORIO</h1>
                        <h2>Cobertura 100%</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>ENFERMEDADES POCO FRECUENTES</h1>
                        <h2>
                            Cobertura asistencial, incluyendo como mínimo las prestaciones que
                            determine la autoridad de aplicación.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>SALUD MENTAL</h1>
                        <h2>
                            Incluye: entrevista psiquiátrica, psicológica, psicopedagogía,
                            psicoterapia individual, psicoterapia grupal, psicoterapia de
                            familia y de pareja y psicodiagnóstico.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>REHABILITACIÓN</h1>
                        <h2>
                            El programa incluye todas las prácticas kinesiológicas y
                            fonoaudiológicas.
                        </h2>
                    </div>
                    <div className="cardAssis">
                        <h1>INTERNACIÓN</h1>
                        <h2>Se asegura el 100% de cobertura en la internación.</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>MEDICAMENTOS</h1>
                        <h2>Descuentos en medicamentos del 40%, 70% y 100%.</h2>
                    </div>
                    <div className="cardAssis">
                        <h1>ANTEOJOS</h1>
                        <h2>La cobertura es del 100%</h2>
                    </div>
                </div>
                <BtnInfo to="/Contactanos" delay={200} />
            </div>
        </div>
    );
};

export default Assistencial;
