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
				DataService.savePost($scope.newPost.title,$scope.newPost.author,$scope.newPost.date,$scope.newPost.content);
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
	.controller("ProjectsController", function($scope,DataService){
		$scope.projects = DataService.getProjects();
		$scope.newProject = {};

		$scope.addNewProject = function(){
			if($scope.newProject.name != undefined){
				DataService.saveProject($scope.newProject.name,$scope.newProject.date,$scope.newProject.description);
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

	// Testimonials Controller
	.controller("TestimonialsController", function($scope,$routeParams,DataService){
		$scope.testimonials = DataService.getTestimonials();
		$scope.newTestimonial = {};

		$scope.addNewTestimonial = function(){
			if($scope.newTestimonial.name != undefined){
				DataService.saveTestimonial($scope.newTestimonial.name,$scope.newTestimonial.quote);
				$scope.newTestimonial = {};
			}else{
				alert("Please fill out a testimonial name.");
			}
		};

		$scope.removeTestimonial = function(i){
			DataService.removeTestimonial(i);
		};

		$scope.clear = function(){
			DataService.deleteLocalStorage();
		}

		// Route Param
		$scope.clientDescription = $routeParams.paramTest;
	})

	.controller("MainController", function($scope){
		$scope.test = "Hello World";
	})