(function () {

	var storeOverviewController = function (mainFactory) {

		var vm = this;
		vm.greeting = "Hello from storeOverviewController"
		vm.factoryGreeting = mainFactory.greeting();
	}

	angular.module('myApp').controller('storeOverviewController', storeOverviewController);

}());