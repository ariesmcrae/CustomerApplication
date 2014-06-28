(function () {

	"use strict";

    var orderController = function ($scope, $routeParams, customersFactory, $log) {

        customersFactory.getCustomer($routeParams.customerId)
            .success(function (customer) {
                $scope.customer = customer;
            })
            .error(function (data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });
    };

    //workaround so that we're still safe after JS minification for production.
    orderController.$inject = ['$scope', '$routeParams', 'customersFactory', '$log'];

    //register controller with angular
    angular.module('customersApp').controller('orderController', orderController);

}());


