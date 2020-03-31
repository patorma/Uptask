exports.proyectosHome = (req, res) => {
    res.render('index', { // se pasa la vista y el otro parametro objeto de opciones
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}