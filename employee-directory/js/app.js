// Created by Andrew Lancaster on 7/16/2015

angular.module("EmployeeDirectory", []).controller("EDController", function($scope,DataService){
	$scope.employees = DataService.getEmployees();
	$scope.newEmployee = {};

	$scope.addNewEmployee = function(){
		DataService.saveEmployee($scope.newEmployee.name,$scope.newEmployee.street,$scope.newEmployee.city,$scope.newEmployee.state,$scope.newEmployee.zip);
		$scope.newEmployee = {};
	};

	$scope.removeEmployee = function(i){
		DataService.removeEmployee(i);
	};

	$scope.clear = function(){
		DataService.deleteLocalStorage();
	}
});