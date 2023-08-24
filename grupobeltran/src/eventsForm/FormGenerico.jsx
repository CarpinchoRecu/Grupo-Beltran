import React, { useState } from "react";
import { validateInput } from "./ValidateInput.jsx";
import { FaCheck } from "react-icons/fa";

const FormGenerico = ({ fields, typeForm }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [fieldStates, setFieldStates] = useState({});

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

    return (
        <form className={`${typeForm}`}>
            {fields.map((field) => (
                <div key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    {field.type === "file" ? (
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept=".png"
                            onChange={(e) =>
                                e.target.files.length > 0
                                    ? handleChange(field.id, e.target.files[0], field.validationType)
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
        </form>
    );
};

export default FormGenerico;
