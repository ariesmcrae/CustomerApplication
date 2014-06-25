(function () {

    "use strict";

    var ordersController = function ($scope, $routeParams, CustomersFactory) {
        $scope.customer = CustomersFactory.getCustomer($routeParams.customerId);
    };

    //workaround so that we're still safe after JS minification for production.
    ordersController.$inject = ['$scope', '$routeParams', 'CustomersFactory'];

    //register controller with angular
    angular.module('customersApp').controller('OrdersController', ordersController);

}());


