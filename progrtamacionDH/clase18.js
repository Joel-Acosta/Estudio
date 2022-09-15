/* <!-- Ejercicio
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
Opcional
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
Posibles matrices para comprobar los resultados.  --> */
 
let registros = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1800, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]

let matrizVacia = []

//a)

function totalSemana(matriz, semana = 1) {
  let sum = 0;
  if (semana > 4 || !matriz.length) {
    return "error: no ingresastes los datos correctos";
  } else {
    let len = matriz[semana - 1].length;
    for (let i = 0; i < len; i++) {
      sum += matriz[semana - 1][i];
    }
    return sum;
  }
}

/*  console.log(totalSemana(registros, 1));
 console.log(totalSemana(registros, 2));
 console.log(totalSemana(registros, 3));
 console.log(totalSemana(registros, 4)); */

//b)

function totalDia(matriz, dia = 1){
    let diaReal = dia - 1;
    if(diaReal < 7){
        return matriz[0][diaReal];
    }else if(diaReal < 14){
        return matriz[1][diaReal - 7];
    }else if(diaReal < 21){
        return matriz[2][diaReal - 14];
    }else{
        return matriz[3][diaReal - 21];
    }
};

/* console.log(totalDia(registros, 23));
 */

//c)

function totalMes(matriz) {
  let total = 0;
  for (let i = 1; i < 5; i++) {
    total += totalSemana(matriz, i);
  }
  return total;
}


/* // */

//d)

function semanaMayorGasto(matriz) {
  let mayor = totalSemana(matriz, 1);
  let posición = 0;
  for (let i = 1; i < 5; i++) {
    if (totalSemana(matriz, i) > mayor) {
      mayor = totalSemana(matriz, i);
      posición = i;
    }
  }
  return `La semana que mas se gasto es la: ${posición}`;
}

console.log(semanaMayorGasto(registros));

function diaMayorGasto(matriz) {
    let mayor = totalDia(matriz, 1);
    let posición = 0
    for (let i = 1; i < 29; i++) {
  
      if (totalDia(matriz, i) > mayor) {
        mayor = totalDia(matriz, i);
        posición = i;
      }
    }
    return `El dia que mas se gasto es el: ${posición}` ;
  }
  console.table(registros);
  console.log(diaMayorGasto(registros));



  //Ejercicio de clase 18S

  /**
*  Ejercicio
*  Dada una matriz, recorrer sus valores y sumar solo los números
*  que estén por encima o sean iguales a 10, pero menores que 1000.
 */

let numeros = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
  ];
  
  function sumaMatriz(matriz){
    let total = 0;
    for (let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++)
        if(matriz[i][j] > 9 && matriz[i][j] < 1000){
            total += matriz[i][j];
        }
    }
    return total
  }

  console.log(`La suma de los valores comprendidos entre 10 y 1000 es:
   ${sumaMatriz(numeros)}`);