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
  


//--------------------------------------------------------------------------------------------------------------------------------

// binary search function ----------------------------------------------------------------

function bySearch(array, target) {
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    let midPoint = Math.floor((first + last) / 2);
    if (array[midPoint] == target) {
      return midPoint;
    } else if (array[midPoint] < target) {
      first = midPoint + 1;
    } else {
      last = midPoint - 1;
    }
  }
  return -1;
}

// recursive binary search function -----------

function bySearchRecursive(array, target) {
  if (array.length === 0) {
    return false;
  } else {
    let midpoint = Math.floor(array.length / 2);
    if (array[midpoint] == target) {
      return true;
    } else {
      if (array[midpoint] < target) {
        return bySearchRecursive(array.slice(midpoint + 1), target);
      } else {
        return bySearchRecursive(array.slice(0, midpoint), target);
      }
    }
  }
}

//merge sort---------------------------------

function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
console.log(mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]