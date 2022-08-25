const prompt = require("prompt-sync")({ sigint: true });

function sumar (num1, num2) {
    return num1 + num2
}

function restar (num1, num2) {
    return num1 - num2
}

function multiplicar (num1, num2) {
    return num1 * num2
}

function dividir (num1, num2) {
    return num1 / num2
}

function cuadradoDeUnNumero (num) {
    return multiplicar(num, num)
}

/* function promedioDeTresNumeros (num1, num2, num3) {
    let resultado = sumar(num1, num2)
    resultado = sumar(resultado, num3)
    resultado = dividir(resultado, 3)
    return resultado 
} */

function promedioDeTresNumeros (num1, num2, num3)
{
    let sum = sumar(num1, num2)
    return sumar(sum, num3)/3
}

function calcularPorcentaje (num, porcentaje) {
    return multiplicar (num, porcentaje)/ 100

}

function generadorDePorcentaje (num1, num2) {
    return multiplicar(num1, 100)/ num2
}



let numero1 = parseInt(prompt("ingrese un numero: "))
let numero2 = parseInt(prompt("ingrese otro numero: "))
let numero3 = parseInt(prompt("ingrese numero que quiere elevar al cubo: "))
let numero4 = parseInt(prompt("ingrese oltro numero mas: "))

console.log("----------Testeo de Operaciones/ Calculadora--------------")


console.log("El resultado de la suma es:  " + sumar(numero1, numero2))
console.log("El resultado de la resta es:  " + restar(numero1, numero2))
console.log("El resultado de la multiplicacion es:  " + multiplicar(numero1, numero2))
console.log("El resultado de la division es:  " + dividir(numero1, numero2))
console.log("El resultado de elevar al cubo "+ numero3 + " es: " + cuadradoDeUnNumero(numero3))
console.log("El resultado de promedio entre "+ numero1 + " " + numero2 + " " + numero4 + " es: " + Math.floor(promedioDeTresNumeros(numero1, numero2, numero4)))
console.log("El resultado de el porcentaje de "+ numero2 + " en " + numero1 + " es: " + Math.floor(calcularPorcentaje(numero1, numero2)))
console.log("El resultado de porcentge entre  "+ numero1+ " y " + numero2 +  " es: " + Math.floor(generadorDePorcentaje(numero1, numero2)) + " %")