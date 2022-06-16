class GetOne {
    constructor(Schemas){
        this.Schemas=Schemas
    }
    getUser(id) {
        return new Promise((resolve, reject) => {
            this.Schemas.usuarioConect
                .findOne({ _id: id })
                .exec((err, datos) => {
                    if (err) {
                        reject(err)
                    } else {
                        if(datos!= null){
                            resolve(datos)
                        }else if(err){
                            reject(err)
                        }else{
                            reject("Usuario no existe")
                        }
                    }
                })
        })
    }
    getTipoEquipo(id) {
        return new Promise((resolve, reject) => {
            this.Schemas.tipoEquipoConect
                .findOne({ _id: id })
                .exec((err, datos) => {
                    if(datos!= null){
                        resolve(datos)
                    }else if(err){
                        reject(err)
                    }else{
                        reject("Tipo Equipo no existe")
                    }
                })
        })
    }
    getEstadoEquipo(id) {
        return new Promise((resolve, reject) => {
            this.Schemas.estadoEquipoConect
                .findOne({ _id: id })
                .exec((err, datos) => {
                    if(datos!= null){
                        resolve(datos)
                    }else if(err){
                        reject(err)
                    }else{
                        reject("Estado equipo no existe")
                    }
                })
        })
    }
    getMarca(id) {
        return new Promise((resolve, reject) => {
            this.Schemas.marcasConect
                .findOne({ _id: id })
                .exec((err, datos) => {
                    if(datos!= null){
                        resolve(datos)
                    }else if(err){
                        reject(err)
                    }else{
                        reject("Marca no existe")
                    }
                })
        })
    }
    getSerialOrModel(serial, modelo){
        return new Promise((resolve, reject) => {
            this.Schemas.inventarioConect
                .find({ $or:[{serial},{modelo}] })
                .exec((err, datos) => {
                    if(datos.length==0){
                        resolve(datos)
                    }else if(err){
                        reject(err)
                    }else{
                        reject("Ya existen productos con el serial y/o modelo ingresado")
                    }
                })
        })
    }
    getAllInventario(element){
        let data={
            ...element
        }
        return new Promise((resolve,reject)=>{
            this.Schemas.marcasConect.findOne({ _id: element.marca })
            .exec((err,marc)=>{
                if(err) resolve(err)
                data._doc.nomMarca=marc.nombre
                this.Schemas.usuarioConect.findOne({ _id:element.usuarioCargo })
                .exec((err,usuario)=>{
                    if(err) resolve(err)
                    data._doc.nomUsuario=usuario.usuarios
                    this.Schemas.estadoEquipoConect.findOne({ _id: element.estadoEquipo})
                    .exec((err,estadoEquipo)=>{
                        if(err) resolve(err)
                        data._doc.nomEstadoEquipo = estadoEquipo.nombre
                        this.Schemas.tipoEquipoConect.findOne({_id:element.tipoEquipo})
                        .exec((err,tipoEquipo)=>{
                            if(err) resolve(err)
                            data._doc.nomTipoEquipo = tipoEquipo.nombre
                            resolve(data._doc)
                        })
                    })
                })
            })
        })
    }
}
module.exports =GetOne