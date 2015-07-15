// Created by Andrew Lancaster on 7/9/2015

var app = angular.module("groceryList", []);
app.controller("GroceryController", function($scope) {
	$scope.newItem;
	$scope.groceries = ["Bread","Milk","Eggs"];

	// Add Item
	$scope.addItem = function(){
		if($scope.newItem != "" && $scope.groceries.indexOf($scope.newItem) === -1){
			$scope.groceries.push($scope.newItem);
			$scope.newItem = "";
		}
	}

	// Remove Item
	$scope.removeItem = function(item){
		var index = $scope.groceries.indexOf(item);
		$scope.groceries.splice(index,1);
	}
});