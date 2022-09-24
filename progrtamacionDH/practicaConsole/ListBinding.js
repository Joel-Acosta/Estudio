class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }
  // makes an <li>text<li> element/tag
  static createListItem(text) {
    const li = document.createElement("li");

    li.textContent = text;

    return li;
  }

  update() {
    /* remove all existing  <li> elements/tags */
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    //Fill <ul>/<ol> tag with <li>
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add (text) {
    this.textList.push(text)
    this.update()
  }

  remove (index) {
    this.textList.splice(index, 1)
    this.update()
  }
}


/* function max (arr){
  let max = -Infinity
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] > -10 || arr[i] < 10){
      if(arr[i] > max){
        max = arr[i]
      }
    }
  }return max
} */

 function sumatoria (arr){
  total = 0
  for(let i = 0; i < arr.length; i++){
    total+= arr[i]
  }return total
}

function orden(arr){
  for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr.length -1; j++){
          if(arr[j].likes < arr[j + 1].likes){
              let aux = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = aux

          }
      }
  }return arr
}


function equal (arr1, arr2){
  if(arr1.length > arr2.length * 6 || arr2.length > arr1.length * 6){
    return -1
  } // primero chequear que sea posible
  
  let arr1Total = sumatoria(arr1)
  let arr2Total = sumatoria(arr2)
  let diff = 0
  let count = 0
  if(arr1Total > arr2Total){
    diff = arr1Total - arr2Total
    orden(arr1)
    for(let i = arr1.length - 1; i >= 0 && diff > 0 ; i--){
      diff -= arr1[i] -1
      count += 1
    }
  }else {
    diff = arr2Total - arr1Total
    orden(arr2)
    for(let i = arr2.length - 1; i >= 0 && diff > 0 ; i--){
      diff -= arr2[i] -1
      count += 1
    }
  }

return count
} 

let a = [5]
let b = [1, 1, 6]

let c = [2, 3, 1, 1, 2]
let d = [5, 4, 6]

let e = [5, 4, 1, 4 , 6, 5]
let f = [2]

let g = [1, 2, 3, 4, 3, 2, 1]
let h = [6]

console.log(equal(a, b));
console.log(equal(c, d));
console.log(equal(e, f));
console.log(equal(g, h));

