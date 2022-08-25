/* 1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */



/*
function diezSiguientes (num){
    let valor = num
    for(let i = 0; i < 10; i++){
        valor++
        console.log(valor)
    }
}
diezSiguientes(13)
 */



/* 
for(let i = 6; i < 20; i+= 3){
    console.log(i)
} */

 let total = 0
for (let i = 0; i < 100; i++){
    total += i + 1
    
} 

/* function sumatoria (num){
    let total = ((1 + num) / 2 * num )
    return total
}


console.log(sumatoria(5000))
 */


/* function factorial (num){
    let resultado = num
    for (let i = 1; i < num; i++){
        resultado *= i
    }

    return resultado
}

console.log(factorial(10)) */


function fibonacci (num) {
    let anterior = 1
    let actual = 1
    let aux = 0
    console.log(aux)
    console.log(actual)

    while (actual <= num){
        aux = actual
        actual = actual + anterior
        anterior = aux
        console.log(anterior)
    }      
} fibonacci(19)



/* 
function numerosSiguientes(numero) {
    for (let i = 0; i < 10; i++){
   console.log(numero++ + 1)
}
return 
}

numerosSiguientes(5) */


