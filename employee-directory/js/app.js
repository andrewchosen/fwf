// Created by Andrew Lancaster on 7/16/2015

angular.module("EmployeeDirectory", []).controller("EDController", function($scope,DataService){
	$scope.employees = DataService.getEmployees();
	$scope.newEmployee = {};

	$scope.addNewEmployee = function(){
		if($scope.newEmployee.name != undefined){
			DataService.saveEmployee($scope.newEmployee.name,$scope.newEmployee.street,$scope.newEmployee.city,$scope.newEmployee.state,$scope.newEmployee.zip);
			$scope.newEmployee = {};
		}else{
			alert("Please fill out an employee name.");
		}
	};

	$scope.removeEmployee = function(i){
		DataService.removeEmployee(i);
	};

	$scope.clear = function(){
		DataService.deleteLocalStorage();
	}
});