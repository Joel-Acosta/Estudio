
//Ejercicio 1

/* function matrixRanmdom(num) { */
 /**
  *  Esta es una matriz cuadrada por tanto num referencia cant de filas como de columnas
  *  creo un array llamado matriz al que
  *  le voy a pushear tantos arrays como sea el valor de num,
  *  y estos arrays tendran num cantidad de elementos dentro
  */
/*   let matrix = [];
  for (let i = 0; i < num ; i++) { // for que define la cantidad de filas
    let array = []; // este es el array que se pushea por cada fila
    for (let j = 1; j <= num; j++) { // for que define la cantidad de columnas
      array.push(Math.floor(Math.random() * 100)); 
    }
    matrix.push(array);
  }
  return matrix;
}

let matrizR = matrixRanmdom(5);
console.table(matrizR);



function sumDeMatriz(matriz){
    let sum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            sum += matriz[i][j];
        }
    }return sum;

}

 console.log('la suma de todos los valores de la matriz es de: ' +sumDeMatriz(matrizR)) */


//Ejercicio 2


function matrix(num) {
  let matrix = [];
  for (let i = 0; i < num * num; i += num) {
    let array = [];
    for (let j = 1; j <= num; j++) {
      array.push(j + i);
    }
    matrix.push(array);
  }
  return matrix;
}

let matriz = matrix(10);
console.table(matriz);
 

/* 
// Ejercicio 3

function sumaIzq(matriz) {
  let sum = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i === j) {
        sum += matriz[i][j];
      }
    }
  }
  return sum;
}

function sumaDer(matriz) {
  let sum = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i + j == matriz.length - 1) {
        sum += matriz[i][j];
      }
    }
  }
  return sum;
}


    console.table('suma desde la derecha: '+ sumaDer(matrizR));
    console.table('suma desde la izquierda: '+ sumaIzq(matrizR));
 */
    function diagonal(arr) { 
      let a = 0
      for (let i = 0; i < arr.length; i ++){ 
          a += (arr[i][i])
          console.log(a);
        }
         return a
  
}
console.log(diagonal(matriz))
  
function diagonalDer(arr) { 
  let a = 0
  for (let i = 0; i < arr.length; i ++){ 
      a += (arr[i][arr.length - i -1])
      console.log(a);
    }
     return a

}


  console.log(diagonalDer(matriz))