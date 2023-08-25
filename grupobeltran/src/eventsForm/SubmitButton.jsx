import React from "react";
import Swal from "sweetalert2";

const SubmitButton = ({ isValid, onSubmit }) => {
    const handleSubmit = async () => {
        if (isValid) {
            // Mostrar un SweetAlert de éxito si las validaciones son correctas
            Swal.fire({
                icon: "success",
                title: "¡Enviado!",
                text: "Formulario enviado con éxito",
                confirmButtonText: "Cerrar",
            });

            // Llamar a la función de envío
            await onSubmit(); // Esperar a que la función de envío termine antes de mostrar el mensaje
        } else {
            // Mostrar un SweetAlert de error si las validaciones no son correctas
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hay errores en el formulario",
                confirmButtonText: "Cerrar",
            });
        }
    };

    return (
        <div className="submit-button">
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default SubmitButton;
