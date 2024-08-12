const conexion = require('../../Database/conexion');

//Controlador para modificar nombre de una cuenta del plan de cuentas.
const modificarCuenta = (req, res) => {
    const {nuevoNombre, codigoCuenta, nombreActual} = req.params;
 
    conexion.query('CALL modificarCuenta(?, ?, ?)', [nuevoNombre, codigoCuenta, nombreActual], (error, results) => {
        if (error) {
            console.error("Error al modificar cuenta:", error);
            res.status(500).json({ error: "Ocurrió un error al modificar la cuenta." });
            return;
        }

        res.status(200).json({ mensaje: "Cuenta modificada con éxito" }); //Enviamos el status + un mensaje de confirmación.
      });
      
  };
  
  module.exports = modificarCuenta; // Exportamos el controlador
  