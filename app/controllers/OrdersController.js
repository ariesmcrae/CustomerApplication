(function () {

    "use strict";

    var ordersController = function ($scope, $routeParams, CustomersFactory) {
        CustomersFactory.getCustomer($routeParams.customerId)
            .success(function(customer) {
                $scope.customer = customer;
            })
            .error(function(data, status, headers, config) {
                console.error('Error returned from CustomersFactory.getCustomer');
            });
    };

    //workaround so that we're still safe after JS minification for production.
    ordersController.$inject = ['$scope', '$routeParams', 'CustomersFactory'];

    //register controller with angular
    angular.module('customersApp').controller('OrdersController', ordersController);

}());


