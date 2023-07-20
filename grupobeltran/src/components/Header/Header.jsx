import styleHeader from "./styleHeader.scss";
import Nav from "./Nav.jsx";
import Menuburger from "./Menuburger.jsx";

const Header = () => {
    return (
        <header>
            <Nav />
            <Menuburger />
        </header>
    );
};

export default Header;
