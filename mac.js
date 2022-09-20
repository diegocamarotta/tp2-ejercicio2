const fs = require('fs')

let origen = './package.json'
let destino = './info.txt'

let campo1
let campo2
let campo3 



function getCont(ruta,cb){
     fs.readFile(ruta,'utf-8',cb)  
}

function getStat(ruta,cb){
    fs.stat(ruta,cb)
}

function setCont(ruta,contenido,cb){
    fs.writeFile(ruta,JSON.stringify(contenido, null, '\t'), cb)
}


getCont(origen,(error,datos) => {

    if(error) throw new Error(`Error al leer archivo: ${error.message}`)

    campo1 = datos
    campo2 = JSON.parse(datos)
                         
    getStat(origen,(error,datos) => {

        if(error) throw new Error(`Error al leer archivo: ${error.message}`)

        campo3 = datos.size

        let info = {
            contenidoStr: campo1,
            contenidoObj: campo2,
            size: campo3
        }
        console.log(info)

        
        setCont(destino,info,(error,datos) =>{
            
            if(error) throw new Error(`Error al escribir archivo: ${error.message}`)
            console.log(`Guardando informacion en el archivo ${destino}`)

        })
        
            
    })

})









