const Schema = require('../Models/model')
const { usuarios } = require('../Models/schemas')
const Schemas = new Schema()
const Consultas = require('./funtionController')
Schemas.conectar()
function controlador() { }

const GetOne = new Consultas(Schemas)

controlador.crearUsuarios = (req, res) => {
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
controlador.traerUsuario = (req, res) => {
    let id = req.params.id
    GetOne.getUser(id)
        .then(response => res.json(response))
        .catch(err => res.status(400).send(err))
}

controlador.modificarUsuario = (req, res) => {
    if (req.body._id != null) {
        Schemas.usuarioConect
            .updateOne({
                _id: req.body._id
            }, { $set: { usuarios: req.body.usuarios, email: req.body.estado, estado: req.body.estado, fechaActualizacion: Date.now() } })
            .exec((err) => {
                if (err) return res.send(err)
                res.json({ mensaje: 'Usuario editado con éxito' })
            })
    }
}

//Tipo Equipo

controlador.crearTipoEquipo = (req, res) => {
    console.log(req.body)
    Schemas.tipoEquipoConect.create(req.body, (err) => {
        res.send('Equipo creado con éxito.')
    })
}

controlador.traerTipoEquipos = (req, res) => {
    Schemas.tipoEquipoConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}
controlador.traerTipoEquipo = (req, res) => {
    let id = req.params.id
    GetOne.getTipoEquipo(id)
        .then(response => res.json(response))
        .catch(err => res.status(400).send(err))
}

controlador.modificarTipoEquipo = (req, res) => {
    if (req.body._id != null) {
        Schemas.tipoEquipoConect
            .updateOne({
                _id: req.body._id
            }, { $set: { nombre: req.body.nombre, estado: req.body.estado, fechaActualizacion: Date.now() } })
            .exec((err) => {
                if (err) return res.send(err)
                res.json({ mensaje: 'Usuario editado con éxito' })
            })
    }
}

//ESTADO Equipo

controlador.crearEstadoEquipo = (req, res) => {
    Schemas.estadoEquipoConect.create(req.body, (err) => {
        res.send('Estado creado con éxito.')
    })
}

controlador.traerEstadoEquipos = (req, res) => {
    Schemas.estadoEquipoConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}
controlador.traerEstadoEquipo = (req, res) => {
    let id = req.params.id
    GetOne.getEstadoEquipo(id)
        .then(response => res.json(response))
        .catch(err => res.status(400).send(err))
}

controlador.modificarEstadoEquipo = (req, res) => {
    if (req.body._id != null) {
        Schemas.estadoEquipoConect
            .updateOne({
                _id: req.body._id
            }, { $set: { nombre: req.body.nombre, estado: req.body.estado, fechaActualizacion: Date.now() } })
            .exec((err) => {
                if (err) return res.send(err)
                res.json({ mensaje: 'Estado editado con éxito' })
            })
    }
}

//MARCA.

controlador.crearMarca = (req, res) => {
    console.log(req.body)
    Schemas.marcasConect.create(req.body, (err) => {
        res.send('Marca creada con éxito.')
    })
}

controlador.traerMarcas = (req, res) => {
    Schemas.marcasConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}
controlador.traerMarca = (req, res) => {
    let id = req.params.id
    GetOne.getMarca(id)
        .then(response => res.json(response))
        .catch(err => res.status(400).send(err))
}

controlador.modificarMarca = (req, res) => {
    if (req.body._id != null) {
        Schemas.marcasConect
            .updateOne({
                _id: req.body._id
            }, { $set: { nombre: req.body.nombre, estado: req.body.estado, fechaActualizacion: Date.now() } })
            .exec((err) => {
                if (err) return res.send(err)
                res.json({ mensaje: 'Marca editada con éxito' })
            })
    }
}

//INVENTARIO.

controlador.crearInventario = (req, res) => {
    GetOne.getUser(req.body.usuarioCargo)
        .then(() => GetOne.getMarca(req.body.marca))
        .then(() => GetOne.getEstadoEquipo(req.body.estadoEquipo))
        .then(() => GetOne.getTipoEquipo(req.body.tipoEquipo))
        .then(() => GetOne.getSerialOrModel(req.body.serial, req.body.modelo))
        .then(() => {
            Schemas.inventarioConect.create(req.body, (err) => {
                if (err) res.send(err)
                res.send('Inventario creado con exito.')
            })
        }
        ).catch(err => res.send(err))
}

controlador.traerInventarios = (req, res) => {
    Schemas.inventarioConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}

controlador.modificarInventario = (req, res) => {
    if (req.body._id != null) {
        GetOne.getUser(req.body.usuarioCargo)
            .then(() => GetOne.getMarca(req.body.marca))
            .then(() => GetOne.getEstadoEquipo(req.body.estadoEquipo))
            .then(() => GetOne.getTipoEquipo(req.body.tipoEquipo))
            .then(() => GetOne.getSerialOrModel(req.body.serial, req.body.modelo))
            .then(() => {
                Schemas.inventarioConect
                    .updateOne({
                        _id: req.body._id
                    }, {
                        $set: {
                            serial: req.body.serial,
                            modelo: req.body.modelo,
                            descripcion: req.body.descripcion,
                            fotoEquipo: req.body.fotoEquipo,
                            precio: req.body.precio,
                            usuarioCargo: req.body.usuarioCargo,
                            marca: req.body.marca,
                            estadoEquipo: req.body.estadoEquipo,
                            tipoEquipo: req.body.tipoEquipo
                        }
                    })
                    .exec((err) => {
                        if (err) return res.send(err)
                        res.json({ mensaje: 'Inventario modificado con exito' })
                    })
            }
            ).catch(err => res.send(err))
    }
}

module.exports = controlador