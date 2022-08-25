const prompt = require("prompt-sync")({ sigint: true });
/* 
function FizzBuzz(num1, num2, num3) {
    for (let i = 1; i <= num3; i++){
        if(i % num1 == 0 && i % num2 == 0){
            console.log("FizzBuzz")
        }else if(i % num2 == 0){
            console.log("Buzz")
        }else if(i % num1 == 0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}


FizzBuzz(3, 5, 17) */

/* 
function rango (numI, numF, sum){
    let array = []
    for(let i = numI; i <= numF; i += sum) {
        array.push(i)
    }
    return array

}

console.log(rango(1, 30, 2)) */

/* 1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().
2) Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".
3) Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.
4) Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario

ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.
5) Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"
6) Escribí un programa que imprima los números pares del 0 al
100.
7) Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];
8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.
9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.

11) Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar.
12) Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado. */



/* let frase = prompt("ingrese frase")
console.log(frase)

 */


/* function random (){
    let numero = Math.floor(Math.random() * 10);
    let adivinar = parseInt(prompt("ingrese numero"))
    if(adivinar == numero){
        console.log("Felicitaciones, ese era!")
    }else{
        console.log("Lo siento, intenta nuevamente!" )
    }

}


random() */


/* for(let i = 0; i <= 100 ; i += 2){
    console.log(i)
} */

/* const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];
for (let) */

/* Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras
 */

/* function completarNum(usuario){
    let diferencia = 0
    if(usuario < 10 ) {
        diferencia = 10 - usuario
        console.log( `te falta: ${diferencia} para llegar a un numero de dos cifras`)
    }else {
        diferencia = 100 - usuario
        console.log( `te falta: ${diferencia} para llegar a un numero de tres cifras`)
    }
    
}

let usuario = parseInt(prompt("ingrese un numero menor a 100: "))


completarNum(usuario) */

/* function promedio(num){
    let suma = 0
    for (let i = 1 ; i <= num; i++){
        let nota = parseInt(prompt("ingrese la nota: "))
        suma += nota
    }
    console.log(suma / num)
}

promedio(4) */

/* let num = parseInt(prompt("ingrese un numero: "))
function sumatoria (num){
    let total = ((1 + num) / 2 * num )
    return total
}

console.log(sumatoria(num)) */

/* let num = parseInt(prompt("ingrese un numero: " ))
function mayor(num){
    if(num > 500){
        return num * 0.18
    }else{
        return num
    }
}

console.log(mayor(num)) */