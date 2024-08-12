//Swagger crea una interfaz que nos permite documentar y testear la estructura de nuestra API.
//Acá está su documentación oficial: https://swagger.io/docs/specification/about/

//Ubiquense dentro de la carpeta Back-Develop y ejecuten: npm install swagger-jsdoc swagger-ui-express

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Metadatos con información de nuestra API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: 'Sistema Contable API', 
        description:"<a href='http://localhost:3000/' target='_self'>Volver al menú principal</a>", 
        version: '1.0.0'},
    },
    apis: ['src/Documentation/documentacion.js']
};

//Formateamos los metadatos a un JSON entendido por Swagger
const swaggerSpec = swaggerJSDoc(options);

//Configuramos una ruta para mostrar la documentación de nuestra API usando el controlador de Swagger
const swaggerDocs = (app, port) =>{
    app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Documentación de la API disponible en  http://localhost:${port}/api`)
};

module.exports = { swaggerDocs };