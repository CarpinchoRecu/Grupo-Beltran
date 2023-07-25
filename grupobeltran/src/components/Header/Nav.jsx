import logo1 from "./assetsHeader/logo1.jpeg";
import Menuburger from "./Menuburger.jsx";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <div className="logo">
                <img src={logo1} alt="Logo" />
            </div>
            <div className="buttons">
                <Link className="links" to="/Inicio">
                    Inicio
                </Link>
                <Link className="links" to="/Coberturas">
                    Coberturas
                </Link>
                <Link className="links" to="/Nosotros">
                    Acerca de Nosotros
                </Link>
                <Link className="links" to="/Contactanos">
                    Contáctanos
                </Link>
                <Link className="links" to="/Trabajo">
                    Trabaja con Nosotros
                </Link>
            </div>
            <Menuburger />
        </nav>
    );
};

export default Nav;
