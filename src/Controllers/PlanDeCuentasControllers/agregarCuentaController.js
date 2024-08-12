const conexion = require('../../Database/conexion');

//Controlador para agregar una nueva cuenta en el plan de cuentas
const agregarCuenta = (req, res) => {
    const {grupoOption, bloqueOption, rubroOption, nuevaCuenta} =  req.params;
    
    conexion.query('CALL agregarCuenta(?, ?, ?, ?)', [grupoOption, bloqueOption, rubroOption, nuevaCuenta], (error, cuenta) => {
      if (error){
        console.error("Error al agregar cuenta:", error);
        res.status(500).json({ error: "Ocurrió un error al agregar la cuenta." });
        return;
      }
      
      res.status(201).json({ mensaje: "Cuenta agregada con éxito" }); //Código 201 ("Created") indica la creación de un recurso en la API
    });
};
  
  module.exports = agregarCuenta;
  