const fs = require('fs')

let origen = './package.json'
let destino = './info.txt'

let campo1
let campo2
let campo3 

function getCont(ruta) {
    return new Promise((resolve,reject) => {
        fs.readFile(ruta,'utf-8', (error,datos) => {
            if(error) reject(Error(`Error al leer archivo: ${error.message}`))
            else resolve(datos)
        })
    })
}

function getSize(ruta) {
    return new Promise((resolve,reject) => {
        fs.stat(ruta, (error,datos) => {
            if(error) reject(Error(`Error al leer archivo: ${error.message}`))
            else resolve(datos)
        })
    })
}
function setCont(ruta,contenido) {
    return new Promise((resolve,reject) => {
        fs.writeFile(ruta,JSON.stringify(contenido, null, '\t'),(error,datos) => {
            if(error) reject(Error(`Error al escribir archivo: ${error.message}`))
            else resolve(datos)
        })
    })
}


getCont(origen)
.then( datos => {
    campo1 =  datos
    campo2 = JSON.parse(datos)
    return getSize(origen)
})
.then( datos => {
    campo3 = datos.size 
    let info = {
        contenidoStr: campo1,
        contenidoObj: campo2,
        size: campo3
    }
    console.log(info) 
    console.log(`Guardando informacion en el archivo ${destino}`)   
    return setCont(destino,info)
})
.catch( error => console.log(error)) 