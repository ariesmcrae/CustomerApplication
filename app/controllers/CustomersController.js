(function () {

    "use strict";

    var customersController = function ($scope, CustomersFactory) {
        $scope.sortByCustomerProperty = 'name'; //default sort
        $scope.isSortReversed = false; //default
        $scope.customers = CustomersFactory.getCustomers();

        $scope.doSort = function (theCustomerProperty) {
            $scope.sortByCustomerProperty = theCustomerProperty;
            $scope.isSortReversed = !$scope.isSortReversed;
        };
    }; //customersController


    //workaround so that we're still safe after JS minification for production.
    customersController.$inject = ['$scope', 'CustomersFactory'];

    //register controller with angular
    angular.module('customersApp').controller('CustomersController', customersController);

}());


