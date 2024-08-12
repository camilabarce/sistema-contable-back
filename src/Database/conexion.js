require('dotenv').config()
const mysql = require('mysql');

const host = process.env.HOST_DB
const user = process.env.USER_DB
const pass = process.env.PASS_DB
const db = process.env.DATABASE

const conexion = mysql.createConnection({
    host: host,
    user: user,
    password: pass,
    database: db
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log(`Conexion exitosa a la base de datos: "${db}"`);
    }
});

module.exports = conexion;
