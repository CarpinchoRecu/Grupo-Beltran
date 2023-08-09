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

  const handleOutsideClick = (event) => {
    if (
      offcanvasRef.current &&
      !offcanvasRef.current.contains(event.target) &&
      !menuBtnRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
      enableBodyScroll(); // Habilitar el scroll del cuerpo cuando se cierra el offcanvas
    }
  };

  const handleScroll = () => {
    if (menuOpen) {
      setMenuOpen(false);
      enableBodyScroll(); // Habilitar el scroll del cuerpo cuando se cierra el offcanvas
    }
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("scroll", handleScroll);
      menuSpanRef.current.style.display = "none";
      disableBodyScroll(); // Deshabilitar el scroll del cuerpo cuando se abre el offcanvas
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
      menuSpanRef.current.style.display = "block";
      enableBodyScroll(); // Habilitar el scroll del cuerpo cuando se cierra el offcanvas
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
      enableBodyScroll(); // Asegurarse de habilitar el scroll al desmontar el componente
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
