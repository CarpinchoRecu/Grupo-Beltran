import React, { useEffect, useState } from "react";
import styleContactanos from "./styleContacto.scss";
import logo from "../Footer/assetsFooter/logo2.jpeg";
import Swal from "sweetalert2";
import { FaCheck, FaTimes } from "react-icons/fa";

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

    // Variables de estado para rastrear la validez de cada campo
    const [isValidNombre, setIsValidNombre] = useState(false);
    const [isValidApellido, setIsValidApellido] = useState(false);
    const [isValidEdad, setIsValidEdad] = useState(false);
    const [isValidTelefono, setIsValidTelefono] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidLocalidad, setIsValidLocalidad] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));

        // Valida el campo actual y actualiza el estado de validez del campo
        const isValid = validateInput(id, value);
        switch (id) {
            case "nombre":
                setIsValidNombre(isValid);
                break;
            case "apellido":
                setIsValidApellido(isValid);
                break;
            case "edad":
                setIsValidEdad(isValid);
                break;
            case "telefono":
                setIsValidTelefono(isValid);
                break;
            case "email":
                setIsValidEmail(isValid);
                break;
            case "localidad":
                setIsValidLocalidad(isValid);
                break;
            default:
                break;
        }
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
                    } else if (value.length > 20) {
                        errorMessage = "Este campo debe poseer menos de 20 caracteres";
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

        return errorMessage === "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validar los datos antes de enviar
        const isNombreValid = validateInput("nombre", formData.nombre);
        const isApellidoValid = validateInput("apellido", formData.apellido);
        const isEdadValid = validateInput("edad", formData.edad);
        const isTelefonoValid = validateInput("telefono", formData.telefono);
        const isEmailValid = validateInput("email", formData.email);
        const isLocalidadValid = validateInput("localidad", formData.localidad);

        // Verificar si todos los campos son válidos
        const isFormValid =
            isNombreValid &&
            isApellidoValid &&
            isEdadValid &&
            isTelefonoValid &&
            isEmailValid &&
            isLocalidadValid;

        if (!isFormValid) {
            // Mostrar mensaje al usuario sobre la validación pendiente utilizando SweetAlert
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, revisa los datos ingresados antes de enviar el formulario.",
            });
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
                            autoComplete="off"
                        />
                        <div className="contenedorError">
                            {errors.nombre && (
                                <div className="errorMessageDiv">{errors.nombre}</div>
                            )}
                            {isValidNombre && (
                                <div className="iconDiv">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
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
                            autoComplete="off"
                        />
                        <div className="contenedorError">
                            {errors.apellido && (
                                <div className="errorMessageDiv">{errors.apellido}</div>
                            )}
                            {isValidApellido && (
                                <div className="iconDiv">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
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
                            autoComplete="off"
                        />
                        <div className="contenedorError">
                            {errors.edad && (
                                <div className="errorMessageDiv">{errors.edad}</div>
                            )}
                            {isValidEdad && (
                                <div className="iconDiv">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
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
                            autoComplete="off"
                        />
                        <div className="contenedorError">
                            {errors.telefono && (
                                <div className="errorMessageDiv">{errors.telefono}</div>
                            )}
                            {isValidTelefono && (
                                <div className="iconDiv">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
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
                        <div className="contenedorError">
                            {errors.email && (
                                <div className="erroMessageDiv">{errors.email}</div>
                            )}
                            {isValidEmail && (
                                <div className="iconDiv">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
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
                        <div className="contenedorError"></div>
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
                            autoComplete="off"
                        />
                        <div className="contenedorError">
                            {errors.localidad && (
                                <div className="errorMessageDiv">{errors.localidad}</div>
                            )}
                            {isValidLocalidad && (
                                <div className="iconDiv">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
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
