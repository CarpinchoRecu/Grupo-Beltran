import React, { useState, useEffect } from "react";
import { validateInput } from "./ValidateInput.jsx";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import logo from "../components/Footer/assetsFooter/logo2.png";
import styleForm from "./styleForm.scss";

const FormGenerico = ({
    fields,
    servidor,
    tipoDeForm,
    customFormData,
}) => {
    const [formData, setFormData] = useState({ customFormData });
    const [errors, setErrors] = useState({});
    const [fieldStates, setFieldStates] = useState({});
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

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
    useEffect(() => {
        // Input de las Provincias
        const inputProv = document.getElementById("provincia");

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

                // Dentro de la función mostrarOptions
                if (minOption.indexOf(txtEscrito) !== -1) {
                    const sugerencia = document.createElement("p");
                    sugerencia.textContent = option;
                    sugerencia.addEventListener("click", function () {
                        const inputProv = document.getElementById("provincia");
                        inputProv.value = option; // Establecer el valor en el campo de provincia
                        mensaje.style.display = "none";
                        inputProv.style.borderBottomLeftRadius = "20px";
                        inputProv.style.borderBottomRightRadius = "20px";
                        handleChange("provincia", option, "provincia"); // Llamar al handleChange con la provincia seleccionada
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

    const handleChange = (id, value, validationType) => {
        if (validationType === "file") {
            if (!value) {
                // No se seleccionó archivo
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: "Debes seleccionar un archivo",
                }));
                setFieldStates((prevFieldStates) => ({
                    ...prevFieldStates,
                    [id]: {
                        isValid: false,
                    },
                }));
            } else {
                const allowedExtensions = ["png"];
                const fileExtension = value.name.split(".").pop().toLowerCase();

                if (!allowedExtensions.includes(fileExtension)) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        [id]: "El archivo debe ser de tipo PNG",
                    }));
                    setFieldStates((prevFieldStates) => ({
                        ...prevFieldStates,
                        [id]: {
                            isValid: false,
                        },
                    }));
                } else {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        [id]: "",
                    }));
                    setFieldStates((prevFieldStates) => ({
                        ...prevFieldStates,
                        [id]: {
                            isValid: true,
                        },
                    }));
                }
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [id]: value,
                }));
            }
        } else if (id === "provincia") {
            // Lógica para manejar el input de provincias
            const txtEscrito = value.toLowerCase();
            const isValid = value && value.trim() !== "";

            const optionExists = provincias.some(function (option) {
                return option.toLowerCase().startsWith(txtEscrito);
            });

            if (!optionExists) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: "Por favor, elige una provincia válida.",
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: isValid ? "" : "Por favor, selecciona una provincia.",
                }));
                setFieldStates((prevFieldStates) => ({
                    ...prevFieldStates,
                    [id]: {
                        isValid,
                    },
                }));
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [id]: value,
                }));
            }
        } else {
            const errorMessage = validateInput(id, value, validationType);

            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: errorMessage,
            }));

            setFieldStates((prevFieldStates) => ({
                ...prevFieldStates,
                [id]: {
                    isValid: errorMessage === "",
                },
            }));

            setFormData((prevFormData) => ({
                ...prevFormData,
                [id]: value,
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const previousFormInfo = JSON.parse(localStorage.getItem("formInfo")) || {
            submissionCount: 0,
            lastSubmissionTime: null,
        };

        // Obtener la hora actual
        const currentTime = new Date().getTime();

        // Verificar si ha pasado al menos 3 minutos desde el último envío exitoso
        if (
            previousFormInfo.lastSubmissionTime &&
            currentTime - previousFormInfo.lastSubmissionTime < 0.1 * 60 * 1000
        ) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Debes esperar al menos 3 minutos antes de enviar otro formulario.",
            });
            return;
        }

        if (previousFormInfo.submissionCount === 2) {
            previousFormInfo.submissionCount = 0;
        }

        if (previousFormInfo.submissionCount >= 2) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Ya has enviado el formulario dos veces en los últimos 3 minutos.",
            });
            return;
        }

        setSubmitButtonDisabled(true);

        // const allFieldsValid = fields.every((field) => {
        //     if (fieldStates[field.id]?.isValid) {
        //         if (field.validationType === "file") {
        //             return true;
        //         } else {
        //             return formData[field.id] && formData[field.id].trim() !== "";
        //         }
        //     }
        //     return false;
        // });

        // const allFieldsCompleted = fields.every((field) => {
        //     if (field.validationType === "file") {
        //         return true;
        //     } else {
        //         return formData[field.id] && formData[field.id].trim() !== "";
        //     }
        // });

        // if (!allFieldsValid) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Error",
        //         text: "Por favor, completa todos los campos correctamente.",
        //     }).then(() => {
        //         setSubmitButtonDisabled(false);
        //     });
        //     return;
        // }

        // if (!allFieldsCompleted) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Error",
        //         text: "Por favor, completa todos los campos del formulario.",
        //     }).then(() => {
        //         setSubmitButtonDisabled(false);
        //     });
        //     return;
        // }

        let formDataToSend;

        if (tipoDeForm === true) {
            formDataToSend = new FormData(event.target);
        } else {
            formDataToSend = new URLSearchParams(formData);
        }

        try {
            const updatedFormInfo = {
                submissionCount: previousFormInfo.submissionCount + 1,
                lastSubmissionTime: currentTime,
            };

            // Almacenar la información actualizada en localStorage
            localStorage.setItem("formInfo", JSON.stringify(updatedFormInfo));

            // Deshabilitar el botón para evitar envíos repetidos
            setSubmitButtonDisabled(true);

            const response = await fetch(`${servidor}`, {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // O response.json() si el servidor devuelve JSON
                throw new Error(
                    `\nError en el servidor:${response.status}\n${response.statusText}\n${errorMessage}\n`
                );
            }

            Swal.fire({
                icon: "success",
                title: "Tu formulario se envió correctamente",
                text: "Pronto nuestros asesores se contactarán contigo.",
            }).then(() => {
                setSubmitButtonDisabled(false);
            });
            console.log("El formulario se ha enviado correctamente.");
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente. Error: ${error.status}`,
            }).then(() => {
                setSubmitButtonDisabled(false);
            });
        }
    };

    return (
        <div className={`contenedorForm ${tipoDeForm ? "formTrabajo" : ""}`}>
            <form onSubmit={handleSubmit}>
                <div className="logoForm">
                    <img src={logo} alt="logo de AsesSalud" />
                </div>
                <div className="campos">
                    {fields.map((field) => (
                        <div key={field.id}>
                            <label htmlFor={field.id}>{field.label}</label>
                            {field.type === "file" ? (
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".png"
                                    onChange={
                                        (e) =>
                                            e.target.files.length > 0
                                                ? handleChange(
                                                    field.id,
                                                    e.target.files[0],
                                                    field.validationType
                                                )
                                                : handleChange(field.id, null, field.validationType) // Pasar null si no se seleccionó archivo
                                    }
                                    required
                                />
                            ) : field.id === "provincia" ? (
                                <>
                                    <input
                                        className="provincia"
                                        type="text"
                                        id="provincia"
                                        name="provincia"
                                        value={formData["provincia"] || ""}
                                        onChange={(e) => {
                                            handleChange("provincia", e.target.value, "provincia");
                                        }}
                                        required
                                    />
                                    <div id="mensaje"></div>
                                </>
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    value={formData[field.id] || ""}
                                    onChange={(e) =>
                                        handleChange(field.id, e.target.value, field.validationType)
                                    }
                                    required
                                />
                            )}
                            <div className="contenedorValidate">
                                {errors[field.id] && (
                                    <div className="errorMessageDiv">
                                        <p>{errors[field.id]}</p>
                                    </div>
                                )}
                                <div className="contendorCheck">
                                    {fieldStates[field.id]?.isValid && <FaCheck />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="botonForm">
                    <button>enviar</button>
                </div>
            </form>
        </div>
    );
};

export default FormGenerico;
