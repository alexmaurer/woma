(function () {

	var storeOverviewController = function ($http, $log, mainFactory) {

		var vm = this;
		vm.title = 'Store Overview';
		vm.storeInformation = {};
		vm.sales = {};
		var l = null;
		vm.review = null;

		vm.refresh = function () {
			factory.getStoreInfo().success(function (data) {
				vm.storeInformation = data[0];
				console.log('SUCCESS: Store Information received.');
				// console.log(data[0]);
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});

			factory.getYelpReview().success(function (data) {
				console.log('getting Yelp review...');
				vm.review = data[0];
				console.log(data[0]);
			});

			factory.getSales().success(function (data) {
				console.log("Getting Sales...");
				vm.sales = data;
				l = data.length;
				vm.chartData();
				console.log(data[0]);
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}

		vm.updateStoreInfo = function () {
			$http.put('/storeOverview/' + vm.storeInformation._id, vm.storeInformation).success(function (response) {
				vm.refresh();
			});
		};

		/* Yelp widget - http://chrisawren.com/widgets/yelp/
			vm.getYelpReviews = function () {
			var s = document.createElement("script");
			s.async = true;
			s.onload = s.onreadystatechange = function () {
				getYelpWidget("we-olive-and-wine-bar-los-gatos", "100%", "RED", "n", "n", "3");
			};
			s.src = 'http://chrisawren.com/widgets/yelp/yelpv2.js';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);

			console.log("getting Yelp reviews...");
			console.log(x);

		}

		vm.getYelpReviews();
		*/

		// Chart
		vm.chartData = function () {
			vm.labels = ["", "", "", "", "", "", ""];
			vm.series = ['Daily Sales'];
			vm.data = [[vm.sales[l - 7].totalSales, vm.sales[l - 6].totalSales, vm.sales[l - 5].totalSales, vm.sales[l - 4].totalSales, vm.sales[l - 3].totalSales, vm.sales[l - 2].totalSales, vm.sales[l - 1].totalSales]];
			vm.onClick = function (points, evt) {
				console.log(points, evt);
			};
		}

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