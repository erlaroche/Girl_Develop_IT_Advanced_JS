// Putting it all Together: defining Ojbects in JavaScript
// Keep in mind "new" creates and invokes while "create" merely creates.
// The constructor function
function Book(title, author, numPages) {
	// The properties of the ojbect
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.currentPage = 0;
}
// A method on the object
Book.prototype.read = function() {
	this.currentPage = this.numPages;
	console.log("You read " + this.numPages + " pages!");
}

// Instantiating a new object
var book = new Book("Robot Dreams", "Isaac Asimov", 320);
book.read();

// Extending Objects in JavaScript
// The consturctor function
function PaperBack(title, author, numPages, cover) {
	Book.call(this, title, author, numPages);
	this.cover = cover;
}
// Extending the Book object
PaperBack.prototype = Object.create(Book.prototype);
// A new method on this object
PaperBack.prototype.burn = function() {
	console.log("Omg, you burnt all " + this.numPages + " pages");
	this.numPages = 0;
}
//Instantiating a new object
var paperback = new PaperBack("1984", "George Orwell", 250, "cover.jpg");
// burn after readings
paperback.read();
paperback.burn();