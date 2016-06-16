(function () {

	var salesController = function (mainFactory, $http, $log) {

		var vm = this;
		vm.title = "Sales Tracking"
		vm.today = (new Date).getTime();
		vm.sales = null;
		vm.sortBy = 'date';
		vm.reverse = true;

		vm.refresh = function () {
			factory.getSales().success(function (data) {
				vm.sales = data;
				vm.entry = "";
				console.log(data);
				console.log('SUCCESS: Sales Information Received');
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}

		vm.addSalesEntry = function () {
			$http.post('/sales', vm.entry).success(function (response) {
				vm.refresh();
				console.log(response);
			});
		}

		vm.removeSalesEntry = function (id) {
			$http.delete('/sales/' + id).success(function (response) {
				vm.refresh();
			});
		}





		vm.refresh();

	}

	angular.module('myApp').controller('salesController', salesController);

}());