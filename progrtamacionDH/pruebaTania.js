/* ejemplo let array = [{propiedad: valor},{propiedad:valor},{propiedad:valor}]

let obj3 = array[2]
let obj3Valor = array[2].propieda 


function buscarPorId(array3,id){
    let a =[]
    for (let i=0; i < array3.length; i++){
        if(array3[i].id === id){
            a.push(array3[i])
        }
    }
    
    if (a === 0) {
            return null} else {
         return a
            }
    
}

console.log (buscarPorId(arrayCuentas, 1)) */

/* Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. 
Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]*/

let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]


  function propiedadUnica (arrayObjetos, str){

  let nuevoArray = []
  
  for (let i=0; i < arrayObjetos.length; i++){
      console.log(i);
      let obj = {}
    obj[str] = arrayObjetos[i][str]
    nuevoArray.push(obj)
 
  }

  return nuevoArray
  }

console.log(propiedadUnica (array, "nombre"))


