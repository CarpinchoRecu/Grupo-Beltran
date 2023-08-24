import styleFooter from "./styleFooter.scss";
import logofb from "./assetsFooter/logofb.jpeg";
import logoig from "./assetsFooter/logoig.jpeg";
import logotw from "./assetsFooter/logotw.jpeg";
import logowp from "./assetsFooter/logowp.png";
import logoemail from "./assetsFooter/logoemail.png";
import fijo from "./assetsFooter/fijo.png";
import logo2 from "./assetsFooter/logo2.png";
import { Link } from "react-router-dom";
import DelayLink from "../../hooks/DelayLink.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="titleLogoFooter">
                <DelayLink to="/Inicio" delay={350}>
                    <img src={logo2} alt="logo" />
                </DelayLink>
                <h2>•TODOS LOS DERECHOS RESERVADOS•</h2>
                <h2>&copy; COPYRIGHT 2023</h2>
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
                <h2>•CONTACTOS•</h2>
                <h2>•Horario de Atencion de 9:00 a 17:00•</h2>
                <div className="contact">
                    <div>
                        <img src={fijo} alt="Img linea Fija" />
                        <h2>011 2034-5484</h2>
                    </div>
                    <div>
                        <a
                            href="https://api.whatsapp.com/send?phone=5491130452581&text=Hola,%20mi%20consulta%20es...
"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={logowp} alt="Whatsapp" />
                        </a>
                        <h2>+54 11 3045 2581</h2>
                    </div>
                    <div>
                        <a
                            href="mailto:consultas@asessaludsrl.com?subject=Consulta&body=Hola,%20mi%20consulta%20es...
"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
                        href="https://www.facebook.com/profile.php?id=100094507124115"
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
