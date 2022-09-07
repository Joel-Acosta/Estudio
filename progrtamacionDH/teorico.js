/* 
.this en javascript :

if(Object.function()){
    console.log('this == object')
} else {
    console.log('this == global')
} 

*/

var sum = function () { 
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
    }
    return total;
   };
   console.log(sum(1,2,3,4,5,6,7,8,9)); // prints 45
   console.log(sum(1,2,3,4,5)); // prints 15
   