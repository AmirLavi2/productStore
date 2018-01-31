angular.module('myApp').controller('HomeCtrl', function ($scope, userService, $http) {
    $scope.cart = userService.getCart();
    $scope.$on('loggedin', (event, args) => {
        $scope.user = userService.RestoreState();
        $scope.cart = userService.getCart();
    });

    $scope.init = ()=> {
        $http.get('api/products').then(
            (res) => {
                $scope.products = res.data;
            }
        );
        $http.get('api/orders').then(
            (res) => {
                $scope.orders = res.data;
            }
        );
    }

});