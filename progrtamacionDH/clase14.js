/*1. Realizar una función que reciba por parámetro un valor numérico.
 Si este es un número par y múltiplo de 5, entonces retornar true.
  Si en cambio, es un número impar o es múltiplo de 3 entonces retornar “cumple con los requisitos”.
   Para cualquier otra situación, retornar false. 
*/

/* 
function numero(num){


   return !(num % 2) && !(num % 5)? true:
    num % 2 != 0 || num % 3 == 0? 'Cumple con los requisitos' :
     false
}

console.log(numero(15));
console.log(numero(10));
console.log(numero(2));
console.log(numero(19)); */

/* let num = 1

if(num){
    console.log('true');
}else{
    console.log('false');
} */

/* 2. Realizar una función que reciba dos valores por parámetro,  el primero un booleano y el segundo un número entero:
-	Si el primer parámetro es true y el segundo es múltiplo de 10, deberá retornar el triple del segundo parámetro.
-	Si el primer parámetro es true y el segundo no es múltiplo de 3, deberá retornar el doble del segundo parámetro.
-	Si el primer parámetro es false, deberá retornar el valor del segundo parámetro màs el primer parámetro.
-	Para cualquier otro caso, retorna “Parámetro incorrecto”
 */

/* function func(bool, num){
    if(bool && !(num % 10)){
        return num * 3
    }else if(bool && num % 3 != 0){
        return num* 2
    }else if(!bool){
        return num
    }else{
        return 'Parametro incorrecto'
    }

}

console.log(func(true, 11));
console.log(func(true, 10));
console.log(func(false, 5));
console.log(func(true, 3)); */

/* 3. Crear un array vacío de cervezas y agregar mediante un método de array 3 objetos en èl,
 cuyos atributos sean: nombre, precio e IBU 
Luego, realizar una función que reciba por parámetro el array y
 un valor numérico que represente al precio máximo , 
 deberá retornar un nuevo array con las cervezas cuyo precio sea mayor al indicado.
 */

 let array = []
 array.push({
    nombre: 'Bud',
    precio: 200,
    IBU: 22
 },{
    nombre: 'patricia',
    precio: 250,
    IBU: 23
 },{
    nombre: 'pilsen',
    precio: 190,
    IBU: 21
 })




 function precio(array, num){
    let final = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].precio > num ){
            final.push(array[i])
        }
        
    }
    if(final.length == 0){
        return 'precio muy alto'
    }else{
       
    }
    
    return final 
}

/* console.log(precio(array, 199));
console.log(precio(array, 200));

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]; */

function mergeSort(array) {
  /**Sorts an array in ascending order
   * returns a new sortred array
   * divide : find the midpoint of the array and divide into subarrays
   * Conquer : recursively sort the subarrrays created in previous step
   * combine : merge the sorted subarrrays created in previous step
   */

  if(array.length < 2) {
    return array;
  }
  let leftHalf = splitL(array);
  let rightHalf = splitR(array);
  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);

  return merge(left, right);

  function splitL(array) {
    /**Divide the unsorted array at midpoint into subarrays
     * return two subarrays - left and right
     */
    let midpoint = Math.floor(array.length / 2);
    let left = array.slice(0, midpoint);

    return left;
  }
  function splitR(array) {
    /**Divide the unsorted array at midpoint into subarrays
     * return two subarrays - left and right
     */
    let midpoint = Math.floor(array.length / 2);
    let right = array.slice(midpoint, array.length);

    return right;
  }

  function merge(left, right) {
    /**
     *merges two arrays ,sorting them in the process
     *Returns a new merged array
     */

    let list = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        list.push(left[i]);
        i+= 1;
      } else {
        list.push(right[j]);
        j+=1;
      }
      while (i < left.length) {
        list.push(left[i]);
        i+=1;
      }
      while (j < right.length) {
        list.push(right[j]);
        j+=1;
      }
    }
    return list;
  }
}


let newArray = [12, 61, 42, 64, 22, 24, 92, 84];
console.log(mergeSort(newArray));





