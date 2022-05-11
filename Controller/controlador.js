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

controlador.modificarUsuario = (req, res) => {
    if (req.body._id != null){
        Schemas.usuarioConect
        .updateOne({
            _id:req.body._id
        },{$set:{usuarios:req.body.usuarios, email:req.body.estado, estado:req.body.estado , fechaActualizacion:Date.now()}})
        .exec((err) => {
            if (err) return res.send(err)
            res.json({mensaje:'Usuario editado con éxito'})
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

controlador.traerTipoEquipo = (req, res) => {
    Schemas.tipoEquipoConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}

controlador.modificarTipoEquipo = (req, res) => {
    if (req.body._id != null){
        Schemas.tipoEquipoConect
        .updateOne({
            _id:req.body._id
        },{$set:{nombre:req.body.nombre, estado:req.body.estado, fechaActualizacion:Date.now()}})
        .exec((err) => {
            if (err) return res.send(err)
            res.json({mensaje:'Usuario editado con éxito'})
        })
    }  
}

//ESTADO Equipo

controlador.crearEstadoEquipo = (req, res) => {
    console.log(req.body)
    Schemas.estadoEquipoConect.create(req.body, (err) => {
        res.send('Estado creado con éxito.')
    })
}

controlador.traerEstadoEquipo = (req, res) => {
    Schemas.estadoEquipoConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}

controlador.modificarEstadoEquipo = (req, res) => {
    if (req.body._id != null){
        Schemas.estadoEquipoConect
        .updateOne({
            _id:req.body._id
        },{$set:{nombre:req.body.nombre, estado:req.body.estado, fechaActualizacion:Date.now()}})
        .exec((err) => {
            if (err) return res.send(err)
            res.json({mensaje:'Estado editado con éxito'})
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

controlador.traerMarca = (req, res) => {
    Schemas.marcasConect
        .find()
        .exec((err, datos) => {
            if (err) return res.send(err)
            res.json(datos)
        })
}

controlador.modificarMarca = (req, res) => {
    if (req.body._id != null){
        Schemas.marcasConect
        .updateOne({
            _id:req.body._id
        },{$set:{nombre:req.body.nombre, estado:req.body.estado, fechaActualizacion:Date.now()}})
        .exec((err) => {
            if (err) return res.send(err)
            res.json({mensaje:'Marca editada con éxito'})
        })
    }  
}

module.exports = controlador