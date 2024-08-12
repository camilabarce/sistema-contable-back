const conexion = require('../../Database/conexion');

//Controlador para borrar una cuenta del plan de cuentas.
const borrarCuenta = (req, res) => {
    const {codigoCuenta} = req.params;
 
    conexion.query('CALL borrarCuenta(?)', [codigoCuenta], (error, results) => {
        if (error) {
            console.error("Error al borrar cuenta:", error);
            res.status(500).json({ error: "Ocurrió un error al borrar la cuenta." });
            return;
        }

        res.status(204).end(); //Código 204 ("No Content") indica que la solicitud se ha procesado correctamente y que no hay contenido en la respuesta.
      });
      
  };
  
  module.exports = borrarCuenta; // Exportamos el controlador
  