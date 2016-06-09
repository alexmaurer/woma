(function () {

	var winelistController = function ($http, wineFactory) {

		var vm = this;
		vm.wineStyles = ['Red', 'White', 'Sparkling'];

		vm.wines = null;

		function init() {
			wineFactory.getWines().success(function (data) {
				vm.wines = data;
				console.log('BOOZE INBOUND!');

			});
		}
		
		vm.addWine = function(wine) {
			console.log("Attempting to add #datRose");
			$http.post('/winelist', wine).success(function(response) {
			});
		}

		init();

		console.log('Hello from winelistController.js');

	}

	angular.module('oliveApp').controller('winelistController', winelistController);

}());