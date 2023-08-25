import React, { useState, useEffect } from "react";
import { validateInput } from "./ValidateInput.jsx";
import { FaCheck } from "react-icons/fa";

const FormGenerico = ({ fields, typeForm, servidor }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [fieldStates, setFieldStates] = useState({});
    const [provinciaSuggestions, setProvinciaSuggestions] = useState([]);
    const [searched, setSearched] = useState(false);
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
        const inputProv = document.getElementById("provincia");

        const mostrarOptions = () => {
            const txtEscrito = inputProv.value.toLowerCase();
            const suggestions = provincias.filter((option) =>
                option.toLowerCase().startsWith(txtEscrito)
            );

            setProvinciaSuggestions(suggestions);
        };

        if (searched) {
            mostrarOptions();
        }

        return () => {
            inputProv.removeEventListener("input", mostrarOptions);
        };
    }, [searched]);

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

        const formDataToSend = new URLSearchParams(new FormData(event.target));

        try {
            const response = await fetch(`${servidor}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formDataToSend,
            });

            const data = await response.text();
            console.log(data);
            console.log("se envio el formulario");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className={`${typeForm}`} onSubmit={handleSubmit}>
            <div> {/* Campo de Provincias */}
                <label htmlFor="provincia">Provincia</label>
                <input
                    type="text"
                    id="provincia"
                    name="provincia"
                    value={formData["provincia"] || ""}
                    onChange={(e) => {
                        setSearched(true); // Marcamos que se ha buscado
                        handleChange("provincia", e.target.value, "provincia");
                    }}
                    required
                    autoComplete="off"
                />
                <div id="mensaje">
                    {provinciaSuggestions.map((suggestion, index) => (
                        <p
                            key={index}
                            onClick={() => {
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    provincia: suggestion,
                                }));
                                setProvinciaSuggestions([]); // Limpiar sugerencias
                                setSearched(false); // Resetear el estado de búsqueda
                            }}
                        >
                            {suggestion}
                        </p>
                    ))}
                </div>
            </div>
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
                            autoComplete="off"
                        />
                    )}
                    <div>
                        {errors[field.id] && (
                            <div className="errorMessageDiv">
                                <p>{errors[field.id]}</p>
                            </div>
                        )}
                        {fieldStates[field.id]?.isValid && (
                            <FaCheck className="checkIcon" />
                        )}
                    </div>
                </div>
            ))}
            <button>enviar</button>
        </form>
    );
};

export default FormGenerico;
