angular.module('myApp').factory('userService', ['$rootScope', function ($rootScope) {

    var service = {

        SaveState: function (user) {
            sessionStorage.user =JSON.stringify(user);// angular.toJson(service.model);
        },

        RestoreState: function () {
            //service.model = angular.fromJson(sessionStorage.userService);
            if(sessionStorage.user){
                return JSON.parse(sessionStorage.user);
            }
        },
        Logout: function () {
            sessionStorage.removeItem('user');
        },
        getCart:function () {
            if(localStorage.cart){
                return JSON.parse(localStorage.cart);
            }else{
                let cart={
                    products:[],
                    date:new Date(),
                };
                localStorage.cart=JSON.stringify(cart);
            }
        }
    };

    // $rootScope.$on("savestate", service.SaveState);
    // $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);