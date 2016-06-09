(function () {

	var wineFactory = function ($http) {

		var factory = {};
		


		factory.getWines = function () {
			return $http.get('/winelist');
		};

		return factory;
	};

	angular.module('oliveApp').factory('wineFactory', wineFactory);

}());