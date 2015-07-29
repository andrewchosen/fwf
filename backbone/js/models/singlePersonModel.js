// Creating a namespace for the app

var app = app || {};

app.singlePerson = Backbone.Model.extend({

	defaults: {
		age: "N/A",
		image: "images/nopic.jpg"
	}
});