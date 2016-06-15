(function() {
	
	var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);
	
	app.config(function ($routeProvider) {

		$routeProvider
			.when('/', {
			controller: 'mainController as vm',
			templateUrl: 'app/views/main.html'
		})
			.when('/storeOverview', {
			controller: 'storeOverviewController as vm',
			templateUrl: 'app/views/storeOverview.html'
		})
			.when('/staffInformation', {
			controller: 'staffInformationController as vm',
			templateUrl: 'app/views/staffInformation.html'
		})
			.when('/schedule', {
			controller: 'scheduleController as vm',
			templateUrl: 'app/views/schedule.html'
		})
			.when('/winelist', {
			controller: 'winelistController as vm',
			templateUrl: 'app/views/winelist.html'
		})
			.when('/wineEducation', {
			controller: 'wineEducationController as vm',
			templateUrl: 'app/views/wineEducation.html'
		})
			.when('/bonusCalculator', {
			controller: 'bonusCalculatorController as vm',
			templateUrl: 'app/views/bonusCalculator.html'
		})
			.when('/sales', {
			controller: 'salesController as vm',
			templateUrl: 'app/views/sales.html'
		})
			.when('/vendors', {
			controller: 'vendorsController as vm',
			templateUrl: 'app/views/vendors.html'
		})
			.otherwise({ redirectTo: '/' });
	});
	
}());