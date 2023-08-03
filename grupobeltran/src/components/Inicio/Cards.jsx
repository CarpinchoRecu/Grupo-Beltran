import { Link } from "react-router-dom";
import styleCards from "./styleCards.scss";

const Cards = () => {
    return (
        <>
            <div className="conteinerCards">
                <div className="card">
                    <Link className="linkcard" to="/Coberturas">
                        <h2>PREPAGAS</h2>
                    </Link>
                </div>
                <div className="card">
                    <Link className="linkcard" to="/Coberturas">
                        <h2>MONOTRIBUTO SOCIAL</h2>
                        <h2>MONOTRIBUTO DE CATEGORIA</h2>
                    </Link>
                </div>
                <div className="card">
                    <Link className="linkcard" to="/Coberturas">
                        <h2>RELACION DE DEPENDENCIA</h2>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cards;
