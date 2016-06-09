(function () {

	var scheduleController = function (mainFactory) {

		var vm = this;
		vm.greeting = "Hello from scheduleController"
		vm.factoryGreeting = mainFactory.greeting();
	}

	angular.module('myApp').controller('scheduleController', scheduleController);

}());