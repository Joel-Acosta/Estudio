//https://www.youtube.com/watch?v=2ZphE5HcQPQ&ab_channel=freeCodeCamp.org

class Rectangle {
  constructor(_width, _heigh, _color) {
    this.width = _width;
    this.heigh = _heigh;
    this.color = _color;
  }

  getArea() {
    return this.width * this.heigh;
  }

  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.heigh} and i am ${this.color}`
    );
  }
}

let myRectangle1 = new Rectangle(5, 2, "blue");
let myRectangle2 = new Rectangle(10, 4, "red");

/* class Square {
    constructor (_width){
        this.width = _width;
        this.heigh = _width;
        this.numOfRequestForArea = 0
    }

    get area (){
        this.numOfRequestForArea++
        return this.width * this.heigh
    }

    set area (area){
        this.width = Math.sqrt(area)
        this.width = this.width
    }
}


let square1 = new Square(4)

square1.area = Math.floor(Math.random()* 100)
console.log(square1.area, square1.width);
square1.area = Math.floor(Math.random()* 100)
console.log(square1.area, square1.width);
square1.area = Math.floor(Math.random()* 100)
console.log(square1.area, square1.width);
square1.area = Math.floor(Math.random()* 100)
console.log(square1.area, square1.width);
console.log(square1.numOfRequestForArea); */

// static method

class Square {
    constructor(_width) {
        this.width = _width;
        this.heigh = _width;
    }

    static equals ( a, b) {
        return a.width * a.heigh === b.width * b.heigh
    }

    static isValidDimension (width, heigh) {
        return width === heigh
    }
}



let square1 = new Square(8)
let square2 = new Square(8)


//console.log(Square.equals(square1, square2));
//console.log(Square.isValidDimension(7,6))

//inheritance

class Person {

    //parent and child Class
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }
   describe(){
    console.log(`I am ${this.name} and i am ${this.age} years old`);
   }
}

class Programmer extends Person {
    constructor (_name, _age,_yearsOfExperience){
        super(_name, _age)

        //custom behavior

        this.yearsOfExperience = _yearsOfExperience
    }
    code () {
        console.log(`${this.name} is coding`);
    }
}


const programmers = [
    new Programmer('Dom', 56, 12),
    new Programmer('Jeff', 23, 3),
    new Programmer('joel', 40, 1)
    
]


function developSoftware (programmers) {
    for(let programmer of programmers){
        console.log(programmer);
        programmer.code()
    }
}

/* developSoftware(programmers) */

//polymorphism

class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound () {
        console.log('Generic animal sound!!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)

    }

    makeSound(){
        super.makeSound()
        console.log('Woof woof!!');
    }
}



const a1 = new Animal('Dom')
const a2 = new Dog('Jeff')
/* a1.makeSound()
a2.makeSound() */




