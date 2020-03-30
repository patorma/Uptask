const express = require('express');
const router = express.Router();

// importar el controlador
const { proyectosHome } = require('../controller/proyectosController')

module.exports = function() { // equivalente a export default

    // ruta para el home
    // cualquier request corre este codigo
    router.get('/', proyectosHome);


    return router;
}