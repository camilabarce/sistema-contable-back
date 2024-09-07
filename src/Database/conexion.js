require('dotenv').config()
const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE
});

conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    } else {
        console.log(`Conexion exitosa a la base de datos: "${process.env.DATABASE}"`);
    }
});

module.exports = conexion;
