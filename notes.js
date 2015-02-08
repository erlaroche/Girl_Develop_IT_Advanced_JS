// Object-Oriented Programming with JS
// tomorrow work on MVC model

// Object-Oriented Programming
// Create objects
//  - can have probperties and methods
//  - there can be many "instances" of objects
//  - objects can inheirt properties/method of other objects
//  -objects can implement parent methods

// JS takes  2 types of data
// primitive and reference
// primitive - string, number, boolean, null, undefined

// // example of primitive method
// var name = "Bob";
// var newName = name;
// console.log(newName);
// // returns "Bob"
// name = "Sally";
// console.log(newName);
// // returns "Sally"

// var nameObj = {
// 	name: "bob";
// };
// // newNameObj refrences nameObj
// var newNameObj = nameObj;
// console.log(newNameObj.name);
// // returns "bob"
// anemObj.name = "joe";
// console.log(newNameObj.name);
// // returns "joe"


// JS has prototype based programming.
// - a style of object-oriented programming in which behavior reuse (known as inheiritance) is performed via a process of cloning existing objects that serve as prototypes.

// The Object
// -built into browser, father of all objects.

// var cat = {};
// cat.speak = function(line) {
// 	console.log("the cat says " + line);
// }
// cat.speak("give me treats");

// THIS
// //points to the object being created

// function speak(line) {
// 	console.log("the " + this.adjective + " cat says " + line);
// }
// var blueCat = {adjective: "blue", speak: speak};
// var blackCat = {adjective: "black", speak: speak};

// // this points first to the blueCat as it is created, then to blackCat as it is created.  Then the function is done running.
// blueCat.speak("why am I blue? this is weird");
// blackCat.speak("i love Halloween");

// // Using Apply() and Call()
// // apply() and call() behaive the same way
// speak.apply(blueCat,["boom"]);
// speak.call(blackCat,["pow"]);


// // New Keyword

// function Cat(adj) {
// 	this.adjective = adj;
// 	this.speak = function(line) {
// 		console.log("The " + this.adjective + " cat says " + line);
// 	}
// }
// var zombieCat = new Cat("zombie");
// zombieCat.speak("'mmmM brains..'");
// var fairyCat = new Cat("fairy");
// fairyCat.speak("'Prannnnnng! Go to the ball!'")

// // Why use New?
// // Why we can't just do this
// function createCat(adjective) {
// 	return{
// 		adjective: adjective,
// 		speak: function(line) {
// 			console.log("the " + this.adjective + " cat says " + line);
// 		}
// 	}
// }
// var hipsterCat = createCat("hipster");
// hipsterCat.speak("'But first let me take a purrfect selfie..'")

// // returns the Cat function
// console.log(zombieCat.constructor);
// // returns the OBJECT (the father of all objects)
// console.log(hipsterCat.constructor);


// Consturctor Property
// var someObject = {};
// console.log(someObject);
// console.log(someObject.toString);
// console.log(Cat.prototype);
// console.log(Cat.prototype.constructor);
// console.log(zombieCat.toString == someOjbect.toString);

// Inheritance and the Protyotype Chain

// Cat.prototype.fur = "soft";
// console.log(zombieCat.fur);
// zombieCat.fur = "bloody";
// console.log(zombieCat.fur);
// console.log(Cat.prototype.fur);

// Cat.prototype.eat = function() {
// 	console.log("The " + this.adjective + " cat is eating");
// }
// zombieCat.eat();

// Exercies: http://www.teaching-materials.org/jsoo/exercise_oo.html