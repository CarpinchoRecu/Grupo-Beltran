import React, { useEffect, useState } from "react";
import styleTrabajo from "./styleTrabajo.scss";
import logo from "../Footer/assetsFooter/logo2.jpeg";

const Trabajo = () => {
    useEffect(() => {
        const form = document.getElementById("contactForm");
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

    const [cvFile, setCvFile] = useState(null);

    const handleCvChange = (event) => {
        const file = event.target.files[0];
        setCvFile(file);
    };

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
        <div className="form-containerTrabajo">
            <form id="contactFormTrabajo" onSubmit={handleSubmit}>
                <div className="imgTrabajo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="mitad1">
                    <div className="divMitad1">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="divMitad1">
                        <label htmlFor="edad">Edad</label>
                        <input type="number" id="edad" name="edad" required />
                    </div>
                    <div className="divMitad1">
                        <label htmlFor="telefono">Teléfono de contacto</label>
                        <input type="tel" id="telefono" name="telefono" required />
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
                    <div className="divMitad1">
                        <label htmlFor="domicilio">Domicilio</label>
                        <input type="text" id="domicilio" name="domicilio" required />
                    </div>
                </div>
                <div className="mitad2">
                    <div className="divMitad2">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id="apellido" name="apellido" required />
                    </div>
                    <div className="divMitad2">
                        <label htmlFor="dni">DNI</label>
                        <input type="number" id="dni" name="dni" required />
                    </div>
                    <div className="divMitad2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="divMitad2">
                        <label htmlFor="localidad">Localidad</label>
                        <input type="text" id="localidad" name="localidad" required />
                    </div>
                </div>

                <div className="boton">

                    <div id="CV">
                        <label htmlFor="cv">Adjuntar CV (PDF o PNG)</label>
                        <input
                            type="file"
                            id="cv"
                            name="cv"
                            accept=".pdf, .png"
                            onChange={handleCvChange}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>

                </div>

            </form>
        </div>
    );
};

export default Trabajo;
