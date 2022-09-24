//Ej 1

let paises = [
    {
      nombre: "Argentina",
      continente: "Sudamérica",
      poblacion: 40000000
    },
  {
      nombre: "Colombia",
      continente: "Sudamérica",
      poblacion: 50372000
    },
  
    {
      nombre: "Brasil",
      continente: "Sudamérica",
      poblacion: 300000000
    },
    {
      nombre: "Etiopía",
      continente: "África",
      poblacion: 15000000
    },
    {
      nombre: "Chile",
      continente: "Sudamérica",
      poblacion: 10000000
    }
  ];
  
  
  
  function demo(array, string, number) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].continente === string && array[i].poblacion >= number) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  console.log(demo(paises, 'Sudamérica', 20000000));
  
  
  //Ej2
  
  let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];
  
  

function asc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr
}

function desc(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
    return arr
  }



  
function bubbleSort(arr, string = 'asc') {
    string = string.toUpperCase();
    if(string === 'ASC'){
        asc(arr)
    }else if(string === 'DESC'){
        desc(arr)
    }else {
        return 'no ingreso el orden'
    }
    return arr;
  }

  /* console.log(arrayDeNumeros)
  console.log(bubbleSort(arrayDeNumeros, 'asc') );
  console.log(bubbleSort(arrayDeNumeros, 'desc') );
 */

  //Ej3

  let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

/*  */
function sum (arr) {
    let total = arr[0][0]
    for(let i = 1; i < arr[0].length; i++){
        total += arr[0][i]
    }return total
 }


function pairs (arr) {
    let array = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 === 0){
               array.push(arr[i][j]) 
            }
        }
    }return array
 }

 console.log(pairs(matriz));
console.log(sum(matriz));