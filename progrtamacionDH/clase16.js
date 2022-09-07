/* function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
      if (!(i % 3) && !(i % 5)) {
        console.log("FizzBuzz");
      } else if (!(i % 3)) {
        console.log("Fizz");
      } else if (!(i % 5)) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz(); */

/*   function valorIndex(array, index) {
    console.log(array[index]);
  }
  // Invoca tu función debajo de esta linea.
  valorIndex(array, indice); */


/*   function diasDelMes(numeroMes) {
    let cortos = [4, 6, 9, 11];
    if (numeroMes === 2) {
      return 28;
    } else if (cortos.includes(numeroMes)) {
      return 30;
    } else {
      return 31;
    }
  }
  
  // E invocala:
  console.log(diasDelMes(1)); */

/*   function inversor(num) {
    let temp = Array.from(String(num))
    temp.reverse()
    let real = temp.join('')
    return parseInt(real)
}

console.log(inversor(22334454)) */



/*  function doble(array) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
        if(!(final.includes(array[i]))){
      final.push(array[i]);
    }
    }
  }
  return final
}

let Array = [3,6,6,7,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log(doble(Array));
 */

function invertir(n){
  let r = ''+ n
  r = r.split('')
  let array=[]
  for(let i=0; i < r.length; i++){
      array.unshift(r[i])
  }
  let final = +array.join('')//uno el array en un solo valor que es string por eso le agrego parseint que lo convierte en tipo numero
  return final//retorno final como numero para que pueda ser utilizado en op matematicas
}
  console.log(invertir(32243)); 

/* let n = 1
n = ''+n  
console.log(n); */

