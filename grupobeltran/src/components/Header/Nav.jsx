import logo1 from "./assetsHeader/logo1.jpeg";
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
            <div className="logo">
                <a onClick={click}>
                    <img src={logo1} alt="Logo" />
                </a>
            </div>
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
        </nav>
    );
};

export default Nav;
