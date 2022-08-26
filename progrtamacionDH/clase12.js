
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