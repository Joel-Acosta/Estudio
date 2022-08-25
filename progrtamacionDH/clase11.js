/* (cuentas bancarias).
Nos solicitan también crear un objeto literal llamado “banco”,
 el cual tendrá una propiedad llamada “clientes” que estará compuesta de la lista de objetos
  obtenidos en el punto anterior.
Al objeto “banco”, crearle un método llamado consultarCliente,
 el cual recibirá un nombre (titular) por parámetro, 
 deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

Crear otro método llamado depósito que recibirá dos parámetros:
 el titular de cuenta y una cantidad de dinero a depositar.
  El método debe obtener la cuenta correspondiente y luego 
  sumar la cantidad de dinero a depositar a saldo en pesos.
   Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: XXXX”.

Crear un último método llamado extracción que recibirá también dos parámetros:
 el titular de cuenta y el monto a extraer.
  El método debe obtener la cuenta correspondiente y restar el monto al saldo actual.
   En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”. 
   De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo saldo es: XXXX”. */

//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (titular === this.clientes[i].titularCuenta) {
        return this.clientes[i];
      }
    }
  },
  deposito: function (titular, cant) {
    let cliente = this.consultarCliente(titular);
    cliente.saldoEnPesos += cant;
    console.log(
      `Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`
    );
  },

  extraccion: function (titular, cant) {
    let cliente = this.consultarCliente(titular);
    if (cliente.saldoEnPesos - cant > 0) {
      cliente.saldoEnPesos -= cant;
      console.log(
        `Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`
      );
    } else {
      console.log(`Fondos insuficientes`);
    }
  }
};



/* 
---------Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como parámetro y un string.
 Esta deberá retornar un nuevo arreglo de objetos,
teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 

propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]

*/


let  array = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49} ]
function propiedadUnica(array, str) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    let props = Object.keys(array[i])
    for(let j = 0; j < props.length; j++){
      if(str == props[j]){
        newArray.push({[str]: array[i][props[j]]})
      }
    }
  }
  return newArray
} 


/*
-----------Calculador de notas

Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:

Nombre
Número de legajo
Lista de notas

Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, 
basado en una nota de aprobación que le va a ser dada. Para este ejercicio, 
vamos a dejar que pienses todos los métodos y propiedades que puedan hacer falta 
para que el programa funcione correctamente de la manera solicitada.
 */

let alumno = {
  nombre : 'hipotetico',
  numeroDeLegajo : 333,
  listaDeNotas : [10, 12, 8, 9, 12, 7],
  promedio : function (nota) {
    let promedio = 0
    let notas = this.listaDeNotas
    for(let i = 0; i < notas.length; i++){
      promedio += notas[i]
    }
    promedio /= notas.length
    console.log( Math.round(promedio) >= nota ? `aprobado con: ${Math.round(promedio)}`: `desaprobado con: ${Math.round(promedio)}`) 
  }

}








//creditos: equipo 3 (Pacho y cia) y equipo 6 (Joaquin y cia), sus codigos fueron de referencia :)
