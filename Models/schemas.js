const schemas = {

    tipoEquipo:{
        nombre:'String',
        estado:'Boolean',
        fechaCreacion:'Number',
        fechaActualizacion:'Number',
    },
    estadoEquipo:{
        nombre:'String',
        estado:'Boolean',
        fechaCreacion:'Number',
        fechaActualizacion:'Number'
    },
    marcas:{
        nombre:'String',
        estado:'Boolean',
        fechaCreacion:'Number',
        fechaActualizacion:'Number'
    },
    inventario:{
        serial:'String',
        modelo:'String',
        descripcion:'String',
        fotoEquipo:'String',
        precio:'Number',
        usuarioCargo:'String',
        marca:'String',
        estadoEquipo:'String',
        tipoEquipo:'String'
    },
    usuarios:{
        usuarios:'String',
        email:'String',
        estado:'Boolean',
        fechaCreacion:'Number',
        fechaActualizacion:'Number'
    }
}

module.exports = schemas 