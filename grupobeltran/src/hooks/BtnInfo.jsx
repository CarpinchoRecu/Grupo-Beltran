import React from "react";
import { Link } from "react-router-dom";

const BtnInfo = ({ to, delay }) => {
    const handleLink = (e) => {
        e.preventDefault();

        setTimeout(() => {
            window.location.href = to;
        }, delay);
    };

    return (
        <div className="btnInfo">
            <h2>
                Para más información, ver la cartilla completa y prestaciones
                disponibles.
            </h2>
            <Link className="link" onClick={handleLink}>
                Click Aquí
            </Link>
        </div>

    );
};

export default BtnInfo;

