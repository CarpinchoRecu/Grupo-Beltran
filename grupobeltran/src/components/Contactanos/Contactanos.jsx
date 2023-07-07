import React, { useState } from "react";
import styleContacto from "./styleContacto.scss";

const Contactanos = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        telefono: "",
        email: "",
        provincia: "",
        localidad: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar los datos del formulario al servidor Express
        fetch("http://localhost:5173/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Respuesta del servidor:", data);
                // Realizar acciones adicionales según sea necesario
            })
            .catch((error) => {
                console.error("El error es:", error);
                // Manejar el error de alguna forma
            });

        // Restablecer el estado del formulario
        setFormData({
            nombre: "",
            apellido: "",
            edad: "",
            telefono: "",
            email: "",
            provincia: "",
            localidad: "",
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Edad:
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Teléfono:
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Provincia:
                    <input
                        type="text"
                        name="provincia"
                        value={formData.provincia}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Localidad:
                    <input
                        type="text"
                        name="localidad"
                        value={formData.localidad}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contactanos;
