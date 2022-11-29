const Contenedor = require('./modulo')
const contenedor = new Contenedor ('./data.txt', 'utf-8')

const express = require('express')

const app = express()



// Hago la petición 
// app.get ('/', async (req, res)=>{
//     await res.send(await contenedor.getAll() )
// })


app.get ('/productoRandom', async (req, res)=>{
    await res.send(await contenedor.getRandom() )
})

app.get ('/productos', async (req, res)=>{
    await res.send(await contenedor.getAll() )
})

// Defino el puerto 
const PORT = 8082


// Creo la escucha al servidor
const server = app.listen(PORT, ()=>{
    console.log(`Server escuchando en el puerto ${server.address().port}`)
})


// Defino el error en el caso de que haya uno
server.on ('error', error => console.log(`Error en el server =========> ${error}`))




