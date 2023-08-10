import styleSancor from "./styleSancor.scss";
import sancor from "../../assetsCoberturas/logoSancor.png";

const SancorSalud = () => {
    return (
        <div className="op">
            <div className="sectionSancor1">
                <img src={sancor} alt="logo Sancor" />
                <p>Cobertura medica a nivel nacional. Cuentan con un plan para vos y toda tu familia.</p>
            </div>
            <div className="sectionSancor2">
                <div className="beneficios">
                    <img src="" alt="" />
                    <h2>Cobertura medica Integral</h2>
                    <p>Todos los planes cuentan con cobertura en consultas y practicas medicas, internacion al 100% y emergencias medicas a domicilio.</p>
                </div>
                <div className="beneficios">
                    <img src="" alt="" />
                    <h2>la Red de Prestadores mas Grande del Pais</h2>
                    <p>Medicos, sanatorios y centros de diagnostico.</p>
                </div>
                <div className="beneficios">
                    <img src="" alt="" />
                    <h2>Consulta medica por Videollamada</h2>
                    <p>Con cualquier especialista, en cualquier momento.</p>
                </div>
                <div className="beneficios">
                    <img src="" alt="" />
                    <h2>Odontolodia General al 100%</h2>
                    <p>Consultas y tratamientos.</p>
                </div>
                <div className="beneficios">
                    <img src="" alt="" />
                    <h2>Emergencias Medicas las 24hs</h2>
                    <p>Servicio de atencion medica en domicilio. urgencias y emergencias medicas las 24hs</p>
                </div>
                <div className="beneficios">
                    <img src="" alt="" />
                    <h2>Gestiones Online</h2>
                    <p>Autorizaciones, consulta tu factura, imprimi tu credencial.</p>
                </div>
            </div>
            <div className="sectionSancor3">
            </div>
            <div className="sectionSancor4">
            </div>
            <div className="sectionSancor5">
            </div>
        </div>
    )
}

export default SancorSalud