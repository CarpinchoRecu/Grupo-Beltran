import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuBurger = () => {
  const menuBtnRef = useRef(null);
  const offcanvasRef = useRef(null);
  const menuSpanRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        offcanvasRef.current &&
        !offcanvasRef.current.contains(event.target) &&
        !menuBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div id="menu-burger">
      <div className={`menu-btn ${menuOpen ? "close" : ""}`} ref={menuBtnRef} onClick={handleClick}>
        <span ref={menuSpanRef}></span>
      </div>
      <div className={`offcanvas ${menuOpen ? "show" : ""}`} ref={offcanvasRef}>
        <div className="close-btn" onClick={handleClick}></div>
        <Link className="links" to="/Inicio" onClick={handleClick}>
          Inicio
        </Link>
        <Link className="links" to="/Coberturas" onClick={handleClick}>
          Coberturas
        </Link>
        <Link className="links" to="/Nosotros" onClick={handleClick}>
          Acerca de Nosotros
        </Link>
        <Link className="links" to="/Contactanos" onClick={handleClick}>
          Contáctanos
        </Link>
        <Link className="links" to="/Trabajo" onClick={handleClick}>
          Trabaja con Nosotros
        </Link>
      </div>
    </div>
  );
};

export default MenuBurger;
