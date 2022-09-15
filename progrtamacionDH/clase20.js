



let = arrayObj = [
    {
        likes: 23,
        username: 'Julieta'
    },
    {
        likes: 43,
        username: 'Julian'
    },
    {
        likes: 53,
        username: 'Jose'
    },
    {
        likes: 24,
        username: 'Fede'
    },
    {
        likes: 1,
        username: 'lucio'
    },
    {
        likes: 23,
        username: 'Joel'
    },
    {
        likes: 63,
        username: 'Manuel'
    },
    {
        likes: 28,
        username: 'Anderees'
    },
    {
        likes: 41,
        username: 'Quike'
    },
    {
        likes: 15,
        username: 'Lu'
    },
    {
        likes: 33,
        username: 'Mauro'
    },
    {
        likes: 63,
        username: 'Sergio'
    },
    {
        likes: 69,
        username: 'Nico'
    },
    {
        likes: 28,
        username: 'Miguel'
    },
    {
        likes: 13,
        username: 'Ezequiel'
    }
]
/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y
 obtienen likes, se registra la cantidad de likes obtenidos por cada usuario 
 en un array. Ordenar los valores para poder indicar cuál fue la mayor cantidad 
 de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que
  menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno,
   una cantidad de likes—.
Deberás construir tu propio array de prueba,
 el cual contendrá un número de objetos (determinado por vos) donde
  cada objeto tendrá las siguientes propiedades:
likes: numero
username: string */




function orden(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length -1; j++){
            if(arr[j].likes < arr[j + 1].likes){
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux

            }
        }
    }return arr
}

console.log(orden(arrayObj));


let arrO = [
    {
        dia:1,
        mes:2,
        tempMax: 15,
        tempMin: 33 
    },
    {
        dia:2,
        mes:2,
        tempMax: 17,
        tempMin: 37 
    },
    {
        dia:3,
        mes:2,
        tempMax: 18,
        tempMin: 36 
    },
    {
        dia:4,
        mes:2,
        tempMax: 19,
        tempMin: 35 
    }
]