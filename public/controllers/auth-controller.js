angular.module('myApp').controller('AuthCtrl', function ($scope, $http, $state, $rootScope, userService, CITIES) {

    $scope.init = () => {
        $scope.cities = CITIES;
    };

    $scope.register = () => {
        let user = {
            fname: $scope.fname,
            lname: $scope.lname,
            email: $scope.email,
            password: $scope.password,
            city: $scope.city,
            street: $scope.street
        };

        $http.post('api/register', user).then(
            (res) => {
                let user = res.data;

                alert('User registered successfully');
                $state.go('login');
            },
            (err) => {
                console.log(err);
            });
    };

    $scope.login = () => {
        let email = $scope.email;
        let password = $scope.password;

        $http.post('api/login', {email: email, password: password}).then((res) => {

            if (res.data.message && res.data.message === 'user not found') {
                alert('user not exist');
                return false;
            }

            userService.SaveState(res.data);
            let cart = userService.getCart();
            $rootScope.$broadcast('loggedin');
            $state.go('store');
        }, (err) => {
            let error = err;
        })
    };
});