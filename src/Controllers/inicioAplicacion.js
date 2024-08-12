// Con este controlador establecemos al 'index.html' como un Entry Point 
// Este controlador solo aplica para 'localhost:3000' y es de testeo para saber si corre el servidor
// Actualmente usamos el 'index.html' de Angular en 'localhost:4200'

const path = require('path'); // Módulo para manejar concatenación de rutas

const inicio = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html')); // Acá enviamos la ruta concatenando con 'path.join'.
};

module.exports = inicio;
