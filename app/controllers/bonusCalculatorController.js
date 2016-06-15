(function () {

	var bonusCalculatorController = function ($http, mainFactory) {

		var vm = this;
		vm.title = "Monthly Sales Bonus Calculator";
		vm.bonusData = {};
		vm.monthlySalary = 0;

		vm.refresh = function () {
			factory.getBonusData().success(function (data) {
				vm.bonusData = data[0];
				vm.monthlySalary = data[0].salary/12;
				console.log(data[0]);
				console.log('SUCCESS: Bonus Information Received');
			}).error(function (data, status, headers, config) {
				$log.log(data.error + ' ' + status);
			});
		}
		
		vm.updateBonusData= function() {
			
			$http.put('/bonusCalculator/' + vm.bonusData._id, vm.bonusData).success(function (response) {

				console.log("updating bonus data...");
				vm.refresh();
			});
		};
		
		
		vm.getBonusPayout = function (sales, target) {

			var ratio = sales / target;
			var bonusMultiplier = 0;

			if (ratio >= 0.8) {
				bonusMultiplier += 0.05;
			}

			if (ratio >= 1) {
				bonusMultiplier += 0.05;
			}

			if (ratio >= 1.2) {
				bonusMultiplier += 0.10;
			}


			return vm.monthlySalary * bonusMultiplier;

		}
		
		vm.refresh();

		

	}

	angular.module('myApp').controller('bonusCalculatorController', bonusCalculatorController);

}());