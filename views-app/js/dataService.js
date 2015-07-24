angular.module("MyPortfolio").service("DataService", function(){

// News View
	var postArray = [];
	this.getPosts = function(){
		var postArray = JSON.parse(localStorage.getItem("postsLS")) || [];
		postsArray = postArray;
			console.log(postArray);
		return postsArray;
	}
	// Save News Post
	this.savePost = function(pTitle,pAuthor,pDate,pContent){
		var savedPosts = {title: pTitle, author: pAuthor, date: pDate, content: pContent};
		postsArray.push(savedPosts);
		localStorage.setItem("postsLS", JSON.stringify(postsArray));
	}
	// Remove Post
	this.removePost = function(pIndex){
		postsArray.splice(pIndex,1);
		localStorage.setItem("postsLS", JSON.stringify(postsArray));
	}
	// Clear Data
	this.deleteLocalStorage = function(){
		postsArray.splice(0);
		localStorage.clear();
	}

// Projects View
	var projectArray = [];
	this.getProjects = function(){
		var projectArray = JSON.parse(localStorage.getItem("projectsLS")) || [];
		projectsArray = projectArray;
			console.log(projectArray);
		return projectsArray;
	}
	// Save News Project
	this.saveProject = function(pName,pDate,pDescription){
		var savedProjects = {name: pName, date: pDate, description: pDescription};
		projectsArray.push(savedProjects);
		localStorage.setItem("projectsLS", JSON.stringify(projectsArray));
	}
	// Remove Project
	this.removeProject = function(pIndex){
		projectsArray.splice(pIndex,1);
		localStorage.setItem("projectsLS", JSON.stringify(projectsArray));
	}
	// Clear Data
	this.deleteLocalStorage = function(){
		projectsArray.splice(0);
		localStorage.clear();
	}

// Testimonials View
	var testimonialArray = [];
	this.getTestimonials = function(){
		var testimonialArray = JSON.parse(localStorage.getItem("testimonialsLS")) || [];
		testimonialsArray = testimonialArray;
			console.log(testimonialArray);
		return testimonialsArray;
	}
	// Save News Testimonial
	this.saveTestimonial = function(pName, pTestimonial){
		var savedTestimonials = {name: pName, testimonial: pTestimonial};
		testimonialsArray.push(savedTestimonials);
		localStorage.setItem("testimonialsLS", JSON.stringify(testimonialsArray));
	}
	// Remove Testimonial
	this.removeTestimonial = function(pIndex){
		testimonialsArray.splice(pIndex,1);
		localStorage.setItem("testimonialsLS", JSON.stringify(testimonialsArray));
	}
	// Clear Data
	this.deleteLocalStorage = function(){
		testimonialsArray.splice(0);
		localStorage.clear();
	}
});