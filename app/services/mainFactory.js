(function () {
	var mainFactory = function ($http) {

		factory = {};

		factory.greeting = function () {

			var message = "Hello from mainFactory!";

			return message;

		};

		factory.getStoreInfo = function () {
			return $http.get('/storeOverview');
			console.log("Retrieving store info...");
		}
		
		factory.getWines = function () {
			return $http.get('/winelist');
		};
		
		factory.getStaff = function () {
			return $http.get('/staffInformation');
		};
		
		factory.getSales = function () {
			return $http.get('/sales');
			console.log("Getting sales...");
		};
		
		factory.getBonusData = function () {
			return $http.get('/bonusCalculator');
			console.log("Getting bonus data...");
		};
		
		factory.getVendor = function () {
			return $http.get('/vendors');
		};
		
		factory.getYelpReview = function () {
			return $http.get('/yelp');
		};
		

		return factory;

	};

	angular.module('myApp').factory('mainFactory', mainFactory);

}());