const conexion = require('../../Database/conexion');
const Cuenta = require('../../Models/modeloCuenta');

//Controlador para mostrar las cuentas en el plan de cuentas
const mostrarCuentas = (req, res) => {
    const { grupoOption, bloqueOption, rubroOption } = req.params;

    conexion.query('CALL mostrarCuentas(?, ?, ?)', [grupoOption, bloqueOption, rubroOption], (error, results) => {
      if (error) {
        console.error("Error al mostrar las cuentas:", error);
        res.status(500).json({ error: "Ocurrió un error al mostrar las cuentas." });
        return;
    }
      
        const cuentas = results[0].map((data) => {
          return new Cuenta(data.codigo, data.nombre, data.tipo, data.saldo); //Instanciamos el objeto ubicado en 'src/Models/imprimirCuenta.js'
        });

        res.status(200).json(cuentas); //Enviamos el status + las cuentas como respuesta en formato JSON
      });
  };
  
  module.exports = mostrarCuentas; // Exportamos el controlador
  