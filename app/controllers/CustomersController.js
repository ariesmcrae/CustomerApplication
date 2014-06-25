(function () {

    "use strict";

    var customersController = function ($scope, CustomersFactory, appSettings, $log) {
        $scope.sortByCustomerProperty = 'name'; //default sort
        $scope.isSortReversed = false; //default
        $scope.appSettings = appSettings;

        CustomersFactory.getCustomers()
            .success(function(customers) {
                $scope.customers = customers;
            })
            .error(function(data, status, headers, config) {
                $log.log(data.error);
                //console.error('Error returned from CustomersFactory.getCustomers');
            });

        $scope.doSort = function (theCustomerProperty) {
            $scope.sortByCustomerProperty = theCustomerProperty;
            $scope.isSortReversed = !$scope.isSortReversed;
        };
    }; //customersController


    //workaround so that we're still safe after JS minification for production.
    customersController.$inject = ['$scope', 'CustomersFactory', 'appSettings', '$log'];

    //register controller with angular
    angular.module('customersApp').controller('CustomersController', customersController);

}());


