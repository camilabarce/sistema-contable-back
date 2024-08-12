const conexion = require('../../Database/conexion');
const Asiento = require('../../Models/modeloAsiento');

//Controlador para mostrar la información de las cuentas de los asientos.
const mostrarAsientos = (req, res) => {
    conexion.query('CALL mostrarAsiento()', (error, results) => {
      if (error) {
        console.error("Error al mostrar asientos:", error);
        res.status(500).json({ error: "Ocurrió un error al mostrar los asientos." });
        return;
    }
        
        const asientos = results[0].map((data) => {
          return new Asiento(data.id_asiento, data.fecha_asiento, data.codigo, data.cuenta, data.importe); //Instanciamos el objeto ubicado en 'src/Models/modeloAsiento.js'
        });

        res.status(200).json(asientos); //Enviamos el status + los asientos como respuesta en formato JSON

      });
  };
  
  module.exports = mostrarAsientos; // Exportamos el controlador
  