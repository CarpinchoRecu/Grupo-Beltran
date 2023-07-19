import React, { useEffect } from 'react';
import styleContactanos from "./styleContacto.scss";

const Contactanos = () => {
    useEffect(() => {
        const inputProv = document.getElementById('provincia');
        let provincias = [
            'Buenos Aires',
            'Catamarca',
            'Chaco',
            'Chubut',
            'Córdoba',
            'Corrientes',
            'Entre Ríos',
            'Formosa',
            'Jujuy',
            'La Pampa',
            'La Rioja',
            'Mendoza',
            'Misiones',
            'Neuquén',
            'Río Negro',
            'Salta',
            'San Juan',
            'San Luis',
            'Santa Cruz',
            'Santa Fe',
            'Santiago del Estero',
            'Tierra del Fuego',
            'Tucumán'
        ];

        const mostrarOptions = () => {
            const mensaje = document.getElementById('mensaje');
            const txtEscrito = inputProv.value.toLowerCase();
        
            if (txtEscrito === '') {
                mensaje.style.display = 'none';
                return;
            }
        
            mensaje.innerHTML = '';
        
            const optionExists = provincias.some(function (option) {
                return option.toLowerCase().startsWith(txtEscrito);
            });
        
            if (!optionExists) {
                inputProv.value = ''; // Vaciar el campo de entrada si no hay coincidencias
                mensaje.style.display = 'none';
                return;
            }
        
            provincias.forEach(function (option) {
                const minOption = option.toLowerCase();
        
                if (minOption.indexOf(txtEscrito) !== -1) {
                    const sugerencia = document.createElement('p');
                    sugerencia.textContent = option;
                    sugerencia.addEventListener('click', function () {
                        inputProv.value = option;
                        mensaje.innerHTML = '';
                    });
        
                    mensaje.appendChild(sugerencia);
                }
            });
        
            mensaje.style.display = 'block';
        };
        

        inputProv.addEventListener('input', mostrarOptions);

        mostrarOptions()

        return () => {
            // Limpiar los event listeners cuando el componente se desmonte
            inputProv.removeEventListener('input', mostrarOptions);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new URLSearchParams(new FormData(event.target));

        try {
            const response = await fetch('http://localhost:3000/contactanos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData
            });

            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required />

                <label htmlFor="edad">Edad:</label>
                <input type="number" id="edad" name="edad" required />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label>Provincia:</label>
                <div>
                    <input type="text" id="provincia" name="provincia" autoComplete="off" />
                    <div id="mensaje"></div>
                </div>

                <label htmlFor="localidad">Localidad:</label>
                <input type="text" id="localidad" name="localidad" required />

                <button type="submit">Enviar</button>
            </form>
        </div>

    );
};

export default Contactanos;
