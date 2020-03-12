const express = require('express');
const router = express.Router();

module.exports = function() { // equivalente a export default

    // ruta para el home
    // cualquier request corre este codigo
    router.get('/', (req, res) => {
        res.send('Index');
    });
    router.get('/nosotros', (req, res) => {
        res.send('Nosotros');
    });

    return router;
}