// Namespace
var app = app || {};

app.Router = Backbone.Router.extend({
	routes :{
		"": "noCopy",
		"john-doe" : "johnDoeMessage",
		"jane-doe" : "janeDoeMessage",
		"andrew-lancaster" : "andrewLancasterMessage"
	},

	noCopy: function() {
		$("#copy").html("");
	},

	johnDoeMessage: function(){
		$("#copy").html("This is John.")
	},

	janeDoeMessage: function(){
		$("#copy").html("This is Jane.")
	},

	andrewLancasterMessage: function(){
		$("#copy").html("This is Andrew.")
	}
})