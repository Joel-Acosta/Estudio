/*Ejercicio 1: 
Realizar una función que reciba por parámetro dos valores numéricos. 
Si ambos números recibidos son pares y distintos de 0 entonces se deberá 
retornar su división. En cambio, si ambos números recibidos son impares entonces 
se deberá retornar la suma. Para cualquier otro caso, retornar (-1)*/

function comparacion(num1, num2) {
    let total = 0;
    if (num1 % 2 == 0 && num2 % 2 == 0 && num1 != 0 && num2 != 0) {
        total = num1 / num2
    }else if (num1 % 2 != 0 && num2 % 2 != 0 ){
        total = num1 + num2
    }else{
        total = -1
    }

    return total
}

/* console.log(comparacion(12, 22))
console.log(comparacion(12, 0))
console.log(comparacion(13, 11)) */


/**Ejercicio 2:
Realizar una función que reciba dos valores por parámetro,  el primero un booleano y el segundo un número entero:
Si el primer parámetro es true y el segundo es múltiplo de 5, deberá retornar el doble del segundo parámetro.
Si el primer parámetro es true y el segundo no es múltiplo de 5, deberá retornar la mitad del segundo parámetro.
Si el primer parámetro es false, deberá retornar el valor del segundo parámetro.
 */

function esMultiplo(bool, num){
    if(bool && !(num % 5)){
        return num * 2
    }else if(bool && num % 5 != 0){
        return num / 2
    }else if(!bool){
        return num
    }

}

/* console.log(esMultiplo(true, 10))
console.log(esMultiplo(false, 10))
console.log(esMultiplo(true, 12)) */


/**
 Realizar una función que reciba por parámetro el array de artículos,
  un string que represente al tipo (Deportivo o Moda) y  un valor numérico que represente al precio máximo ,
   deberá retornar un nuevo array con los artículos que cumplan con estas condiciones. 
 */

let articulos = [
    {
        id: 4 ,
        precio : 3321,
        tipo : "Deportivo",
        nombre: "Zapatillas"
    },
    {
        id: 22 ,
        precio: 4482,
        tipo : "Moda",
        nombre: "Zapatillas"
    },
    {
        id: 1 ,
        precio: 3600,
        tipo : "Moda",
        nombre: "Zapatos"
    },
    {
        id: 44 ,
        precio: 8889,
        tipo : "Moda",
        nombre: "Remera"
    },
]
 

function filtrarArticulos(array, propiedad, valor){
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].tipo === propiedad && array[i].precio < valor){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

console.log(filtrarArticulos(articulos, 'Moda', 5000))