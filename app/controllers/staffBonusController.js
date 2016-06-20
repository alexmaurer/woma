(function () {

	var staffBonusController = function ($log, mainFactory) {

		var vm = this;
		vm.greeting = "Hello from staffBonusController"
		vm.factoryGreeting = mainFactory.greeting();
		vm.staff = {};
		
		vm.refresh = function () {
			factory.getStaff().success(function (data) {
				vm.staff = data;
				vm.person = "";
				console.log(data);
				console.log('SUCCESS: Staff Information Received');
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}
		
		vm.totalHours = function() {
				var total = 0;
				for(var i = 0; i < vm.staff.length; i++){
					total += vm.staff[i].hoursWorked;
				}
				return total;
			}
		
		
		vm.refresh();
		
	}

	angular.module('myApp').controller('staffBonusController', staffBonusController);

}());