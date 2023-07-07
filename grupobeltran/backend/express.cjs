const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
const port = 5173;


// Configuración de la conexión con la base de datos
const connection = mysql.createConnection({
  host: '154.49.247.16',
  user: 'u352676213_francisco',
  password: 'Francisco123',
  database: 'u352676213_form_contact',
});

// Establecer conexión con la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar con la base de datos:', error);
  } else {
    console.log('Conexión exitosa con la base de datos');
  }
});

// Ruta para recibir los datos del formulario y almacenarlos en la base de datos
app.post('http://localhost:5173/', (req, res) => {
  const { nombre, apellido, edad, telefono, email, provincia, localidad } = req.body;

  // Ejecutar una consulta SQL para insertar los datos en la base de datos
  const query = 'INSERT INTO u352676213_form_contact (nombre, apellido, edad, telefono, email, provincia, localidad) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [nombre, apellido, edad, telefono, email, provincia, localidad], (error, result) => {
    if (error) {
      console.error('Error al insertar los datos:', error);
      res.status(500).json({ success: false, message: 'Error al insertar los datos' });
    } else {
      const insertedId = result.insertId; // Obtener el valor del campo `id` insertado
      console.log('Datos insertados correctamente. ID del registro:', insertedId);
      res.json({ success: true, message: 'Datos insertados correctamente', insertedId });
    }
  });
});

// Resto de tu configuración de Express

app.listen(port, () => {
  console.log(`Servidor Express funcionando en el puerto ${port}`);
});