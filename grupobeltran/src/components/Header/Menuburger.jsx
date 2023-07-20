import React, { useRef } from "react";
import { Link } from "react-router-dom";

const MenuBurger = () => {
  const menuBtnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const offcanvasRef = useRef(null);
  const menuSpanRef = useRef(null);

  const handleClickMenu = () => {
    menuBtnRef.current.classList.toggle("close");
    offcanvasRef.current.classList.toggle("show");
    menuSpanRef.current.classList.toggle("hide");
  };

  const handleClickClose = () => {
    menuBtnRef.current.classList.toggle("close");
    offcanvasRef.current.classList.toggle("show");
    menuSpanRef.current.classList.toggle("hide");
  };

  return (
    <div id="menu-burger">
      <div className="menu-btn" ref={menuBtnRef} onClick={handleClickMenu}>
        <span ref={menuSpanRef}></span>
      </div>
      <div className="offcanvas" ref={offcanvasRef}>
        <div className="close-btn" onClick={handleClickClose}></div>
        <Link className="links" to="/Inicio">
          Inicio
        </Link>
        <Link className="links" to="/Coberturas">
          Coberturas
        </Link>
        <Link className="links" to="/Nosotros">
          Acerca de Nosotros
        </Link>
        <Link className="links" to="/Contactanos">
          Contáctanos
        </Link>
        <Link className="links" to="/Trabajo">
          Trabaja con Nosotros
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default MenuBurger;
