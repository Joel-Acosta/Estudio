
const alicia = [10, 80, 75];
const bob = [90, 20, 25];
                 

 let concurso = {
    etapas : [],
    encontrarGanador : function (a, b) {
        let playerOne = 'alicia'
        let playerTwo = 'bob'
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
            for(let i = 0 ; i < a.length; i++ ){
                if(a[i] > b[i]){
                    puntosPrimerParticipante++
                    this.etapas.push(playerOne)
                }else if(b[i] > a[i]){
                    puntosSegundoParticipante++
                    this.etapas.push(playerTwo)
                }else{
                    console.log('this is a tie so no point given')
                }
            }
            if(puntosPrimerParticipante > puntosSegundoParticipante){
                this.ganador = playerOne
            }else if(puntosSegundoParticipante > puntosPrimerParticipante){
                this.ganador = playerTwo
            }else{
                console.log(`Its a tie between ${playerOne} and ${playerTwo}`);
                this.ganador = 'no one, ... cause its a tie'
            }
            return this.ganador
        }
  
    }
 
    console.log(`And the winner is: ${concurso.encontrarGanador(alicia, bob)}!!`) 

//extra


//ej1

function digitalHouse(a, b){
    for (let i = 1; i < 101; i++){
        if (i % a === 0 && i% b === 0){
            console.log('digital House')
        }else if (i % a === 0 ){
            console.log('digital')
        }else if (i % b === 0 ) {
            console.log('House')
        }else {
            console.log(i)
        }
    }
}

//ej2

function sumArray(array) {
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

//console.log(sumArray([10, 3, 10, 4]))

//ej 3

function join(array) {
    let total = array[0]
    for(let i = 1; i < array.length; i++){
        total += array[i]
    }
    return total
}

console.log(join(["h","o","l","a"]))

//ej


/* Deben crear una función llamada doubleFilter
 que reciba como parámetro un arreglo de objetos, un continente, y un número de población.
 La función filtra el arreglo solo con los países que sean del continente pasado por parámetro,
  y además, los que su población sea mayor o igual a la del parámetro.o 
 */

 /*  let paises = [
    {
      nombre: "argentina",
      continente: "sudamerica",
      poblacion: 40000000,
    },
    {
      nombre: "brasil",
      continente: "sudamerica",
      poblacion: 300000000,
    },
    {
      nombre: "venezuela",
      continente: "sudamerica",
      poblacion: 25000000,
    },
    {
      nombre: "chile",
      continente: "sudamerica",
      poblacion: 10000000,
    },
    {
      nombre: "australia",
      continente: "oceania",
      poblacion: 18000000,
    },
    {
      nombre: "españa",
      continente: "europa",
      poblacion: 29000000,
    },
    {
      nombre: "alemania",
      continente: "europa",
      poblacion: 33000000,
    },
    {
      nombre: "francia",
      continente: "europa",
      poblacion: 65000000,
    },
    {
      nombre: "portugal",
      continente: "europa",
      poblacion: 4000000,
    },
    {
      nombre: "grecia",
      continente: "europa",
      poblacion: 12000000,
    }
  ]


  function dobleFilter(array, cont, num) {
    let newArray = []
    for(let i = 0;i < array.length; i++){
        if(array[i]['continente'] === cont && array[i]['poblacion'] >= num){
            newArray.push(array[i])
        }
    }
    return newArray
  }

  console.log(dobleFilter(paises, "europa", 4000001)) */