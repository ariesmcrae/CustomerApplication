(function() {

    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'customersController',
                templateUrl: 'app/views/customers.html'
            })

            .when('/orders/:customerId', {
                controller: 'orderController',
                templateUrl: 'app/views/order.html'
            })

            .when('/orders', {
                controller: 'allOrdersController',
                templateUrl: 'app/views/allOrders.html'
            })

            .otherwise( { redirectTo: '/' } );
    });

}());
