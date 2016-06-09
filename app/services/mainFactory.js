(function () {
	var mainFactory = function ($http) {

		factory = {};

		factory.greeting = function () {

			var message = "Hello from mainFactory!";

			return message;

		};

		factory.getWines = function () {
			return $http.get('/winelist');
		};
		
		factory.getStaff = function () {
			return $http.get('/staffInformation');
		};

		return factory;

	};

	angular.module('myApp').factory('mainFactory', mainFactory);

}());