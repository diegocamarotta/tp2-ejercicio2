const fs = require('fs')

let origen = './package.json'
let destino = './info.txt'

let campo1
let campo2
let campo3 

function getCont(ruta){
    try {
                     
        let datos = fs.readFileSync(ruta,'utf-8')
                
        return datos
    }
    catch(error) {
        console.log(`Error abriendo el archivo: ${error.message}`)
    }
}


function getStat(ruta){
    try {
                       
        let datos = fs.statSync(ruta)

        return datos
        
    }
    catch(error) {
        console.log(`Error abriendo el archivo: ${error.message}`)
    }
}

function setCont(ruta,contenido){
    try {
        fs.writeFileSync(ruta,JSON.stringify(contenido, null, '\t'))
                
        }
        catch(error) {
            console.log(`Error escribiendo el archivo: ${error.message}`)
        }

}

let datos = getCont(origen)
campo1 =  datos
campo2 = JSON.parse(datos)
campo3 = getStat(origen).size

let info = {
    contenidoStr: campo1,
    contenidoObj: campo2,
    size: campo3
   }

console.log(info)

console.log(`Guardando informacion en el archivo ${destino}`)

setCont(destino,info)



