
//DOCUMENTACIÓN PARA EL PLAN DE CUENTAS

/**
 * @openapi
 * /mostrarCuentas/{grupoOption}/{bloqueOption}/{rubroOption}:
 *   get:
 *     tags:
 *       - Plan de Cuentas
 *     description: <strong>DESCRIPCIÓN:</strong> "Muestra las cuentas según la combinación de los ID´s"
 *     parameters:
 *       - in: path
 *         name: grupoOption
 *         schema:
 *           type: integer
 *         description: ID del grupo
 *       - in: path
 *         name: bloqueOption
 *         schema:
 *           type: integer
 *         description: ID del Bloque
 *       - in: path
 *         name: rubroOption
 *         schema:
 *           type: integer
 *         description: ID del Rubro
 *     responses:
 *       200:
 *         description: <strong>OK</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             example:
 *               - codigo: "1101001"
 *                 nombre: "Caja"
 *                 tipo: "Activo corriente"
 *                 saldo: 0
 *       500:
 *         description: <strong>Internal Server Error</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error al mostrar las cuentas."
 */

/**
 * @openapi
 * /modificarCuenta/{nuevoNombre}/{codigoCuenta}/{nombreActual}:
 *   get:
 *     tags:
 *       - Plan de Cuentas
 *     description: <strong>DESCRIPCIÓN:</strong> "Cambia el nombre de una cuenta"
 *     parameters:
 *       - in: path
 *         name: nuevoNombre
 *         schema:
 *           type: string
 *         description: Nombre que se asignará a la cuenta
 *       - in: path
 *         name: codigoCuenta
 *         schema:
 *           type: integer
 *         description: Código de la cuenta
 *       - in: path
 *         name: nombreActual
 *         schema:
 *           type: string
 *         description: Nombre actual de la cuenta
 *     responses:
 *       200:
 *         description: <strong>OK</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Cuenta modificada con éxito." 
 *       500:
 *         description: <strong>Internal Server Error</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error al modificar la cuenta."
 */

/**
 * @openapi
 * /agregarCuenta/{grupoOption}/{bloqueOption}/{rubroOption}/{nuevaCuenta}:
 *   post:
 *     tags:
 *       - Plan de Cuentas
 *     description: <strong>DESCRIPCIÓN:</strong> "Agrega una cuenta dependiendo de la combinación de los ID´s"
 *     parameters:
 *       - in: path
 *         name: grupoOption
 *         schema:
 *           type: integer
 *         description: ID del grupo
 *       - in: path
 *         name: bloqueOption
 *         schema:
 *           type: integer
 *         description: ID del bloque
 *       - in: path
 *         name: rubroOption
 *         schema:
 *           type: integer
 *         description: ID del rubro
 *       - in: path
 *         name: nuevaCuenta
 *         schema:
 *           type: string
 *         description: Nombre de la cuenta a agregar 
 *     responses:
 *       201:
 *         description: <strong>CREATED</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Cuenta agregada con éxito." 
 *       500:
 *         description: <strong>Internal Server Error</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error al agregar la cuenta."
 */

/**
 * @openapi
 * /borrarCuenta/{codigoCuenta}:
 *   delete:
 *     tags:
 *       - Plan de Cuentas
 *     description: <strong>DESCRIPCIÓN:</strong> "Borra una cuenta del plan de cuentas"
 *     parameters:
 *       - in: path
 *         name: codigoCuenta
 *         schema:
 *           type: integer
 *         description: Código de la cuenta
 *     responses:
 *       204:
 *         description: <strong>NO CONTENT</strong>
 *       500:
 *         description: <strong>Internal Server Error</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error al borrar la cuenta."
 */



//DOCUMENTACIÓN PARA LIBRO DIARIO

/**
 * @openapi
 * /mostrarAsientos:
 *   get:
 *     tags:
 *       - Libro Diario
 *     description: <strong>DESCRIPCIÓN:</strong> "Muestra los datos del asiento tales como N°Asiento | Fecha | Código de cuenta | Nombre de Cuenta | Importe"
 *     responses:
 *       200:
 *         description: <strong>OK</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             example:
 *               - id_asiento: 1
 *                 fecha_asiento: "2023-11-09"
 *                 codigo: "1101001"
 *                 cuenta: "Caja"
 *                 importe: 10000
 *       500:
 *         description: <strong>Internal Server Error</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error al mostrar los asientos."
 */

/**
 * @openapi
 * /llenarSelectAsientos:
 *   get:
 *     tags:
 *       - Libro Diario
 *     description: <strong>DESCRIPCIÓN:</strong> "Trae todos los ID´s y Nombres de las cuentas"
 *     responses:
 *       200:
 *         description: <strong>OK</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             example:
 *               - id_cuenta: 1
 *                 nombre: "Caja"
 *               - id_cuenta: 3
 *                 nombre: "Valores a depositar"
 *       500:
 *         description: <strong>Internal Server Error</strong>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ocurrió un error al consumir las cuentas."
 */

/**
 * @openapi
 * /insertarAsiento:
 *   post:
 *     tags:
 *       - Libro Diario
 *     description: <strong>DESCRIPCIÓN:</strong> "Crea un nuevo asiento en el Libro Diario"
 *     requestBody:
 *       description: <strong>Requiere un JSON con las cuentas seleccionadas para el asiento y sus importes</strong>
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id_cuenta:
 *                   type: integer
 *                 importe:
 *                   type: number
 *               required:
 *                 - id_cuenta
 *                 - importe
 *           example:
 *                 - id_cuenta: 1
 *                   importe: 1000
 *                 - id_cuenta: 2
 *                   importe: -1000
 *     responses:
 *       201:
 *         description: <strong>CREATED</strong>
 *         content:
 *           application/json:
 *             example:
 *               mensaje: "Asiento creado con éxito"
 *       500:
 *         description: <strong>Error Interno del Servidor</strong>
 *         content:
 *           application/json:
 *             example:
 *               error: "Ocurrió un error al insertar el asiento."
 */



//DOCUMENTACIÓN PARA ESTADO DE SITUACIÓN PATRIMONIAL

/**
 * @openapi
 * /situacionPatrimonial:
 *   get:
 *     tags:
 *       - Estados
 *     description: <strong>DESCRIPCIÓN:</strong> "Retorna un JSON con todos los Rubros de Activos y Pasivos (Corrientes y No corrientes) junto con sus saldos y también retorna el total de los Activos y Pasivos"
 *     responses:
 *       200:
 *         description: <strong>OK</strong>
 *       500:
 *         description: <strong>Error Interno del Servidor</strong>
 *         content:
 *           application/json:
 *             example:
 *               error: "Ocurrió un error al mostrar el JSON de situación patrimonial."
 */
