import FormGenerico from "../../eventsForm/FormGenerico.jsx";
import styleTrabajo from "./styleTrabajo.scss";

const FormTrabajo = () => {
  const fields = [
    {
      id: "nombre",
      label: "Nombre",
      type: "text",
      validationType: "nombre",
    },

    {
      id: "email",
      label: "Email",
      type: "text",
      validationType: "email",
    },
    {
      id: "apellido",
      label: "Apellido",
      type: "text",
      validationType: "apellido",
    },
    {
      id: "provincia",
      label: "Provincia",
      type: "text",
      validationType: "provincia",
    },
    {
      id: "edad",
      label: "Edad",
      type: "number",
      validationType: "edad",
    },
    {
      id: "localidad",
      label: "Localidad",
      type: "text",
      validationType: "localidad",
    },
    {
      id: "telefono",
      label: "Telefono",
      type: "text",
      validationType: "telefono",
    },
    {
      id: "domicilio",
      label: "Domicilio",
      type: "text",
      validationType: "domicilio",
    },
    {
      id: "dni",
      label: "DNI",
      type: "number",
      validationType: "dni",
    },
    {
      id: "cv",
      label: "CV (Solo PNG)",
      type: "file",
      validationType: "file",
    },
  ];

  const customFormData = new FormData();

  return (
    <div className="op">
      <FormGenerico
        tipoDeForm={true}
        fields={fields}
        customFormData={customFormData}
        servidor="https://servertrabajo.onrender.com/"
      />
    </div>
  );
};

export default FormTrabajo;
