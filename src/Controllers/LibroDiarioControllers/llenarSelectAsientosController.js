const conexion = require('../../Database/conexion');
const SelectAsientoCuenta = require('../../Models/modeloSelectAsientoCuenta');

//Controlador para rellenar el <mat-select> en dónde se seleccionan las cuentas para el asiento
const cuentasSelectAsiento = (req, res) => {

    conexion.query('CALL llenarSelectAsientos()', (error, results) => {
      if (error) {
        console.error("Error al consumir las cuentas:", error);
        res.status(500).json({ error: "Ocurrió un error al consumir las cuentas." });
        return;
    }
      
        const cuentas = results[0].map((data) => {
          return new SelectAsientoCuenta(data.id_cuenta, data.nombre); //Instanciamos el objeto ubicado en 'src/Models/modeloSelectAsientoCuenta.js'
        });

        res.status(200).json(cuentas); //Enviamos el status + un JSON con las cuentas

      });
  };
  
  module.exports = cuentasSelectAsiento; // Exportamos el controlador
  