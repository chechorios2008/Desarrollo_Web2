const Schema = require('../Models/model')
const { usuarios } = require('../Models/schemas')
const Schemas = new Schema()
Schemas.conectar()
function controlador() { }
controlador.inicio = (req, res) => {
    res.send('Verificando controlador')
}


controlador.crearUsuarios = (req, res) => {
    //console.log(req.body)
    Schemas.usuarioConect.create(req.body, (err) => {
        res.send('Usuario creado con éxito.')
    })
}

controlador.traerUsuarios = (req, res) => {
    Schemas.usuarioConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}

module.exports = controlador