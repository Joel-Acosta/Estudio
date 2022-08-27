/* let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas) {
        this.energia -= horas*5
        this.experiencia += horas*2
   
    }
        
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia); */

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

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }

  console.log(duplicateEncode('putito'))

