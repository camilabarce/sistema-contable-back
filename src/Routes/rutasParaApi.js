const express = require('express');
const router = express.Router();
const orquestador = require('../Controllers/orquestador');

router
    //Ruta por defecto en 'localhost:3000' para testear el funcionamiento del server
    .get('/', orquestador.inicio) 

    //Rutas para el plan de cuentas
    .get('/mostrarCuentas/:grupoOption/:bloqueOption/:rubroOption', orquestador.mostrarCuentas)
    .post('/modificarCuenta/:nuevoNombre/:codigoCuenta/:nombreActual', orquestador.modificarCuenta)
    .post('/agregarCuenta/:grupoOption/:bloqueOption/:rubroOption/:nuevaCuenta', orquestador.agregarCuenta)
    .delete('/borrarCuenta/:codigoCuenta', orquestador.borrarCuenta)

    //Rutas para el libro diario.
    .get('/mostrarAsientos', orquestador.mostrarAsientos)
    .get('/llenarSelectAsientos', orquestador.cuentasSelectAsiento)
    .post('/insertarAsiento', orquestador.insertarAsiento)

    //Ruta para estado de situación patrimonial
    .get('/situacionPatrimonial', orquestador.situacionPatrimonial);

module.exports = router;