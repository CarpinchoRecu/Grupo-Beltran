import React, { useState } from 'react';
import styleTrabajo from "./styleTrabajo.scss"

function Trabajo() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [documento, setDocumento] = useState('');
    const [cv, setCv] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
        console.log({
            nombre,
            apellido,
            telefono,
            email,
            edad,
            provincia,
            localidad,
            direccion,
            documento,
            cv,
        });
    };

    const handleCvChange = (e) => {
        const file = e.target.files[0];
        // Puedes realizar alguna acción con el archivo cargado, como leerlo o mostrar información
        console.log(file);
        setCv(file);
    };

    return (
        <div className="formTrabajo">
                    <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <br />
            <label>
                Apellido:
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </label>
            <br />
            <label>
                Teléfono:
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Edad:
                <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
            </label>
            <br />
            <label>
                Provincia:
                <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
            </label>
            <br />
            <label>
                Localidad:
                <input type="text" value={localidad} onChange={(e) => setLocalidad(e.target.value)} />
            </label>
            <br />
            <label>
                Dirección:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </label>
            <br />
            <label>
                Documento:
                <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
            </label>
            <br />
            <label>
                Cargar CV:
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleCvChange} />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
        </div>

    );
}

export default Trabajo;
