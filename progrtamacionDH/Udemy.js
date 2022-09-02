/* const array = string => string.split(' ')
 console.log(array('lala y po')); */

 function split(str1){
    let array = [];
    for (i=0; i < str1.length; i++){
        array[i] = str1[i];
    }
    console.log(array);
}

split("hola")