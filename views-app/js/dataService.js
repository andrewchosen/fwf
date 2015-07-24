angular.module("MyPortfolio").service("DataService", function(){
	var postArray = [];
	this.getPosts = function(){
		var postArray = JSON.parse(localStorage.getItem("postsLS")) || [];
		postsArray = postArray;
			console.log(postArray);
		return postsArray;
	}
	// Save News Post
	this.savePost = function(pTitle,pAuthor,pDate,pContent){
		var savedPosts = {name: pName, street: pStreet, city: pCity, state: pState, zip: pZip};
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
});