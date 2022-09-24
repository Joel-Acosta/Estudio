/*
Factory pattern
Let's take a common example to understand the usage of a factory. Let's say that we 
have the following:
• A constructor, CarFactory()
• A static method in CarFactory called make() that knows how to create 
objects of the car type
• Specific car types such as CarFactory.SUV, CarFactory.Sedan, and so on
We want to use CarFactory as follows:
var golf = CarFactory.make('Compact');
var vento = CarFactory.make('Sedan');
var touareg = CarFactory.make('SUV');
*/

 //factory constructor
function CarFactory() {}
CarFactory.prototype.info = function () {
  console.log(
    "This car has " +
      this.doors +
      " doors and " +
      this.engine_capacity +
      " liter engine"
  );
};
//the static factory method
CarFactory.make = function (type) {
  var constr = type;
  var car;
  CarFactory[constr].prototype = new CarFactory();
  //create a new instance
  car = new CarFactory[constr]();
  return car;
};

CarFactory.Compact = function () {
  this.doors = 4;
  this.engine_capacity = 2;
};

CarFactory.Sedan = function () {
    this.doors = 2;
    this.engine_capacity = 2;
   };

CarFactory.SUV = function () {
  this.doors = 4;
  this.engine_capacity = 6;
};

var golf = CarFactory.make("Compact");
var vento = CarFactory.make("Sedan");
var touareg = CarFactory.make("SUV");
vento.info();


/*
The mixin pattern
Mixins help in significantly reducing functional repetition in our code and help 
in function reuse. We can move this shared functionality to a mixin and reduce 
duplication of shared behavior. You can then focus on building the actual 
functionality and not keep repeating the shared behavior. Let's consider the 
following example. We want to create a custom logger that can be used by any object 
instance. The logger will become a functionality shared across objects that want to 
use/extend the mixin
*/

var _ = require("underscore");

//shared functionality encapsulated into a customlogger
var logger = (function () {
  var CustomLogger = {
    log: function (message) {
      console.log(message);
    },
  };
  return CustomLogger;
})();

//An object that will need the custom logger to log system specific logs
var Server = (function (Logger) {
  var CustomServer = function () {
    this.init = function () {
      this.log("Initializing Server....");
    };
  };
  //This copies/extends the members of the 'CustomLogger' into 'CustomServer'
  _.extend(CustomServer.prototype, Logger);

  return CustomServer;
})(logger);

new Server().init()

/*
The observer pattern

One or more observers are interested in the state of a subject and register their interest with 
the subject by attaching themselves. When something changes in our subject that the observer 
may be interested in, a notify message is sent which calls the update method in each observer. 
When the observer is no longer interested in the subject's state, they can simply detach 
themselves
*/

var Subject = ( function (){
    function Subject () {
        this.observer_list = []
    }


//This method will handle adding observers to the internal list 
Subject.prototype.add_observer = function ( obj ) {
    console.log('Aded observer');
    this.observer_list.push( obj )
}

Subject.prototype.remove_observer = function (obj) {
    for(var i = 0; i < this.observer_list.length; i++){
        if(this.observer_list[i] === obj){
            this.observer_list.splice(i, 1)
            console.log('Removed Observer');
        }
    }
}

Subject.prototype.notify = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    for(var i = 0; i < this.observer_list.length; i++){
        this.observer_list[i].update(args)
    }
}
return Subject
}())

/*
 * Now let's define a simple object that creates random tweets. This object is providing 
an interface to add and remove observers to the Subject via addObserver() and 
removeObserver() methods. It also calls the notify() method of Subject with the 
newly fetched tweet. When this happens, all the observers will broadcast that the 
new tweet has been updated with the new tweet being passed as the parameter:
*/

function Tweeter() {
    var subject = new Subject()
    this.addOserver = function (observer){
        subject.add_observer(observer)
    }
    this.removeObserver = function (observer) {
        subject.remove_observer(observer);
        };
    this.fetchTweets = function fetchTweets(){
        //tweet
        var tweet = {
            tweet: 'This is one nice observer'
        }
    
    //notify our observers of the stock change
    subject.notify( tweet )
}
}

//Let's now add two observers:
var TweetUpdater = {
    update : function() {
    console.log( 'Updated Tweet - ', arguments );
    }
   }

var  TweetFollower = {
    update: function (){
        console.log('"Following this tweets - ', arguments);
    }
}

/*
 * Both these observers will have one update() method that will be called by the
 *  Subject.notify()method. Now we can actually add these obbservers to the Subject via
 *  Tweetes interface:
 */

    var tweetApp = new Tweeter()
    tweetApp.addOserver(TweetUpdater)
    tweetApp.addOserver(TweetFollower)
    tweetApp.fetchTweets()
    tweetApp.removeObserver(TweetUpdater)
    tweetApp.removeObserver(TweetFollower)


  