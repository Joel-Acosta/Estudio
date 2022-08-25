//------------------------------------ remove array duplicates ----------------------------------------------

//simple- new set

//const numbers = [1, 2, 3, 3, 4, 4, 4, 4, 5]
//const unique = [...new Set (numbers)]

//concise- filter

//const numbers = [1, 2, 3, 3, 4, 4, 4, 4, 5]
//const unique = numbers.filter((item, index) => (numbers.indexOf(item) === index))

//reduce -

//const numbers = [1, 2, 3, 3, 4, 4, 4, 4, 5]
//const unique = numbers.reduce((partial, item) => (partial.includes(item) ? partial : [...partial, item]), [])


//----------------------------



//-----------------------------------ordenar alfabeticamente--------------------------

//obj.sort((a, b) => a.objProperty.localeCompare(b.objProperty))

//------------------------------------Ordenamiento por incersion---------------------------------------------


/* 
function inserción(myArray){ 
    let temp
    let lugar 
    for ( let i = 0; i < myArray.length; i++) { 
        temp = myArray[i] 
        for (lugar = i - 1; lugar >= 0 && myArray[lugar] > temp; lugar--) { 
            myArray[lugar + 1] = myArray[lugar] 
        } 
        myArray[lugar + 1] = temp 
    }
    
    return myArray
}
 */


//--------------------------------------Ordenamiento por seleccion ,Su complejidad es O(n^2)----------------------------------------------



  const selectionSort = (originalList) => {
    //we first copy the array to avoid modifying the original array, since objects are passed by reference in JS
    const list = [...originalList]
    const len = list.length
    for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[min] > list[j]) {
          min = j
        }
      }
      if (min !== i) {
        // a new minimum is found. Swap that with the current element
        ;[list[i], list[min]] = [list[min], list[i]]
      }
    }
    return list
  }
  const listOfNumbers = [1, 6, 3, 4, 5]
  console.log(selectionSort(listOfNumbers)) //[1,3,4,5,6]