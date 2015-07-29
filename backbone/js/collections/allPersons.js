// Create namespace for app
var app = app || {};

app.PersonsCollection = Backbone.Collection.extend({
	model: app.singlePerson
});