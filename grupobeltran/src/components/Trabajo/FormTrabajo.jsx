import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormTrabajo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('nombre', data.nombre);
    formData.append('apellido', data.apellido);
    formData.append('edad', data.edad);
    formData.append('telefono', data.telefono);
    formData.append('email', data.email);
    formData.append('provincia', data.provincia);
    formData.append('localidad', data.localidad);
    formData.append('dni', data.dni);
    formData.append('domicilio', data.domicilio);
    formData.append('cv', data.cv[0]); // The file is in data.cv[0]

    try {
      const response = await axios.post('http://localhost:4000/trabajo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error(error);
      alert('Error al enviar el formulario');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" {...register('nombre', { required: true })} />
        {errors.nombre && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="apellido">Apellido</label>
        <input type="text" {...register('apellido', { required: true })} />
        {errors.apellido && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="edad">Edad</label>
        <input type="number" {...register('edad', { required: true, min: 18 })} />
        {errors.edad && <span>Este campo es requerido y debe ser mayor de 18 años</span>}
      </div>
      <div>
        <label htmlFor="telefono">Teléfono</label>
        <input type="tel" {...register('telefono', { required: true })} />
        {errors.telefono && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="provincia">Provincia</label>
        <input type="text" {...register('provincia', { required: true })} />
        {errors.provincia && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="localidad">Localidad</label>
        <input type="text" {...register('localidad', { required: true })} />
        {errors.localidad && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="dni">DNI</label>
        <input type="text" {...register('dni', { required: true })} />
        {errors.dni && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="domicilio">Domicilio</label>
        <input type="text" {...register('domicilio', { required: true })} />
        {errors.domicilio && <span>Este campo es requerido</span>}
      </div>
      <div>
        <label htmlFor="cv">Adjuntar CV (.png)</label>
        <input type="file" {...register('cv', { required: true, accept: '.png' })} />
        {errors.cv && <span>Este campo es requerido y debe ser un archivo .png</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormTrabajo;

