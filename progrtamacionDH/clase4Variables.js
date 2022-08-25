const prompt = require("prompt-sync")({ sigint: true });


//mario

let punto = 0
let monedas = 0
let nivel = 1
let numMundo = 1
let tiempoRestante = 120
let cantidadDeVidas = 3

console.log( cantidadDeVidas == 0)
cantidadDeVidas = cantidadDeVidas - 1
console.log(cantidadDeVidas == 0)
console.log(cantidadDeVidas)


// persona

let nombre = "Sofia"
let diaNacimiento = 28
let mesNaciemiento = 8
let vivo = true

console.log(nombre)
console.log(vivo)
console.log(diaNacimiento)

console.log(`${nombre} ${vivo} ${diaNacimiento}`)

let name = prompt("ingrese su nombre")
console.log(`nombre: ${name}`)
