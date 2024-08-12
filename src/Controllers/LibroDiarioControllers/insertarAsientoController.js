const conexion = require('../../Database/conexion');

//Controlador para insertar asientos en el libro diario.
const insertarAsiento = (req, res) => {
    const { cuentasSeleccionadas } = req.body;

    //Creamos un JSON y dentro de 'CuentasParaAsiento' insertamos el BODY que contiene los ID e IMPORTES de las cuentas
    const parametrosJSON = JSON.stringify({ CuentasParaAsiento: cuentasSeleccionadas });

    //Dicho JSON será procesado por nuestro stored procedure.
    conexion.query('CALL insertarAsiento(?)', [parametrosJSON], (error, results) => {
      if (error) {
        console.error("Error al insertar asiento:", error);
        res.status(500).json({ error: "Ocurrió un error al insertar el asiento." });
        return;
      }      
      
      res.status(201).json({ mensaje: "Asiento creado con éxito" }); //Enviamos el status de creación y un mensaje de confirmación.
    });

  };
  
  module.exports = insertarAsiento; // Exportamos el controlador
  