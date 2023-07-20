import React, { useEffect } from "react";
import styleContactanos from "./styleContacto.scss";
import logo from "../Header/assetsHeader/logo.jpeg";

const Contactanos = () => {
    useEffect(() => {
        const inputProv = document.getElementById("provincia");
        let provincias = [
            "Caba",
            "Buenos Aires",
            "Catamarca",
            "Chaco",
            "Chubut",
            "Córdoba",
            "Corrientes",
            "Entre Ríos",
            "Formosa",
            "Jujuy",
            "La Pampa",
            "La Rioja",
            "Mendoza",
            "Misiones",
            "Neuquén",
            "Río Negro",
            "Salta",
            "San Juan",
            "San Luis",
            "Santa Cruz",
            "Santa Fe",
            "Santiago del Estero",
            "Tierra del Fuego",
            "Tucumán",
        ];

        const mostrarOptions = () => {
            const mensaje = document.getElementById("mensaje");
            const txtEscrito = inputProv.value.toLowerCase();

            if (txtEscrito === "") {
                mensaje.style.display = "none";
                inputProv.style.borderBottomLeftRadius = "20px";
                inputProv.style.borderBottomRightRadius = "20px";
                return;
            }

            inputProv.style.transition = "border-radius 0.3s ease";
            inputProv.style.borderBottomLeftRadius = "0";
            inputProv.style.borderBottomRightRadius = "0";
            mensaje.innerHTML = "";

            const optionExists = provincias.some(function (option) {
                return option.toLowerCase().startsWith(txtEscrito);
            });

            if (!optionExists) {
                inputProv.value = ""; // Vaciar el campo de entrada si no hay coincidencias
                mensaje.style.display = "none";
                inputProv.style.borderBottomLeftRadius = "20px";
                inputProv.style.borderBottomRightRadius = "20px";
                return;
            }

            provincias.forEach(function (option) {
                const minOption = option.toLowerCase();

                if (minOption.indexOf(txtEscrito) !== -1) {
                    const sugerencia = document.createElement("p");
                    sugerencia.textContent = option;
                    sugerencia.addEventListener("click", function () {
                        inputProv.value = option;
                        mensaje.style.display = "none";
                        inputProv.style.borderBottomLeftRadius = "20px";
                        inputProv.style.borderBottomRightRadius = "20px";
                    });

                    mensaje.appendChild(sugerencia);
                }
            });

            mensaje.style.display = "block";
        };

        inputProv.addEventListener("input", mostrarOptions);

        mostrarOptions();

        return () => {
            // Limpiar los event listeners cuando el componente se desmonte
            inputProv.removeEventListener("input", mostrarOptions);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new URLSearchParams(new FormData(event.target));

        try {
            const response = await fetch("http://localhost:3000/contactanos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            });

            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <form id="contactForm" onSubmit={handleSubmit}>
                <img src={logo} alt="Logo" />
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" required />
                </div>
                <div>
                    <label htmlFor="edad">Edad</label>
                    <input type="number" id="edad" name="edad" required />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div id="prov">
                    <label>Provincia</label>
                    <input
                        type="text"
                        id="provincia"
                        name="provincia"
                        autoComplete="off"
                    />
                    <div>
                        <div id="mensaje"></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="localidad">Localidad</label>
                    <input type="text" id="localidad" name="localidad" required />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contactanos;
