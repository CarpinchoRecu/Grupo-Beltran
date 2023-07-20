import styleFooter from "./styleFooter.scss"
import logofb from "./assetsFooter/logofb.jpeg"
import logoig from "./assetsFooter/logoig.jpeg"
import logotw from "./assetsFooter/logotw.jpeg"
import logowp from "./assetsFooter/logowp.jpeg"
import logo2 from "./assetsFooter/logo2.jpeg"
import { useState } from "react"

const Counter = () => {

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
                <a onClick={click}><img src={logo2} alt="logo" /></a>
                
                <div className="titlesFooter">
                    <h2>ASESSALUD S.R.L.</h2>
                    <h3>TODOS LOS DERECHOS RESERVADOS</h3>
                </div>
            </div>
            <div className="logos">
                <a href="https://www.facebook.com/profile.php?id=100094913220507" target="_blank" rel="noopener noreferrer">
                    <img src={logofb} alt="Facebook" />
                </a>
                <a href="https://twitter.com/AsesSaludSRL" target="_blank" rel="noopener noreferrer">
                    <img src={logotw} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/asessaludsrl/" target="_blank" rel="noopener noreferrer">
                    <img src={logoig} alt="Instagram" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={logowp} alt="Whatsapp" />
                </a>
            </div>
        </footer>
    )
}

export default Counter