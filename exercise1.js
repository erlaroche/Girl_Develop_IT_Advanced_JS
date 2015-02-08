// Exercise: Createing Objexts

// Create a constructor function for a Video object.  Give it the arguments title (a string), uploader (a string of the person), and seconds (a number, the duration), and it shoudl save them as properties of the object.
function Video(title, uploader, seconds) {
	this.title = title;
	this.uploader = uploader;
	this.seconds = seconds;
}

// Create a method on the Video object called watch(). When that method is called, it should use console.log ot output a string like "You watched all 60 seconds of Otters Holding Hands!"
Video.prototype.watch = function() {
	console.log("You watched all " + this.seconds + " seconds of " + this.title);
};

var video = new Video("Casablanca", "Emma Laroche", 6120);
video.watch();

// Instantiate a new Video object and call the watch() method on it.
var movie = new Video("Emma", "Emma Laroche", 7380);
movie.watch();

// Bonus: Use an array of data and a for loop to instantiate 5 Video ojbects.
var videos = [
	{
		title: "Casablanca",
		uploader: "Emma Laroche", 
		seconds: 6120},
	{
		titel: "Emma", 
		uploader: "Emma Laroche",
		seconds: 7380}
];
for (var i = 0; i < videos.length; i++) {
	(new Video(videos[i].title, videos[i].uploader, videos[i].seconds)).watch();
}


