(function () {

	var mainController = function (mainFactory) {

		var vm = this;
		vm.name = 'Amanda';
		vm.factoryGreeting = mainFactory.greeting();

		console.log('Hello from mainController.js');

	}

	angular.module('myApp').controller('mainController', mainController);

}());