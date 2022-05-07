const mongoose = require('mongoose')
const schema = require('./schemas')
const uri = "mongodb+srv://IngenieriaWeb2:fBfIW7ivJEebigme@cluster0.xx0gm.mongodb.net/IngenieriaWeb2?retryWrites=true&w=majority";
const Schema = mongoose.Schema
let usuarioConect;

class Schemas {
    usuarioConect = null
    constructor(){
        this.usuarios()
        mongoose.connect(uri)
    }
    usuarios(){
        let usuario = new Schema(schema.usuarios,{collection:'usuarios'})
        this.usuarioConect = mongoose.model('usuarios', usuario)

    }
}

module.exports = Schemas