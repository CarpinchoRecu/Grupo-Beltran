import { useEffect, useState } from "react";
import { validateInput } from "./ValidateInput.jsx";
import { FaCheck, FaTimes } from "react-icons/fa";

const InputProvincias = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [fieldStates, setFieldStates] = useState({}); // Nuevo estado para los campos

    const handleChange = (id, value, validationType) => {
        const errorMessage = validateInput(id, value, validationType);

        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: errorMessage,
        }));

        // Actualizar el estado del campo individual
        setFieldStates((prevFieldStates) => ({
            ...prevFieldStates,
            [id]: {
                isValid: errorMessage === "",
                value: value,
            },
        }));
    };

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

    return (
        <>
            <div id="prov">
                <label>Provincia</label>
                <input
                    type="text"
                    id="provincia"
                    name="provincia"
                    onChange={(e) => handleChange("provincia", e.target.value, validateInput)}
                    required
                    autoComplete="off"
                />
                <div className="contenedorSugerencia">
                    <div>
                        <div id="mensaje"></div>
                    </div>
                </div>
                {errors["provincia"] && (
                    <div className="errorMessageDiv">
                        <p>{errors["provincia"]}</p>
                    </div>
                )}
                {fieldStates["provincia"]?.isValid && (
                    <FaCheck className="checkIcon" />
                )}
            </div>
        </>
    );
};

export default InputProvincias;
