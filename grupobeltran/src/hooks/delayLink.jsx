import React from "react";
import { Link } from "react-router-dom";

const DelayLink = ({ to, delay, className, children }) => {
    const handleLinkClick = (e) => {
        e.preventDefault();

        setTimeout(() => {
            window.location.href = to;
        }, delay);
    };

    return (
        <Link className={`${className}`} onClick={handleLinkClick}>
            {children}
        </Link>
    );
};

export default DelayLink;

