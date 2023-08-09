import FormContactanos from "./FormContactanos.jsx";
import styleContactanos from "./styleContactanos.scss";

const Contactanos = () => {
    return (
        <>
        <div className="op">
            <div  id="titleContactos">
                <h2>
                    Para ponerte en contacto con un asesor o recibir más información, por
                    favor completa el siguiente formulario.
                </h2>
            </div>
            <FormContactanos />
        </div>

        </>
    );
};

export default Contactanos;
