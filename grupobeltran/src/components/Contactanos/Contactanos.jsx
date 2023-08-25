import styleContactanos from "./styleContactanos.scss";
import FormGenerico from "../../eventsForm/FormGenerico.jsx";

const Contactanos = () => {
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
            label: "Telefono",
            type: "text",
            validationType: "telefono",
        },
        {
            id: "email",
            label: "Email",
            type: "text",
            validationType: "email",
        },
        {
            id: "provincia",
            label: "Provincia",
            type: "text",
            validationType: "provincia",
        },
        {
            id: "localidad",
            label: "Localidad",
            type: "text",
            validationType: "localidad",
        },

    ];

    return (
        <div className="op">
            <div  id="titleContactos">
                <h2>
                    Para ponerte en contacto con un asesor o recibir más información, por
                    favor completa el siguiente formulario.
                </h2>
            </div>
                <FormGenerico fields={fields} className="contactanosForm" servidor="https://expressserver-uclv.onrender.com/" />
        </div>
    );
};

export default Contactanos;
