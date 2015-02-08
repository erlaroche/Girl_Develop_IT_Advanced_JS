function Cat(adj) {
	this.adjective = adj;
	var kittySecret = "..";
	this.hearSecret = function(secret) {
		kittySecret = secret;
	};
	this.drinkBooze = function() {
		//way to access the local info -> privilege
		// has access to private #s
		console.log("omg did you know " + kittySecret);
	}
}
var helloKitty = new Cat("trustworthy");
helloKitty.hearSecret("Ashley eats kittens");
// returns omg did you know Ashley drinks kittens
helloKitty.drinkBooze();


// MVC
// View - user interface/DOM, what we see and visualize
// Model - data
// Controller - intermetiary to view and Controller
// MVC makes code easier to manage collaboratively.


