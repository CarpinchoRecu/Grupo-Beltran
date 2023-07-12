const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());

// Configuración de la conexión con la base de datos
const connection = mysql.createConnection({
  host: '154.49.247.1',
  user: 'u352676213_francisco',
  password: 'Jh:7$RWb=M',
  database: 'u352676213_form_contactos',
});

// Establecer conexión con la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar con la base de datos', error);
  } else {
    console.log('Conexión exitosa con la base de datos');
  }
});

// Configuración de CORS para permitir solicitudes desde el origen de tu aplicación React
const corsOptions = {
  origin: 'http://localhost:5173' // Reemplaza con el origen de tu aplicación React
};

app.use(cors(corsOptions));

// Ruta para recibir los datos del formulario y almacenarlos en la base de datos
app.post('/api/enviar', (request, response) => {
  const { nombre, apellido, edad, telefono, email, provincia, localidad } = request.body;

  // Ejecutar una consulta SQL para insertar los datos en la base de datos
  const query = 'INSERT INTO u352676213_form_contact (nombre, apellido, edad, telefono, email, provincia, localidad) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [nombre, apellido, edad, telefono, email, provincia, localidad], (error, result) => {
    if (error) {
      console.error('Error al insertar los datos:', error);
      response.status(500).json({ success: false, message: 'Error al insertar los datos' });
    } else {
      const insertedId = result.insertId; // Obtener el valor del campo `id` insertado
      console.log('Datos insertados correctamente. ID del registro:', insertedId);
      response.json({ success: true, message: 'Datos insertados correctamente', insertedId });
    }
  });
});

// Resto de tu configuración de Express

app.listen(3306, () => {
  console.log('Servidor Express funcionando en el puerto 3306');
});
