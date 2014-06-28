(function() {

	"use strict";

    var allOrdersController = function ($scope, customersFactory, $log) {
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;

        customersFactory.getOrders()
			.success(function(orders) {
            	$scope.orders = orders;
                getOrdersTotal();
			})
            .error(function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });


        function getOrdersTotal() {
            var total = 0;

            for (var i = 0; i < $scope.orders.length; i++) {
                total += $scope.orders[i].total;
            }

            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

    };


    allOrdersController.$inject = ['$scope', 'customersFactory', '$log'];

    angular.module('customersApp').controller('allOrdersController', allOrdersController);

}());
