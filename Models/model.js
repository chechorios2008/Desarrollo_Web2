const mongoose = require('mongoose')
const schema = require('./schemas')
const uri = "mongodb+srv://IngenieriaWeb2:fBfIW7ivJEebigme@cluster0.xx0gm.mongodb.net/IngenieriaWeb2?retryWrites=true&w=majority";
const Schema = mongoose.Schema
//let usuarioConect;

class Schemas {
    usuarioConect = null
    tipoEquipoConect =null
    estadoEquipoConect=null
    marcasConect=null
    inventarioConect=null
    constructor(){
        this.usuarios()
        this.tipoEquipo()
        this.estadoEquipo()
        this.marcas()
        this.inventario()
    }
    async conectar(){
        await mongoose.connect(uri)
    }
    desconectar(){
        mongoose.disconnect()
    }
    usuarios(){
        let usuario = new Schema(schema.usuarios,{collection:'usuarios'})
        this.usuarioConect = mongoose.model('usuarios', usuario)
    }
    tipoEquipo(){
        let tipoEquipo = new Schema(schema.tipoEquipo,{collection:'tipoEquipo'})
        this.tipoEquipoConect = mongoose.model('tipoEquipo', tipoEquipo)
    }
    estadoEquipo(){
        let estadoEquipo = new Schema(schema.estadoEquipo,{collection:'estadoEquipo'})
        this.estadoEquipoConect = mongoose.model('estadoEquipo', estadoEquipo)
    }
    marcas(){
        let marcas = new Schema(schema.marcas,{collection:'marcas'})
        this.marcasConect = mongoose.model('marcas', marcas)
    }
    inventario(){
        let inventario = new Schema(schema.inventario,{collection:'inventario'})
        this.inventarioConect = mongoose.model('inventario', inventario)
    }
}

module.exports = Schemas