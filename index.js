const express = require('express');

// crear una app de express

const app = express();


// ruta para el home
// cualquier request corre este codigo
app.use('/', (req, res) => {
    res.send('hola');
});

app.listen(3000);