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

	.controller("NewsController", function($scope){
		$scope.test = "Hello World 1";
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