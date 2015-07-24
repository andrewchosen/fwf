// Created by Andrew Lancaster on 7/16/2015

angular.module("MyPortfolio", ["ngRoute"])

	.config(function($routeProvider){
		$routeProvider.when("/news",{
			templateUrl : "news.html",
			controller : "NewsController"
		}).when("/projects",{
			templateUrl : "projects.html",
			controller : "ProjectsController"
		}).when("/testimonials/:paramTest",{
			templateUrl : "testimonials.html",
			controller : "TestimonialsController"
		})

		.otherwise({
			redirectTo : "/news"
		});
	})

	.controller("NewsController", function($scope,DataService){
		$scope.posts = DataService.getPosts();
		$scope.newPost = {};

		$scope.addNewPost = function(){
			if($scope.newPost.name != undefined){
				DataService.savePost($scope.newPost.title,$scope.newPost.author,$scope.newPost.date,$scope.newPost.content);
				$scope.newPost = {};
			}else{
				alert("Please fill out an post name.");
			}
		};

		$scope.removePost = function(i){
			DataService.removePost(i);
		};

		$scope.clear = function(){
			DataService.deleteLocalStorage();
		}
	})

	.controller("ProjectsController", function($scope){
		$scope.test = "Hello World 2";
	})

	.controller("TestimonialsController", function($scope,$routeParams){
		$scope.test = "Hello World 3";

		$scope.otherTest = $routeParams.paramTest;
	})

	.controller("MainController", function($scope){
		$scope.test = "Hello World";
	})