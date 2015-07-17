angular.module("EmployeeDirectory").service("DataService", function(){
	var employeeArray = [];
	this.getEmployees = function(){
		var employeeArray = JSON.parse(localStorage.getItem("employeesLS")) || [];
		employeesArray = employeeArray;
			console.log(employeeArray);
		return employeesArray;
	}
	// Save Employee
	this.saveEmployee = function(pName,pAddress,pCity,pState,pZip){
		var savedEmployees = {name: pName, address: pAddress, city: pCity, state: pState, zip: pZip};
		employeesArray.push(savedEmployees);
		localStorage.setItem("employeesLS", JSON.stringify(employeesArray));
	}
	// Remove Employee
	this.removeEmployee = function(pIndex){
		employeesArray.splice(pIndex,1);
		localStorage.setItem("employeesLS", JSON.stringify(employeesArray));
	}
	// Clear Data
	this.deleteLocalStorage = function(){
		employeesArray.splice(0);
		localStorage.clear();
	}
});