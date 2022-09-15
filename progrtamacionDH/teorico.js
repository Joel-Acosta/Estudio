/* 
.this en javascript :

if(Object.function()){
    console.log('this == object')
} else {
    console.log('this == global')
} 

*/

const { range } = require("underscore");

/* var sum = function () { 
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
    }
    return total;
   };
   console.log(sum(1,2,3,4,5,6,7,8,9)); // prints 45
   console.log(sum(1,2,3,4,5)); // prints 15
    */

// Regex

//Backreferences

/* let original = '1234 5678'
let regex = /(\d{4})(\d{4})/
let modifiedStr = original.replace(regex, '$2 $1')
console.log(modifiedStr); */
/* 
let arr = [1,2,3,4,5,6,7,8]
console.log(arr);
arr.length -= 2
console.log(arr); */

var _ = require('underscore')
let rango = _.range(1, 11)
/* console.log(rango); */
/* console.log(_.map(rango, function(num){return num*3}));
console.log(_.map(rango, function(num){return num*2}));
var lala = _.map(rango, function(num){return num*4})
console.log(lala); */

let evens = _.filter(rango, function(num){return (num % 2 == 0)})
console.log(evens);