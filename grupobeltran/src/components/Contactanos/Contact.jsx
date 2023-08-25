import FormGenerico from "../../eventsForm/FormGenerico.jsx";
import styleContactanos from "./styleFormContactanos.scss";

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
            id: "localidad",
            label: "localidad",
            type: "text",
            validationType: "localidad",
        },

    ];

    return (
        <div className="form-container">
            <FormGenerico fields={fields} servidor="https://expressserver-uclv.onrender.com/" />
        </div>
    );
};

export default Contact;
