import { useSpring, animated } from "react-spring";
import logo from "./assetsHeader/logo.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [LogoClick, setLogoClick] = useState(false);

    const click = () => {
        setLogoClick(true);
        setInterval(() => {
            window.location.href = "/Inicio";
        }, 500);
    };

    const animationLogo = useSpring({
        from: { transform: "scale(1)" },
        to: { transform: LogoClick ? "scale(0.8)" : "scale(1)" },
        config: { tension: 200, friction: 2 },
    });
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
                    <animated.img style={animationLogo} src={logo} alt="Logo" />
                </a>
                <h2>AsesSalud SRL</h2>
            </div>
        </nav>
    );
};

export default Nav;
