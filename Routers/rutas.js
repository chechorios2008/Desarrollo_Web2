const controlador = require('../Controller/controlador')
const router = require('express').Router()
router
    .get('/traerUsuarios',controlador.traerUsuarios)
    .get('/traerUsuario/:id', controlador.traerUsuario)
    .post('/crearUsuarios', controlador.crearUsuarios)
    .put('/modificarUsuario',controlador.modificarUsuario)

    .get('/traerTipoEquipos',controlador.traerTipoEquipos)
    .get('/traerTipoEquipo/:id', controlador.traerTipoEquipo)
    .post('/crearTipoEquipo', controlador.crearTipoEquipo)
    .put('/modificarTipoEquipo',controlador.modificarTipoEquipo)

    .get('/traerEstadoEquipos',controlador.traerEstadoEquipos)
    .get('/traerEstadoEquipo/:id', controlador.traerEstadoEquipo)
    .post('/crearEstadoEquipo', controlador.crearEstadoEquipo)
    .put('/modificarEstadoEquipo',controlador.modificarEstadoEquipo)

    .get('/traerMarcas',controlador.traerMarcas)
    .get('/traerMarca/:id', controlador.traerMarca)
    .post('/crearMarca', controlador.crearMarca)
    .put('/modificarMarca',controlador.modificarMarca)

module.exports = router
