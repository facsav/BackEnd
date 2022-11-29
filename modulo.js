const fs = require('fs')

class Contenedor {
    constructor (url) {
        this.url = url
    }

    

    async getAll(){
        try {
            const data = await fs.promises.readFile(this.url, 'utf-8')
            const listado = await this.start() 
            return listado
            console.log(listado)

        } catch (error) {
            return []
        }
    }

    async getRandom (){
        try{

            // defino un numero random
            const listado = await this.start() 
            let min = 1
            let max = listado.length
            const numeroRandom = Math.random()
            const numero = Math.floor(numeroRandom * (max - min + 1)) + min
            
            // le paso como parametro a la funcion get by id el numero random ya que ese seria el id random 
            return this.getById(numero)

        }
        catch (error){
            console.log(error)
        }
    }

   async start(){
        try {
            const data = await fs.promises.readFile(this.url, 'utf-8')
            return JSON.parse(data)
            

        } catch (error) {
            return []
        }
    }

    async save (obj){
        // llamo al array 
        const listado = await this.start() 
        
        let nuevoId 
        
        if(listado.length == 0){
            nuevoId = 1
        }
        else{
            nuevoId = listado[listado.length -1].id + 1
        }
        
        // defino el objeto
        const objeto = {...obj, id:nuevoId }

        // pusheo 
        listado.push(objeto)

        try {
            const data = await fs.promises.writeFile(this.url, JSON.stringify(listado, null,2))
            return nuevoId
  
        } catch (error) {
            
        }
    }


    async getById (id){
    const listado = await this.start()
    console.log(listado.find(item => item.id === id ))
    return listado.find(item => item.id === id )
    }

    async deleteById (id){
        const listado = await this.start()
        const idParaEliminar = listado.filter(item => item.id != id)
        const data = await fs.promises.writeFile(this.url, JSON.stringify(idParaEliminar, null,2))

    }

    async deletAll (){
        const arrayVacio = []
        try {
           await fs.promises.writeFile(this.url, JSON.stringify(arrayVacio)) 
        } catch (error) {
            throw new Error (error)
        }
        
    }
 
}

module.exports = Contenedor

