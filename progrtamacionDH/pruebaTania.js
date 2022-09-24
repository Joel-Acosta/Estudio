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
//console.log(demo(paises, 'Sudamérica', 20000000));


//Ej2

let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

function bubble