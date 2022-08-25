const prompt = require("prompt-sync")({ sigint: true });


let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let animadas = ["toy story", "finding nemo", "kungfu panda", "wally", "fortnite"]


 function mayuscula (array) {
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
        
    }
}

 function merge (array1, array2) {
    mayuscula(array1)
    mayuscula(array2)
        let game = array2.pop() 
        let x = array1.length
    for (let i = 0; i < x ; i++) {
        let aux = array1.pop() 
        array2.push(aux)
    }

    return array2  
}  

merge(peliculas, animadas)

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

function scores(array1, array2){
    for(let i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            console.log(` la calificacion en la pelicula: ${animadas[i]} es identica en ambos mercados `)
        }else {
        console.log(` la calificacion en la pelicula: ${animadas[i]} no es identica en ambos mercados `)
    }
}
    }

scores(euroScores, asiaScores)



