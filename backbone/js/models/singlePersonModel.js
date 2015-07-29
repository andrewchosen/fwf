// Creating a namespace for the app

var app = app || {};

app.singlePerson = Backbone.Model.extend({

	defaults: {
		age: "N/A",
		image: "images/nopic.jpg"
	},

	initialize: function() {
		console.log("A person named " + this.get("name") + " has been created and their age is " + this.get("age") + ".");

		// on function
		this.on('change', function(){
			console.log("This person's data has changed.");
		});

		this.on('change:age', function(){
			console.log("The age of " + this.get("name") + " has changed to " + this.get("age") + " years old.")
		});
	}
});