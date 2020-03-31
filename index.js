const express = require('express');
const routes = require('./routes')
const morgan = require('morgan');
const path = require('path'); // nlee lo que es el filesystem osea forma de acceder a carpetas de archivos
const log = console.log
    // crear una app de express

const app = express();
app.use(morgan(':method :url :status :response-time ms'))

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// habilitar pug
// set para agregar valor 
app.set('view engine', 'pug');

// se debe mostrar donde van las listas
// Añadir la carpeta de las vistas
// __dirname muestra la carpeta principal en este caso donde esta index 
app.set('views', path.join(__dirname, './views'))

app.use('/', routes()); // exporta una funcion


app.listen(3000, log(`Server running on port ${3000}`));