// Importamos los controladores

//Controlador para setear la ruta principal de nuestro server
const inicio = require('./inicioAplicacion');

//Controladores para el plan de cuentas
const mostrarCuentas = require('./PlanDeCuentasControllers/mostrarCuentasController');
const modificarCuenta = require('./PlanDeCuentasControllers/modificarCuentaController');
const agregarCuenta = require('./PlanDeCuentasControllers/agregarCuentaController');
const borrarCuenta = require('./PlanDeCuentasControllers/borrarCuentaController');

//Controladores para el libro diario
const mostrarAsientos = require('./LibroDiarioControllers/mostrarAsientosController');
const cuentasSelectAsiento = require('./LibroDiarioControllers/llenarSelectAsientosController');
const insertarAsiento = require('./LibroDiarioControllers/insertarAsientoController');

//Controladores para la tabla de Estados
const situacionPatrimonial = require('./Estados/situacionPatrimonialController');

// Controlador general (orquestador)
const orquestador = {
  inicio,
  mostrarCuentas,
  modificarCuenta,
  agregarCuenta,
  borrarCuenta,
  mostrarAsientos,
  cuentasSelectAsiento,
  insertarAsiento,
  situacionPatrimonial
};

// El 'orquestador' es un mediador entre los controladores y nuestro 'app.js'.

module.exports = orquestador; // Exportamos el orquestador.


