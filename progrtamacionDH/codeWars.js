/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

//mi codigo

function duplicateEncode(word){

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
}

// uno mejor

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }