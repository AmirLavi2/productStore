angular.module('myApp').controller('MainCtrl', function ($scope, userService, $state) {

    $scope.state = true;
    $scope.user = userService.RestoreState();

    $scope.$on('loggedin', (event, args) => {

        $scope.user = userService.RestoreState();
    });

    $scope.logout = () => {
        userService.Logout();
        $state.go('home');
    };

    $scope.changeState = () => {
        $scope.state = !$scope.state;
    }
});