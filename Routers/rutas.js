const controlador = require('../Controller/controlador')
const router = require('express').Router()
router
    .get('/traerUsuarios',controlador.traerUsuarios)
    .post('/crearUsuarios', controlador.crearUsuarios)
    .put('/modificarUsuario',controlador.modificarUsuario)

    .get('/traerTipoEquipo',controlador.traerTipoEquipo)
    .post('/crearTipoEquipo', controlador.crearTipoEquipo)
    .put('/modificarTipoEquipo',controlador.modificarTipoEquipo)

    .get('/traerEstadoEquipo',controlador.traerEstadoEquipo)
    .post('/crearEstadoEquipo', controlador.crearEstadoEquipo)
    .put('/modificarEstadoEquipo',controlador.modificarEstadoEquipo)

    .get('/traermarca',controlador.traermarca)
    .post('/crearmarca', controlador.crearmarca)
    .put('/modificarmarca',controlador.modificarmarca)

module.exports = router
