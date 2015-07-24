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

	// News Controller
	.controller("NewsController", function($scope,DataService){
		$scope.posts = DataService.getPosts();
		$scope.newPost = {};

		$scope.addNewPost = function(){
			if($scope.newPost.title != undefined){
				DataService.savePost($scope.newPost.title,$scope.newPost.author,new date($scope.newPost.date),$scope.newPost.content);
				$scope.newPost = {};
			}else{
				alert("Please fill out a post name.");
			}
		};

		$scope.removePost = function(i){
			DataService.removePost(i);
		};

		$scope.clear = function(){
			DataService.deleteLocalStorage();
		}
	})

	// Projects Controller
	.controller("ProjectsController", function($scope){
		$scope.projects = DataService.getProjects();
		$scope.newProject = {};

		$scope.addNewProject = function(){
			if($scope.newProject.title != undefined){
				DataService.saveProject($scope.newProject.title,$scope.newProject.author,$scope.newProject.date,$scope.newProject.content);
				$scope.newProject = {};
			}else{
				alert("Please fill out a project name.");
			}
		};

		$scope.removeProject = function(i){
			DataService.removeProject(i);
		};

		$scope.clear = function(){
			DataService.deleteLocalStorage();
		}
	})

	.controller("TestimonialsController", function($scope,$routeParams){
		$scope.test = "Hello World 3";

		$scope.otherTest = $routeParams.paramTest;
	})

	.controller("MainController", function($scope){
		$scope.test = "Hello World";
	})