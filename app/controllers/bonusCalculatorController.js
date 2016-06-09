(function () {

	var bonusCalculatorController = function (mainFactory) {

		var vm = this;
		
		vm.greeting = "Hello from BonusCalculatorController"
		vm.factoryGreeting = mainFactory.greeting();
	}

	angular.module('myApp').controller('bonusCalculatorController', bonusCalculatorController);

}());