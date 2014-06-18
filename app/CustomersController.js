(function () {

    "use strict";

    var customersController = function ($scope) {
        $scope.customerProperty = 'name'; //default sort
        $scope.isReversed = false; //default

        $scope.customers = [{name: 'Aaa', city: 'Cincinatti', joined: '2001-01-01', orderTotal: '99'},
                            {name: 'Bbbb', city: 'Dayton', joined: '2003-10-21', orderTotal: '53.99'},
                            {name: 'Cccc', city: 'Atlanta', joined: '2008-03-20', orderTotal: '105'},
                            {name: 'Dddd', city: 'Boston', joined: '2011-07-12', orderTotal: '78.09'}];

        $scope.doSort = function (theCustomerProperty) {
            $scope.customerProperty = theCustomerProperty;
            $scope.isReversed = !$scope.isReversed;
        };
    };

    //workaround so that we're still safe after JS minification for production.
    customersController.$inject = ['$scope'];

    customersApp.controller('CustomersController', customersController);

}());


