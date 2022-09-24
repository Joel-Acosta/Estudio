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

function Player() {
  isAvailable = false;
}

var crazyBob = new Player();
Player.prototype.isAvailable = function () {
  return isAvailable;
};

/*  console.log(crazyBob.isAvailable()); */

/*  • You can declare private variables using the var keyword in a function. They 
can be accessed by private functions or privileged methods.
• Private functions may be declared in an object's constructor and can be called 
by privileged methods.
• Privileged methods can be declared with this.method=function() {}.
• Public methods are declared with Class.prototype.method=function()
{}.
• Public properties can be declared with this.property and accessed from 
outside the object.
The following example shows several ways of doing this: */

function Player(name, sport, age, country) {
  this.constructor.noOfPlayers++;
  // Private Properties and Functions
  // Can only be viewed, edited or invoked by privileged members
  var retirementAge = 40;
  var available = true;
  var playerAge = age ? age : 18;
  function isAvailable() {
    return available && playerAge < retirementAge;
  }
  var playerName = name ? name : "Unknown";
  var playerSport = sport ? sport : "Unknown";
  //priveleged methods
  //can be invoked from outside and can access private members
  //can be replaced with public counterparts
  this.book = function () {
    if (!isAvailable()) {
      this.available = false;
    } else {
      console.log("Player is unavailable");
    }
  };
  this.getSport = function () {
    return playerSport;
  };
  //public properties, modifiable from anywhere
  this.batPreference = "Lefty";
  this.hasCelebGirlfriend = false;
  this.endorses = "Super Brand";
}

//Public methods -can be read or wrritten by anyone
//can only access public and prototype properties
Player.prototype.switchHands = function () {
  this.batPreference = "righty";
};
Player.prototype.hasCelebGirlfriend = function () {
  this.hasCelebGirlfriend = true;
};
Player.prototype.fixEyes = function () {
  this.wearGlasses = false;
};
//prototype properties - can be read or written by anyone ( or overriden)
Player.prototype.wearGlasses = true;

//static properties - anyone can read or write
Player.noOfPlayers = (function Playertest() {
  //new instance of the player object created
  var cricketer = new Player("Vivian", "Cricket", 23, "England");
  var golfer = new Player("Pete", "Golf", 32, "USA");
  console.log("So far there  are " + Player.noOfPlayers + " in the guild");

  // Both these functions share the common 'Player.prototype.wearglasses' variable

  cricketer.fixEyes();
  golfer.fixEyes();

  cricketer.endorses = "Other Brand"; //Public variable can be updated

  //Both player s public method is now changed via their prototype
  Player.prototype.fixEyes = function () {
    this.wearGlasses = true;
  };
  //Only  Cricketer s function is changed
  cricketer.switchHands = function () {
    this.batPreference = "undecided";
  };
})();
