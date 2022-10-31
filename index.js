class CreadorDeUsuarios {
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
        this._libros = []
        this._mascotas = []
    }
    
}

let usuario1 = new CreadorDeUsuarios ()

usuario1._nombre='facundo'
usuario1._apellido='savio'
usuario1._libros=['viaje al centro de la tierra', 'el señor de los anillos']
usuario1._mascotas=['Kumo', 'Eluney']



function verNombre (){
    console.log(usuario1._nombre)

}

function verApellido (){
    console.log(usuario1._apellido)

}

function verMascotas (){
    console.log(usuario1._mascotas)

}

function verLibros (){
    console.log(usuario1._libros)

}


verNombre()
verApellido()
verMascotas()
verLibros()