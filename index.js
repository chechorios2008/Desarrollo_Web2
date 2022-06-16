const express = require('express')
const cors = require('cors')
const rutas = require('./Routers/rutas')
const port = 3030
const app = express()

app.use(cors())
app.use(express.json())

app.use(rutas)
app.listen(port, function(){
    console.log('Seridor montado puerto '+port)
})