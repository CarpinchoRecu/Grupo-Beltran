import { Link } from "react-router-dom";
import styleCards from "./styleCards.scss";
import DelayLink from "../../hooks/DelayLink.jsx";

const Cards = () => {
    return (
        <>
            <div className="conteinerCards">
                <div className="card">
                    <DelayLink delay={365} className="linkcard" to="/Coberturas/SancorSalud">
                        <h2>PREPAGAS</h2>
                    </DelayLink>
                </div>
                <div className="card">
                    <DelayLink delay={365} className="linkcard" to="/Monotributo">
                        <h2>MONOTRIBUTO SOCIAL</h2>
                        <h2>MONOTRIBUTO DE CATEGORIA</h2>
                    </DelayLink>
                </div>
                <div className="card">
                    <DelayLink delay={365} className="linkcard" to="/Coberturas">
                        <h2>RELACION DE DEPENDENCIA</h2>
                    </DelayLink>
                </div>
            </div>
        </>
    );
};

export default Cards;
