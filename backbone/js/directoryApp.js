
var johnDoe = new app.singlePerson({
	name: "John Doe",
	age: "21",
	gender: "male",
	image: "images/johndoe.jpg",
	website: "http://google.com"
});

var janeDoe = new app.singlePerson({
	name: "Jane Doe",
	age: "19",
	gender: "female",
	image: "images/janedoe.jpg",
	website: "http://yahoo.com"
});

var andrewLancaster = new app.singlePerson({
	name: "Andrew Lancaster",
	age: "29",
	gender: "male",
	image: "images/andrewlancaster.jpg",
	website: "http://facebook.com"
});

console.log(johnDoe.toJOSN());
console.log(janeDoe.toJOSN());
console.log(andrewLancaster.toJOSN());

