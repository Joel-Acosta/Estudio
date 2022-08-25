const prompt = require("prompt-sync")({ sigint: true });

/* let edadBar = parseInt(prompt(" Cuantos años tenes?") )

if(edadBar > 20){
    console.log("puede pasar y tomar alcohol")
    let clave = prompt("diga la clave secreta")
    if(clave == "pass"){  
       console.log("puede pasar al show secretro")
    } else {
        console.log("Le erraste maquinola, denunciado y no podes pasar al show")
    }
}else {
    console.log("no puede ingresar al bar")
} */



function sandwich (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let total = 0
    switch(base){
        case "pollo":
            total += 150
            break
        case "carne":
            total += 200
            break
        case "veggie":
            total += 100
            break           
    }

    switch(pan){
        case "blanco":
            total += 50
            break
        case "negro":
            total += 60
            break
        case "s/gluten":
            total += 75
            break           
    }

    if(queso){
        total += 20
    }
    if(tomate){
        total += 15
    }
    if(lechuga){
        total += 10
    }
    if(cebolla){
        total += 15
    }
    if(mayonesa){
        total += 5
    }
    if(mostaza){
        total += 5
    }

    return total
}

console.log(sandwich("carne", "blanco", true, false, true, false, true, false))