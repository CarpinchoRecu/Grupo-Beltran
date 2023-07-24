import React, { useEffect, useState } from "react";
import styleContactanos from "./styleContacto.scss";
import logo from "../Footer/assetsFooter/logo2.jpeg";

const Contactanos = () => {
    // Datos de inputs
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        telefono: "",
        email: "",
        localidad: "",
    });
    // Datos de inputs por error
    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        telefono: "",
        email: "",
        localidad: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
        validateInput(id, value);
    };

    const validateInput = (id, value) => {
        value = value.trim();
        let errorMessage = "";

        if (value.length === 0) {
            errorMessage = "Este campo es obligatorio";
        } else {
            switch (id) {
                case "nombre":
                case "apellido":
                    if (value.length < 3) {
                        errorMessage = "Este campo debe poseer al menos 3 caracteres";
                    } else if (value.length > 12) {
                        errorMessage = "Este campo debe poseer como máximo 12 caracteres";
                    } else if (value.includes(" ")) {
                        errorMessage = "Este campo no debe poseer espacios intermedios";
                    }
                    break;
                case "edad":
                    const edadValue = parseInt(value);
                    if (isNaN(edadValue)) {
                        errorMessage = "Por favor, ingresa una edad válida";
                    } else if (edadValue < 18) {
                        errorMessage =
                            "Tiene que ser mayor de 18 para poder enviar el formulario";
                    } else if (edadValue > 56) {
                        errorMessage =
                            "Tiene que tener menos de 56 para enviar el formulario";
                    }
                    break;
                case "telefono":
                    if (value.length < 3) {
                        errorMessage = "Este campo debe poseer al menos 3 caracteres";
                    } else if (value.length > 14) {
                        errorMessage = "Este campo debe poseer como máximo 14 caracteres";
                    } else if (value.includes(" ")) {
                        errorMessage = "Este campo no debe poseer espacios intermedios";
                    }
                    break;
                case "email":
                    if (!value.includes("@")) {
                        errorMessage = "El email debe contener el símbolo @";
                    } else if (value.includes(" ")) {
                        errorMessage = "Este campo no debe poseer espacios intermedios";
                    }
                    break;
                case "localidad":
                    if (value.length < 2) {
                        errorMessage = "Este campo debe poseer al menos 2 caracteres";
                    }
                    break;
                default:
                    break;
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: errorMessage,
        }));

        return value;
    };

    useEffect(() => {
        // Formulario
        const form = document.getElementById("contactForm");
        // Input de las Provincias
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

        // Mostrar provincias en input provincias
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

    // Mandar por fetch los datos despues de validarlos por parte del cliente
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validar los datos antes de enviar
        const values = Object.entries(formData).map(([id, value]) => {
            return validateInput(id, value);
        });

        // Verificar si hay algún mensaje de error
        const hasErrors = Object.values(errors).some(
            (errorMessage) => errorMessage !== ""
        );

        if (hasErrors) {
            // Mostrar mensaje al usuario sobre la validación pendiente
            alert(
                "Por favor, revisa los datos ingresados antes de enviar el formulario."
            );
            return;
        }

        // Si no hay errores, proceder con el envío de datos
        const formDataToSend = new URLSearchParams(new FormData(event.target));

        try {
            const response = await fetch("http://localhost:3000/contactanos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formDataToSend,
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
                <div className="Img">

                <img src={logo} alt="Logo" />
                </div>
                <div className="Mitad1">
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        {errors.nombre && (
                            <div className="errorMessageDiv">{errors.nombre}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                        {errors.apellido && (
                            <div className="errorMessageDiv">{errors.apellido}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="edad">Edad</label>
                        <input
                            type="number"
                            id="edad"
                            name="edad"
                            value={formData.edad}
                            onChange={handleChange}
                            required
                        />
                        {errors.edad && <div className="errorMessageDiv">{errors.edad}</div>}
                    </div>
                    <div>
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                        {errors.telefono && (
                            <div className="errorMessageDiv">{errors.telefono}</div>
                        )}
                    </div>
                </div>
                <div className="Mitad2">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <div className="erroMessageDiv">{errors.email}</div>}
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
                        <input
                            type="text"
                            id="localidad"
                            name="localidad"
                            value={formData.localidad}
                            onChange={handleChange}
                            required
                        />

                        {errors.localidad && (
                            <div className="errorMessageDiv">{errors.localidad}</div>
                        )}
                    </div>
                </div>
                <div className="Btn">
                
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Contactanos;
