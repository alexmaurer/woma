(function () {

	var storeOverviewController = function ($http, mainFactory) {

		var vm = this;
		vm.title = 'Store Overview';
		vm.storeInformation = {};

		vm.refresh = function () {
			factory.getStoreInfo().success(function (data) {
				vm.storeInformation = data[0];
				console.log('SUCCESS: Store Information received.');
				console.log(data[0]);
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}
		
		vm.updateStoreInfo = function() {
			$http.put('/storeOverview/' + vm.storeInformation._id, vm.storeInformation).success(function (response) {
				vm.refresh();
			});
		};
		

		vm.getYelpReviews = function () {
			var s = document.createElement("script");
			s.async = true;
			s.onload = s.onreadystatechange = function () {
				getYelpWidget("we-olive-and-wine-bar-los-gatos", "100%", "RED", "n", "n", "3");
			};
			s.src = 'http://chrisawren.com/widgets/yelp/yelpv2.js';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);

		}
		
		
		
		vm.getYelpReviews();
		vm.refresh();

	}

	angular.module('myApp').controller('storeOverviewController', storeOverviewController);

}());

/*


vm.storeInformation = {
	manager: {
		firstName: "Amanda",
		lastName: "Sarich",
		email: "asarich@weolive.com"
	},
	address: {
		street1: "112 North Santa Cruz Avenue",
		street2: "",
		city: "Los Gatos",
		state: "CA",
		zip: "95030"
	},
	startOfBusinessWeek: "Sunday"
};

*/