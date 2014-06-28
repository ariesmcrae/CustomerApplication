(function () {

    "use strict";

    var customersFactory = function ($http) {
        var factory = {};

        factory.getCustomers = function () {
            return $http.get('/customers');
        };



        factory.getCustomer = function (customerId) {
            return $http.get('/customers/' + customerId);
        };



        factory.getOrders = function() {
            return $http.get('/orders');
        }


		factory.deleteCustomer = function (customerId) {
			return $http.delete('/customers/' + customerId);
		};

        return factory;

    }; //customersFactory


    //workaround so that we're still safe after JS minification for production.
    customersFactory.$inject = ['$http'];

    //register factory with angular
    angular.module('customersApp').factory('customersFactory', customersFactory);

}());
