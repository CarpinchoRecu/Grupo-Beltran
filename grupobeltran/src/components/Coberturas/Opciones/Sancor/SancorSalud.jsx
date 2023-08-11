import styleSancor from "./styleSancor.scss";
import sancor from "../../assetsCoberturas/logoSancor.png";
import { Link } from "react-router-dom";
import ambulancia from "./assetsSancor/ambulancia.png";
import celular from "./assetsSancor/celular.png";
import diente from "./assetsSancor/diente.png";
import family from "./assetsSancor/family.png";
import manosSalud from "./assetsSancor/manosSalud.png";
import wifi from "./assetsSancor/wifi.png";
import SliderSancor from "./SliderSancor.jsx";

const SancorSalud = () => {
    return (
        <div className="op">
            <div className="sancor">
                <div className="sectionSancor1">
                    <img src={sancor} alt="logo Sancor" />
                    <p>Cobertura medica a nivel nacional. <br /> Cuentan con un plan para vos y toda tu familia.</p>
                </div>
                <div className="sectionSancor2">
                    <div className="contenedorBeneficios">
                        <div className="beneficios">
                            <img src={family} alt="icon familia" />
                            <h2>Cobertura medica Integral</h2>
                            <p>Todos los planes cuentan con cobertura en consultas y practicas medicas, internacion al 100% y emergencias medicas a domicilio.</p>
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
                            <p>Servicio de atencion medica en domicilio. urgencias y emergencias medicas las 24hs</p>
                        </div>
                        <div className="beneficios">
                            <img src={wifi} alt="icon wifi" />
                            <h2>Gestiones Online</h2>
                            <p>Autorizaciones, consulta tu factura, imprimi tu credencial.</p>
                        </div>
                    </div>
                </div>
            <SliderSancor/>
            </div>

        </div>
    )
}

export default SancorSalud