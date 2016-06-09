(function () {

	var staffInformationController = function ($http, mainFactory) {

		var vm = this;
		vm.title = 'Staff Information';
		vm.staff = null;
		vm.addPerson = false;

		vm.refresh = function () {
			factory.getStaff().success(function (data) {
				vm.staff = data;
				vm.person = "";
				console.log('SUCCESS: Staff Information Received');
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}

		vm.addStaff = function () {
			$http.post('/staffInformation', vm.person).success(function (response) {
				vm.refresh();
				console.log(response);
			});
		}

		vm.removeStaffMember = function (id) {
			$http.delete('/staffInformation/' + id).success(function (response) {
				vm.refresh();
			});
		}


		vm.refresh();
	}

	angular.module('myApp').controller('staffInformationController', staffInformationController);

}());