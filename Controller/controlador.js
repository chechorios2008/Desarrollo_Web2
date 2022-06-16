const res = require('express/lib/response')
const Schema = require('../Models/model')
const schemas = require('../Models/schemas')
const { usuarios} = require('../Models/schemas')
const Schemas = new Schema()
const Consultas = require('./funtionController')
Schemas.conectar()
function controlador() { }

const GetOne = new Consultas(Schemas)
controlador.crearUsuarios = (req, res) => {
    let usuario = {
        usuarios: req.body.usuarios,
        email: req.body.email,
        estado: req.body.estado,
        fechaCreacion: Date.now(),
        fechaActualizacion: Date.now()
    }
    Schemas.usuarioConect.create(usuario, (err, resp) => {
        res.json({ mensaje: 'Usuario creado con éxito.', dato: resp })
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
    console.log(id)
    GetOne.getUser(id)
        .then(response => res.json(response))
        .catch(err => res.status(400).send(err))
}

controlador.modificarUsuario = (req, res) => {
    if (req.body._id != null) {
        Schemas.usuarioConect
            .updateOne({
                _id: req.body._id
            }, { $set: { usuarios: req.body.usuarios, email: req.body.email, estado: req.body.estado, fechaActualizacion: Date.now() } })
            .exec((err) => {
                if (err) return res.send(err)
                res.json({ mensaje: 'Usuario editado con éxito' })
            })
    }
}

//Tipo Equipo

controlador.crearTipoEquipo = (req, res) => {
    elemento = {
        nombre: req.body.nombre,
        estado: req.body.estado,
        fechaCreacion: Date.now(),
        fechaActualizacion: Date.now()
    }
    Schemas.tipoEquipoConect.create(elemento, (err, resp) => {
        res.json({ mensaje: 'Equipo creado con éxito.', dato: resp })
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
                res.json({ mensaje: 'Tipo equipo editado con éxito' })
            })
    }
}

//ESTADO Equipo

controlador.crearEstadoEquipo = (req, res) => {
    elemento = {
        nombre: req.body.nombre,
        estado: req.body.estado,
        fechaCreacion: Date.now(),
        fechaActualizacion: Date.now()
    }
    Schemas.estadoEquipoConect.create(elemento, (err, resp) => {
        res.json({ mensaje: 'Estado quipo creado con exito', dato: resp })
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
    elemento = {
        nombre: req.body.nombre,
        estado: req.body.estado,
        fechaCreacion: Date.now(),
        fechaActualizacion: Date.now()
    }
    Schemas.marcasConect.create(elemento, (err, resp) => {
        res.json({ mensaje: 'Marca creada con éxito.', dato: resp })
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

controlador.getInventarioAll = (req, res) => {
    Schemas.inventarioConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            const promises = []
            datos.map((dat)=>{
                promises.push(GetOne.getAllInventario(dat))
            })
            Promise.all(promises).then(respuesta=> res.json(respuesta))
        })
}
module.exports = controlador