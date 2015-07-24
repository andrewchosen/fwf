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
		var pDate = pDate.slice(0,9);
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
	this.saveProject = function(pTitle,pAuthor,pDate,pContent){
		var savedProjects = {title: pTitle, author: pAuthor, date: pDate, content: pContent};
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
});