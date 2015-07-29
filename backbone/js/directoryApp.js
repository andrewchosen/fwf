
var johnDoe = new app.singlePerson({
	name: "John Doe",
	age: "21",
	gender: "male",
	image: "images/johndoe.jpg",
	website: "http://google.com"
});

var janeDoe = new app.singlePerson({
	name: "Jane Doe",
	gender: "female",
	image: "images/janedoe.jpg",
	website: "http://yahoo.com"
});

var andrewLancaster = new app.singlePerson({
	name: "Andrew Lancaster",
	age: "29",
	gender: "male",
	website: "http://facebook.com"
});

var personGroup = new app.PersonsCollection([
	johnDoe, janeDoe, andrewLancaster
]);

var personGroupView = new app.allPersonsView({ collection: personGroup });

$("#allPersons").html(personGroupView.render().el);