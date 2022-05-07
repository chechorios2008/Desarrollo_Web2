const controlador = require('../Controller/controlador')
const router = require('express').Router()
router
    .get('/traerUsuarios',controlador.traerUsuarios)
    .post('/crearUsuarios', controlador.crearUsuarios)
module.exports = router
