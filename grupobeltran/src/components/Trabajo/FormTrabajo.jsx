import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaCheck, FaTimes } from "react-icons/fa";
import styleFormTrabajo from "./styleFormTrabajo.scss";
import logo from "../Footer/assetsFooter/logo2.png";
import axios from "axios";
import InputProvincias from "../../eventsForm/InputProvincias.jsx";

const FormTrabajo = () => {
  // Datos de inputs
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
    provincia: "",
    localidad: "",
    dni: "",
    domicilio: "",
    cv: "",
  });

  // Datos de inputs por error
  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
    provincia: "",
    localidad: "",
    dni: "",
    domicilio: "",
    cv: "",
  });

  // Variables de estado para rastrear la validez de cada campo
  const [isValidNombre, setIsValidNombre] = useState(false);
  const [isValidApellido, setIsValidApellido] = useState(false);
  const [isValidEdad, setIsValidEdad] = useState(false);
  const [isValidTelefono, setIsValidTelefono] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidProvincia, setIsValidProvincia] = useState(false);
  const [isValidLocalidad, setIsValidLocalidad] = useState(false);
  const [isValidDNI, setIsValidDNI] = useState(false);
  const [isValidDomicilio, setIsValidDomicilio] = useState(false);
  const [isValidCV, setIsValidCV] = useState(false);

  // Control de estados de inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    if (id === "cv") {
      validateCV(value);
    } else {
      // Valida el campo actual y actualiza el estado de validez del campo
      const isValid = validateInput(id, value);
      switch (id) {
        case "nombre":
          setIsValidNombre(isValid);
          break;
        case "apellido":
          setIsValidApellido(isValid);
          break;
        case "edad":
          setIsValidEdad(isValid);
          break;
        case "telefono":
          setIsValidTelefono(isValid);
          break;
        case "email":
          setIsValidEmail(isValid);
          break;
        case "localidad":
          setIsValidLocalidad(isValid);
          break;
        case "domicilio":
          setIsValidDomicilio(isValid);
          break;
        case "dni":
          setIsValidDNI(isValid);
          break;
        default:
          break;
      }
    }
  };

  // Validar inputs
  const validateInput = (id, value) => {
    value = value.trim();
    let errorMessage = "";

    if (value.length === 0) {
      errorMessage = "Este campo es obligatorio";
    } else {
      switch (id) {
        case "nombre":
        case "apellido":
          if (value.length < 3) {
            errorMessage = "Este campo debe tener al menos 3 caracteres";
          } else if (value.length > 12) {
            errorMessage = "Este campo debe tener como máximo 12 caracteres";
          } else if (value.includes(" ")) {
            errorMessage = "Este campo no debe tener espacios intermedios";
          }
          break;
        case "edad":
          const edadValue = parseInt(value);
          if (isNaN(edadValue)) {
            errorMessage = "Por favor, ingresa una edad válida";
          } else if (edadValue < 18) {
            errorMessage =
              "Tiene que ser mayor de 18 para poder enviar el formulario";
          } else if (edadValue > 56) {
            errorMessage =
              "Tiene que tener menos de 56 para enviar el formulario";
          }
          break;
        case "telefono":
          if (value.length < 3) {
            errorMessage = "Este campo debe tener al menos 3 caracteres";
          } else if (value.length > 14) {
            errorMessage = "Este campo debe tener como máximo 14 caracteres";
          } else if (value.includes(" ")) {
            errorMessage = "Este campo no debe tener espacios intermedios";
          }
          break;
        case "email":
          if (!value.includes("@")) {
            errorMessage = "El email debe contener el símbolo @";
          } else if (value.includes(" ")) {
            errorMessage = "Este campo no debe tener espacios intermedios";
          }
          break;
        case "localidad":
        case "domicilio":
          if (value.length < 2) {
            errorMessage = "Este campo debe tener al menos 2 caracteres";
          } else if (value.length > 20) {
            errorMessage = "Este campo debe tener menos de 20 caracteres";
          }
          break;
        case "dni":
          const dniValue = parseInt(value);
          if (isNaN(dniValue)) {
            errorMessage = "Por favor, ingresa un DNI válido";
          } else if (value.length !== 8) {
            errorMessage = "El DNI debe tener exactamente 8 dígitos";
          }
          break;
        default:
          break;
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: errorMessage,
    }));

    return errorMessage === "";
  };

  const [formSubmitCount, setFormSubmitCount] = useState(0);
  const [canSubmitForm, setCanSubmitForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Establecer el tiempo de espera para poder enviar otro formulario después de exceder el límite
  useEffect(() => {
    const cooldownTime = 1 * 60 * 1000; // 1 minuto en milisegundos

    const timeout = setTimeout(() => {
      // Restablecer el contador y habilitar el envío del formulario
      setFormSubmitCount(0);
      setCanSubmitForm(true);
    }, cooldownTime);

    // Limpieza del timeout al desmontar el componente
    return () => clearTimeout(timeout);
  }, [formSubmitCount]);

  // Mandar por fetch los datos después de validarlos por parte del cliente
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.persist();

    if (isSubmitting) {
      return; // Evitar envío si ya se está enviando
    }

    // Verificar si aún se puede enviar el formulario
    if (!canSubmitForm) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Solo se pueden enviar 2 formularios. Intenta más tarde.",
      });
      return;
    }

    setIsSubmitting(true);

    // Validar los datos antes de enviar
    const isNombreValid = validateInput("nombre", formData.nombre);
    const isApellidoValid = validateInput("apellido", formData.apellido);
    const isEdadValid = validateInput("edad", formData.edad);
    const isTelefonoValid = validateInput("telefono", formData.telefono);
    const isEmailValid = validateInput("email", formData.email);
    const isLocalidadValid = validateInput("localidad", formData.localidad);
    const isDniValid = validateInput("dni", formData.dni);
    const isDomicilioValid = validateInput("domicilio", formData.domicilio);

    // Verificar si todos los campos son válidos
    const isFormValid =
      isNombreValid &&
      isApellidoValid &&
      isEdadValid &&
      isTelefonoValid &&
      isEmailValid &&
      isLocalidadValid &&
      isDniValid &&
      isDomicilioValid;

    if (!isFormValid) {
      // Mostrar mensaje al usuario sobre la validación pendiente utilizando SweetAlert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, revisa los datos ingresados antes de enviar el formulario.",
      });
      return;
    }

    // Si no hay errores, proceder con el envío de datos
    const formDataToSend = new FormData(event.target);

    try {
      // desarrollo http://localhost:4000/
      // produccion https://servertrabajo.onrender.com/
      const response = await axios.post(
        "https://servertrabajo.onrender.com/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsSubmitting(false);

      // Incrementar el contador solo cuando no hay errores
      setFormSubmitCount((prevCount) => prevCount + 1);

      // Deshabilitar el envío del formulario después de enviarlo dos veces
      if (formSubmitCount + 1 >= 2) {
        setCanSubmitForm(false);
      }

      // Mostrar mensaje al usuario de éxito
      Swal.fire({
        icon: "success",
        title: "¡Envío exitoso!",
        text: "Los datos se enviaron correctamente.",
      });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      // Mostrar mensaje al usuario de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error al enviar los datos. Por favor, inténtalo nuevamente.",
      });
    }
  };

  return (
    <div className="form-containerTrabajo op">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="Img">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Mitad1">
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.nombre && (
                <div className="errorMessageDiv">{errors.nombre}</div>
              )}
              {isValidNombre && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.apellido && (
                <div className="errorMessageDiv">{errors.apellido}</div>
              )}
              {isValidApellido && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="edad">Edad</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.edad && (
                <div className="errorMessageDiv">{errors.edad}</div>
              )}
              {isValidEdad && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.telefono && (
                <div className="errorMessageDiv">{errors.telefono}</div>
              )}
              {isValidTelefono && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="dni">DNI</label>
            <input
              type="number"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.dni && (
                <div className="errorMessageDiv">{errors.dni}</div>
              )}
              {isValidDNI && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="Mitad2">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="contenedorError">
              {errors.email && (
                <div className="errorMessageDiv">{errors.email}</div>
              )}
              {isValidEmail && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
<InputProvincias/>

          <div>
            <label htmlFor="localidad">Localidad</label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.localidad && (
                <div className="errorMessageDiv">{errors.localidad}</div>
              )}
              {isValidLocalidad && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="domicilio">Domicilio</label>
            <input
              type="text"
              id="domicilio"
              name="domicilio"
              value={formData.domicilio}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="contenedorError">
              {errors.domicilio && (
                <div className="errorMessageDiv">{errors.domicilio}</div>
              )}
              {isValidDomicilio && (
                <div className="iconDiv">
                  <FaCheck />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="cv">CV (Solo png)</label>
            <input type="file" id="cv" name="cv" accept=".png" required />
          </div>
        </div>
        <div className="Btn">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormTrabajo;
