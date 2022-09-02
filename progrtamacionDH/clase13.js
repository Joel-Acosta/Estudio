/* Crear un array llamado misMascotas 
Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
nombre
raza
edad 
sonido
un método que nos retorne ese sonido 2 veces
Cuando esté listo, verificar en consola */


const misMascotas = [
    {
     nombre : 'Rontu',
     raza : 'calle',
     edad: 12,
     sonido: 'Guau!',
     metodo: function () {
        return this.sonido + this.sonido
     }
    },
    {
     nombre : 'noir',
     raza : 'golden',
     edad: 6,
     sonido: 'woof!',
     metodo: function () {
        return this.sonido + this.sonido
    }
},
    {
     nombre : 'isi',
     raza : 'labrador',
     edad: 3,
     sonido: 'woooof! ',
     metodo: function () {  
        return this.sonido + this.sonido
    }
}
]

/* console.log(misMascotas[2].metodo()); */

/* 
Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad */

function aumentarEdad(array){
    for(let i = 0; i < array.length; i++){
        array[i].edad += 1
        
    }
}

aumentarEdad(misMascotas)
console.log(misMascotas);

function aumentarEdad2(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].edad > 10){
            let mitad = array[i].edad / 2
            array[i].edad += mitad
        }else if(array[i].edad < 6){
            array[i].edad += 2
        }else {
            array[i].edad += 1
        }
    }
}

/* aumentarEdad2(misMascotas)
aumentarEdad2(misMascotas)
console.log(misMascotas); */

function loopDePares (num){

    for(let i = 0; i < 101; i++){
        console.log(i);
        if((i + num) % 2 === 0){
            console.log(`El numero ${i + num} es par`);
        }
    }
}

/* loopDePares(6) */

function loopDeImpares (num, string){

    for(let i = 0; i < 101; i++){
        console.log(i);
        if((i + num) % 2 !== 0){
            console.log(string);
        }
    }
}

/* loopDeImpares(6, 'impar' ) */


function sumatoria (num){
    let total = 0
    for(let i = 1; i <= num; i++){
        total += i
    }return total
}

/* console.log(sumatoria(6)); */

function nuevoArreglo (num) {
    let array = []
    for(let i = 1;i <= num ; i++ ){
        array.push(i)
    }return array
}

/* console.log(nuevoArreglo(10)); */

function split(str){
   /*  let array = Array.from(str)
    return array */

    let array = []
    let largo = str.length
    for(let i = 0; i < largo ; i++){
        let char = str.charAt(i)
        array.push(char)
    }return array
}

/* console.log(split('hola')); */

let array =[1,2,3,4] 
let aArray = ['h', 'o', 'l', 'a']

function arrayHandler(array1, array2){
    for(let i = 0; i < array1.length; i++){
        console.log(`yo soy ${array1[i]} y yo soy ${array2[i]}`);
    }
}
/* 
arrayHandler(array, aArray) */

function palindromo (str) {
    let array = Array.from(str)
    for(let i = 0; i < array.length; i++){
        if(array[i] != array[array.length - i - 1]){
            return false
        }
    }return true
}

 console.log(palindromo('ocico')); 
