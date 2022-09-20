const { executionAsyncResource } = require('async_hooks')
const fs = require('fs')
const { errorMonitor } = require('stream')

let origen = './package.json'
let destino = './info.txt'

let campo1
let campo2
let campo3 
/*
function getCont(ruta) {
    return new Promise((resolve,reject) => {
        fs.readFile(ruta,'utf-8', (error,datos) => {
            if(error) reject(Error(`Error al leer archivo: ${error.message}`))
            else resolve(datos)
        })
    })
}
*/
function getCont(ruta) {
    return fs.promises.readFile(ruta,'utf-8')  
}

function getStat(ruta) {
    return fs.promises.stat(ruta)
}
function setCont(ruta,contenido) {
    return fs.promises.writeFile(ruta,JSON.stringify(contenido, null, '\t'))
}

async function main() {
    let info
    try {
        let datos = await getCont(origen)
        campo1 = datos
        campo2 = JSON.parse(datos)
    
        datos = await getStat(origen)
        campo3 = datos.size 
        info = {
            contenidoStr: campo1,
            contenidoObj: campo2,
            size: campo3
        }
    
        console.log(info) 
    } catch (error) {
        console.log(`Error leyendo el archivo: ${error.message}`)
    }
    try {
        console.log(`Guardando informacion en el archivo ${destino}`)   
        await setCont(destino,info)
    } catch (error) {
        console.log(`Error escribiendo el archivo: ${error.message}`)
    }
    




  

}

main()
