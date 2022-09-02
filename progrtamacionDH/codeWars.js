/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

//mi codigo

/* function duplicateEncode(word){

    word = word.toLowerCase()
    let code = word.split('')
    let newCode = ''
    for(let i = 0; i < word.length; i++){
        let cont = 0
        for (let j = 0 ; j < word.length; j++){
            if(code[i] == code[j])
            cont++
        }
        if(cont > 1){
            newCode = newCode + ')' 
        }else {
            newCode = newCode + '('
        }
    }
    return newCode
} */

// uno mejor

/* function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  } */






//====================================================================================================================================






  /*
  Cubic Tap Code
This works similarly to Tap Code except instead of being mapped onto a 5x5 square, letters are mapped onto a 3x3x3 cube, left to right, top to bottom, front to back with space being the 27th "letter". Letters are represented by a series of taps (represented as dots .) and pauses (represented by spaces  ), for example A is represented as . . . (first column, first row, first layer) and   is represented as ... ... ... (third column, third row, third layer).

For reference the three layers of the cube are as follows (underscore represents space):

1  1  2  3 
1  A  B  C
2  D  E  F
3  G  H  I

2  1  2  3 
1  J  K  L
2  M  N  O
3  P  Q  R

3  1  2  3 
1  S  T  U
2  V  W  X
3  Y  Z  _
Your task (should you choose to accept it)
Create two functions encode() and decode(), to encode and decode strings to and from cubic tap code.

Input
encode() takes a string of uppercase letters and spaces and outputs a string of dots and spaces. decode() takes a string of dots and spaces and outputs a string of uppercase letters and spaces. All inputs will be valid.

Examples
encode("N") => ".. .. .."
encode("TEST") => ".. . ... .. .. . . . ... .. . ..."
encode("HELLO WORLD") => ".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. ."

decode(".. .. ..") => "N"
decode(".. . ... .. .. . . . ... .. . ...") => "TEST"
decode(".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. .") => "HELLO WORLD"

*/



// regex

/*Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. 

Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input


let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

*/



function between(a, b) {
    let newArray = []
   for(a; a < b + 1; a++){
    newArray.push(a)
   }return newArray
  }



  console.log(between(3, 10));