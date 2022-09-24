/* 1. Crear una matriz de 3 x 4

2. Crear una funcion que suma todos los valores de la matriz que sean pares

3. Crear una funcion que cambie todos los valores de la matriz que sean
 multiplos de 5 por un numero 1

4. Crear una funcion que genere un nuevo 
array donde se guarden todos los numeros impares de
la matriz

5. Crear una funcion que retorne la multiplicacion
 de todos los elementos de la fila 1
 */

 let matriz = [
    [1, 3, 5, 7],
    [2, 15, 4, 3],
    [10, 6, 20, 2]
 ]

 //console.table(matriz)
 function sumaPares(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 === 0){
                total += arr[i][j]
            }
        }
    }return total
 }

 function cambio(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 5 === 0){
                arr[i][j] = 1
            }
        }
    }return arr
 }

// console.table(cambio(matriz))

 function impares (arr) {
    let array = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 !== 0){
               array.push(arr[i][j]) 
            }
        }
    }return array
 }

 console.log(impares(matriz));


 function multiplicacion (arr, fila) {
    let total = arr[fila][0]
    for(let i = 1; i < arr[fila].length; i++){
        total *= arr[fila][i]
    }return total
 }

 //console.log(`Ej 2) La suma de todos los pares es de : ${sumaPares(matriz)}`);
 //console.log(`\nEj 3) La matriz con los valores multiplo de 5 cambiada a 1 es :[${cambio(matriz)}]`);
 //console.log(`\nEj 4) EL array de impares es: [${impares(matriz)}]`);
 //console.log(`\nEj 5) El resultado de multiplicar todos los elementos de la primer fila es de: ${multiplicacion(matriz)}`);

 /*
 *Bubble Sort:
1. Armá un array llamado estudiantes de 3 objetos,
 que cada uno de ellos tenga: nombre, edad y notaFinal.
2. Crear una funcion que ordene esos objetos por edad de forma ascendente
3. Crear una funcion que reciba por parametro el array y un string
 que indique de que modo se deberà ordenarlo (de forma ascendente o descendente)
4. Crear una funcion que retorne un nuevo array.
 Este deberá contener solo los objetos cuya notaFinal sean mayores o iguales a 7
5. Agregar un atributo id a cada objeto que inicie en 1 y sea secuencial

 */

 let estudiantes = [
  {
    nombre: "Nico",
    edad: 25,
    notaFinal: 9,
  },
  {
    nombre: "Luis",
    edad: 28,
    notaFinal: 6,
  },
  {
    nombre: "Pascual",
    edad: 55,
    notaFinal: 7,
  },
];

function ordenXEdad(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].edad > arr[j + 1].edad) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

//console.log(ordenXEdad(estudiantes));

function ordenXEdadMejorado(arr, string = "asc") {
  string = string.toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (string === "ASC") {
        if (arr[j].edad > arr[j + 1].edad) {
          let aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      } else if (string === "DESC") {
        if (arr[j].edad < arr[j + 1].edad) {
          let aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
  }
  return arr;
}

console.log(ordenXEdadMejorado(estudiantes));

function aprobados(arr){
    let aprobados = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].notaFinal >= 7){
            aprobados.push(arr[i])
        }
    }return aprobados
}

console.log(aprobados(estudiantes));

function id(arr){
    let id = 1
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = id + 1
    }return arr
}

console.log(id(estudiantes)); 


