(function () {

	var winelistController = function ($http, $log, mainFactory) {

		var vm = this;
		vm.title= "Wine List Manager"
		vm.factoryGreeting = mainFactory.greeting();
		vm.wines = null;
		vm.wineStyles = ['Red', 'White', 'Rose', 'Sparkling'];
			
		vm.refresh = function() {
			factory.getWines().success(function(data) {
				vm.wines = data;
				vm.wine = "";
				console.log(data);
				console.log('SUCCESS: Wine List Received');
			}).error(function(data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}
		
		vm.refresh();
		
		vm.addWine = function() {
			$http.post('/winelist', vm.wine).success(function(response) {
				vm.refresh();
				console.log(response);
			});
		}
		
		vm.removeWine = function(id) {
			$http.delete('/winelist/' + id).success(function(response) {
				vm.refresh();
			});
		}
				
	}

	angular.module('myApp').controller('winelistController', winelistController);

}());