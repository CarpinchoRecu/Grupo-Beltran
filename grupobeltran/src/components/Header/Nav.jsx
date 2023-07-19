import logo from "./assetsHeader/logo.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [LogoClick, setLogoClick] = useState(false);

    const click = () => {
        setLogoClick(true);
        setInterval(() => {
            window.location.href = "../index.html";
        }, 500);
    };

    return (
        <nav>
            <div className="buttons">
                <div>
                    <Link className="links" to="/Inicio">
                        Inicio
                    </Link>
                </div>
                <div>
                    <Link className="links" to="/Coberturas">
                        Coberturas
                    </Link>
                </div>
                <div>
                    <Link className="links" to="/Nosotros">
                        Acerca de Nosotros
                    </Link>
                </div>
                <div>
                    <Link className="links" to="/Contactanos">
                        Contáctanos
                    </Link>
                </div>
                <div>
                    <Link className="links" to="/Trabajo">
                        Trabaja con Nosotros
                    </Link>
                </div>
            </div>
            <div className="title-logo">
                <a onClick={click}>
                    <img src={logo} alt="Logo" />
                </a>
                <h2>AsesSalud S.R.L.</h2>
            </div>
        </nav>
    );
};

export default Nav;
