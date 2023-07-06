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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realizar acciones con los datos del formulario
        console.log(formData);

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
