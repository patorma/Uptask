const express = require('express');
const routes = require('./routes')
    // crear una app de express

const app = express();

app.use('/', routes()); // exporta una funcion


app.listen(3000);