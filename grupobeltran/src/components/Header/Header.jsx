import styleHeader from "./styleHeader.scss";
import Nav from "./Nav.jsx";
import Notesnav from "./Notesnav.jsx";
import Menuburger from "./Menuburger.jsx";

const Header = () => {

    const notes = [
        { texto: "Cobertura personalizada" },
        { texto: "Para vos y tu familia" },
        { texto: "inverti en vos" }]

    return (
        <header>
            <Nav />
            <Menuburger />
        </header>
    );
};

export default Header;
