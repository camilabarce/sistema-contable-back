const conexion = require('../../Database/conexion');

const situacionPatrimonial = (req, res) => {
    conexion.query('CALL situacionPatrimonial()', (error, jsonSituacionPatrimonial) => {
        if (error) {
            console.error("Error al mostrar el JSON de estado patrimonial:", error);
            res.status(500).json({ error: "Ocurrió un error al mostrar el JSON de situación patrimonial." });
            return;
        }    
         
        console.log(jsonSituacionPatrimonial); 
        res.status(200).json(jsonSituacionPatrimonial);
      });
  };
  
  module.exports = situacionPatrimonial; // Exportamos el controlador
  