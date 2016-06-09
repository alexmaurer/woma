(function () {

	var wineEducationController = function (mainFactory) {

		var vm = this;
		vm.greeting = "Hello from wineEducationController"
		vm.factoryGreeting = mainFactory.greeting();
	}

	angular.module('myApp').controller('wineEducationController', wineEducationController);

}());