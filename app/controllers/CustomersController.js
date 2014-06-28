(function () {

    "use strict";

    var customersController = function ($scope, customersFactory, appSettings, $log, $window) {
		$scope.customers = {};
        $scope.sortByCustomerProperty = 'name'; //default sort
        $scope.isSortReversed = false; //default
        $scope.appSettings = appSettings;


        customersFactory.getCustomers()
            .success(function (customers) {
                $scope.customers = customers;
            })
            .error(function (data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });


        $scope.doSort = function (theCustomerProperty) {
            $scope.sortByCustomerProperty = theCustomerProperty;
            $scope.isSortReversed = !$scope.isSortReversed;
        };


		$scope.deleteCustomer = function (customerId) {
			customersFactory.deleteCustomer(customerId)
				.success(function (status) {
					if (status) {
						for (var i = 0; i < $scope.customers.length; i++) {
							if ($scope.customers[i].id === customerId) {
								$scope.customers.splice(i, 1);
								break;
							}
						}
					} else {
						$window.alert('Unable to delete customer.');
					}
				})
            	.error(function (data, status, headers, config) {
                	$log.log(data.error + ' ' + status);
            	});
		};

    }; //customersController


    //workaround so that we're still safe after JS minification for production.
    customersController.$inject = ['$scope', 'customersFactory', 'appSettings', '$log', '$window'];

    //register controller with angular
    angular.module('customersApp').controller('customersController', customersController);

}());


