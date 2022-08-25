const prompt = require("prompt-sync")({ sigint: true });


let nombreDeUsuario = prompt("por favor ingresa tu nombre de usuario : ")

console.log("Hola " +  nombreDeUsuario + ", bienvenid@!")
