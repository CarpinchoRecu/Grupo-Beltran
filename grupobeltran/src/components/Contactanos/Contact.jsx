import React from "react";
import FormGenerico from "../../eventsForm/FormGenerico.jsx";
import styleContactanos from "./styleFormContactanos.scss";
import Provincias from "../../eventsForm/InputProvincias.jsx";

const Contact = () => {
    const fields = [
        {
            id: "nombre",
            label: "Nombre",
            type: "text",
            validationType: "nombre",
        },
        {
            id: "apellido",
            label: "Apellido",
            type: "text",
            validationType: "apellido",
        },
        {
            id: "edad",
            label: "Edad",
            type: "number",
            validationType: "edad",
        },
        {
            id: "telefono",
            label: "telefono",
            type: "text",
            validationType: "telefono",
        },
        {
            id: "email",
            label: "email",
            type: "text",
            validationType: "email",
        },
        {
            id: "file", // Nuevo campo para el archivo
            label: "Archivo PNG",
            type: "file",
            validationType: "file", // Ajusta el tipo de validación según tu lógica de archivos
        },
        
    ];

    return (
        <div className="form-container">
            <FormGenerico fields={fields} />
            <Provincias/>
        </div>
    );
};

export default Contact;
