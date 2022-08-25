const prompt = require("prompt-sync")({ sigint: true });


/* Ejercicio:


(OJO: recordá que JavaScript es CASE SENSITIVE, osea que las mayúsculas y minúsculas son valores diferentes)
​
Escribí un código que chequee si tenés algun amigo llamado Roberto dentro de tu arreglo de amigos.
​
Si tenés un amigo llamado Roberto, tenés que ejecutar un console.log que diga "ah si! me había olvidado de beto!"
​
Si no tenés un amigo llamado Roberto, tu código tiene que ejecutar un console.log que diga "… tengo que conseguirme algún amigo Roberto!"
Transformá tu código en una función que pueda tomar cualquier nombre por parámetro y chequear si tenés ese amigo o no (repitiendo las mismas frases que en el punto anterior para cada caso).
 */

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]
let nombre = prompt("ingresame el nombre que quieras chequear: ")

function estaAmigo(array, nombre){
    if( array.includes(nombre)){
        console.log(`ah si! me había olvidado de ${nombre}!`)
    }else{
        console.log(`… tengo que conseguirme algún amigo ${nombre}!`)
    }
}

estaAmigo(amigos, nombre)
