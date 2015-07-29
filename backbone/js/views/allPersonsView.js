// Namespace
var app = app || {};

// View for directory list
app.allPersonsView = Backbone.View.extend({
	tagName: "section",
	render: function(){
		this.collection.each(this.addPerson, this);
		return this;
	}

	addPerson: function(person) {
		var personView = new app.singlePerson.View ({ model: person });
		this.$el.append(flowerView.render().el);
	}
});