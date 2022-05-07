const express = require('express')
const rutas = require('./Routers/rutas')
const port = 3000
const app = express()

app.use(express.json())

app.use(rutas)
app.listen(port, function(){
    console.log('Seridor montado puerto 3000')
})