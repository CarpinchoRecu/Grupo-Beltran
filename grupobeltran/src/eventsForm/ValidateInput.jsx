export const validateInput = (id, value, validationType) => {
    value = value.trim();

    if (value.length === 0) {
        return "Este campo es obligatorio";

    } if (validationType === "file") {
        return "";
    } else {
        switch (validationType) {
            case "nombre":
            case "apellido":
                if (value.length < 3) {
                    return "Este campo debe tener al menos 3 caracteres";
                } else if (value.length > 12) {
                    return "Este campo debe tener como máximo 12 caracteres";
                } else if (value.includes(" ")) {
                    return "Este campo no debe tener espacios intermedios";
                }
                break;
            case "edad":
                const edadValue = parseInt(value);
                if (isNaN(edadValue)) {
                    return "Por favor, ingresa un valor numérico válido";
                } else if (edadValue < 18) {
                    return "Tiene que ser mayor de 18 para poder enviar el formulario";
                } else if (edadValue > 56) {
                    return "Tiene que tener menos de 56 para enviar el formulario";
                }
                break;
            case "telefono":
                if (value.length < 7) {
                    return "Este campo debe tener al menos 7 caracteres";
                } else if (value.length > 20) {
                    return "Este campo debe tener como máximo 20 caracteres";
                } else if (value.includes(" ")) {
                    return "Este campo no debe tener espacios intermedios";
                }
                break;
            case "email":
                if (!value.includes("@")) {
                    return "El email debe contener el símbolo @";
                } else if (value.includes(" ")) {
                    return "Este campo no debe tener espacios intermedios";
                }
                break;
            case "localidad":
            case "domicilio":
            case "provincia":
                if (value.length > 20) {
                    return "Este campo debe tener como máximo 20 caracteres";
                }
                break;
            case "dni":
                const dniValue = parseInt(value);
                if (isNaN(dniValue)) {
                    return "Por favor, ingresa un DNI válido";
                } else if (value.length !== 8) {
                    return "El DNI debe tener exactamente 8 dígitos";
                }
                break;
            default:
                break;
        }
    }

    return "";
};
