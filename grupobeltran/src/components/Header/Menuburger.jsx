import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        offcanvasRef.current &&
        !offcanvasRef.current.contains(event.target) &&
        !menuBtnRef.current.contains(event.target)
      ) {
        handleClickClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div id="menu-burger">
      <div className="menu-btn" ref={menuBtnRef} onClick={handleClickMenu}>
        <span ref={menuSpanRef}></span>
      </div>
      <div className="offcanvas" ref={offcanvasRef}>
        <div className="close-btn" onClick={handleClickClose}></div>
        <Link className="links" to="/Inicio" onClick={handleClickClose}>
          Inicio
        </Link>
        <Link className="links" to="/Coberturas" onClick={handleClickClose}>
          Coberturas
        </Link>
        <Link className="links" to="/Nosotros" onClick={handleClickClose}>
          Acerca de Nosotros
        </Link>
        <Link className="links" to="/Contactanos" onClick={handleClickClose}>
          Contáctanos
        </Link>
        <Link className="links" to="/Trabajo" onClick={handleClickClose}>
          Trabaja con Nosotros
        </Link>
      </div>
    </div>
  );
};

export default MenuBurger;
