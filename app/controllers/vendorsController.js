(function () {

	var vendorsController = function ($http, mainFactory) {

		var vm = this;
		vm.title = "Vendor List"
		vm.vendors = null;

		vm.refresh = function () {
			factory.getVendor().success(function (data) {
				vm.vendors = data;
				vm.vendor = "";
				console.log('SUCCESS: Vendors Information Received');
				console.log(data[0].company);
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}

		vm.addVendor = function () {
			$http.post('/vendors', vm.vendor).success(function (response) {
				vm.refresh();
				console.log(response);
			});
		}

		vm.removeVendor = function (id) {
			$http.delete('/vendors/' + id).success(function (response) {
				vm.refresh();
			});
		}


		vm.refresh();
	}

	angular.module('myApp').controller('vendorsController', vendorsController);

}());