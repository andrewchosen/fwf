// Created by Andrew Lancaster on 7/16/2015

angular.module("CrudApp", ["ngRoute"])

	.config(function($routeProvider){
		$routeProvider.when("/view1",{
			templateUrl : "view1.html",
			controller : "View1Controller"
		}).when("/view2",{
			templateUrl : "view2.html",
			controller : "View2Controller"
		}).otherwise({
			redirectTo : "/view1"
		});
	})

	.controller("View1Controller", function($scope){
		$scope.test = "Hello World 1";
	})

	.controller("View2Controller", function($scope){
		$scope.test = "Hello World 2";
	})

	.controller("MainController", function($scope){
		$scope.test = "Hello World";
	})