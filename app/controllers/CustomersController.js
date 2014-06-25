(function () {

    "use strict";

    var customersController = function ($scope, CustomersFactory, appSettings) {
        $scope.sortByCustomerProperty = 'name'; //default sort
        $scope.isSortReversed = false; //default
        $scope.customers = CustomersFactory.getCustomers();
        $scope.appSettings = appSettings;

        $scope.doSort = function (theCustomerProperty) {
            $scope.sortByCustomerProperty = theCustomerProperty;
            $scope.isSortReversed = !$scope.isSortReversed;
        };
    }; //customersController


    //workaround so that we're still safe after JS minification for production.
    customersController.$inject = ['$scope', 'CustomersFactory', 'appSettings'];

    //register controller with angular
    angular.module('customersApp').controller('CustomersController', customersController);

}());


