import styleFooter from "./styleFooter.scss";
import logofb from "./assetsFooter/logofb.jpeg";
import logoig from "./assetsFooter/logoig.jpeg";
import logotw from "./assetsFooter/logotw.jpeg";
import logowp from "./assetsFooter/logowp.jpeg";
import logoemail from "./assetsFooter/logoemail.jpeg";
import logo2 from "./assetsFooter/logo2.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [LogoClick, setLogoClick] = useState(false);

    const click = () => {
        setLogoClick(true);
        setInterval(() => {
            window.location.href = "../index.html";
        }, 500);
    };

    return (
        <footer>
            <div className="titleLogoFooter">
                <a onClick={click}>
                    <img src={logo2} alt="logo" />
                </a>
                <h2>•TODOS LOS DERECHOS RESERVADOS•</h2>
                <h2>&copy; Copyright 2023 </h2>
            </div>
            <div className="buttonsFooter">
                <Link className="link" to="/Inicio">
                    •Inicio
                </Link>
                <Link className="link" to="/Coberturas">
                    •Coberturas
                </Link>
                <Link className="link" to="/Nosotros">
                    •Acerca de Nosotros
                </Link>
                <Link className="link" to="/Contactanos">
                    •Contáctanos
                </Link>
                <Link className="link" to="/Trabajo">
                    •Trabaja con Nosotros
                </Link>
            </div>
            <div className="logoContact">
                <h2>•CONTACTOS</h2>
                <div className="contact">
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={logowp} alt="Whatsapp" />
                    </a>
                    <h2>+54 123456789</h2>
                </div>
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={logoemail} alt="Email" />
                    </a>
                    <h2>consultas@asessaludsrl.com</h2>
                </div>
                </div>
            </div>
            <div className="logosRedes">
                <h2>•NUESTRAS REDES SOCIALES•</h2>
                <div>
                    <a
                        href="https://www.facebook.com/profile.php?id=100094913220507"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logofb} alt="Facebook" />
                    </a>
                    <a
                        href="https://twitter.com/AsesSaludSRL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logotw} alt="Twitter" />
                    </a>
                    <a
                        href="https://www.instagram.com/asessaludsrl/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logoig} alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
