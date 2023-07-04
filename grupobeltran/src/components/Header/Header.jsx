import styleHeader from "./styleHeader.scss";
import Nav from "./Nav.jsx";
import Notesnav from "./Notesnav.jsx";
import Menuburger from "./Menuburger.jsx";

const Header = () => {
    return (
        <header>
            <Nav />
            <Notesnav />
            <Menuburger />
        </header>
    );
};

export default Header;
