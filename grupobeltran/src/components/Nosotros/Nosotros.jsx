import logo from "../Header/assetsHeader/logo1.png";
import styleNosotros from "./styleNosotros.scss";

const Nosotros = () => {
    return (
        <div className="op">
            <div className="nosotros">
                <img src={logo} alt="logo de AsesSalud" />
                <p>Somos AsesSalud S.R.L una empresa que hace 16 años está en este rubro.
                    Junto con un gran equipo de profesionales comercializamos y brindamos asesorÍa para que puedas elegir el mejor plan de salud tanto para vos como para tu grupo familiar.
                    Trabajamos con excelentes Obras Sociales, Prepagas y consultoras de salud a Nivel Nacional.
                    Nos interesa que quienes adquieran nuestros servicios, queden conformes con el mismo, por eso una
                    de nuestras políticas de trabajo es la calidad humana de nuestros empleados y un buen ambiente laboral.</p>
                <h2>Nuestra sede central se encuentra en Rivadavia n°1367, San Nicolás,CABA.
                    Nuestra linea fija de esta misma es: 0112034-5484.</h2>
            </div>
        </div>
    )
}

export default Nosotros