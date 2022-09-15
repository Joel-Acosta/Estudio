// creating an object

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

/* circle.draw(); */

//Factories function

function createCirle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle2 = createCirle(1);

//constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);


//--------------------------------------
/* 
for (var i=1; i<=5; i++) {
  (function(j){
  setTimeout( function delay(){console.log( j )}, j*300);})( i );
 } */

 
 //prototype

 function player (){
  isAvailable = false
 }

 var crazyBob = new Player();
 player.prototype.isAvailable = function () { 
  return isAvailable
 }

 console.log(crazyBob.isAvailable());