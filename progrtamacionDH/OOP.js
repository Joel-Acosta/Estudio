// creating an object

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

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
