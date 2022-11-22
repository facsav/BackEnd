const Contenedor = require('./modulo')
const express = require('express')


const contenedor = new Contenedor ('./data.txt', 'utf-8')



const app = express()

const PORT = 8080

app.get('/', (req, res) =>{
    res.end(JSON.stringify(contenedor.getAll()))
})

const server = app.listen (PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log (`error en el servidor ${error}`))