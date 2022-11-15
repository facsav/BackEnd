class Contenedor {
    constructor () {
        this.productos = []
    }

    save (nombre, precio) {
        this.productos.push({nombre: nombre, precio: precio, id: this.productos.length+1})
    }

    getAll (){
        console.log(this.productos)
    }

    getById (id){
        console.log(this.productos.find(item => item.id === id ))
    }

    deleteById (id){
        const idParaEliminar = this.productos.findIndex(item => item.id === id)
        this.productos.splice (idParaEliminar, 1)
        return this.productos
    }

    deleteAll (){
        this.productos = []
    }
}

const programa = new Contenedor()

const prueba = require('./modulo.js')


console.log(prueba.prueba())