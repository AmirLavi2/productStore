angular.module('myApp', ['ui.router']);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: './views/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: './views/about.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: './views/register.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: './views/login.html',
        })
        .state('addProduct', {
            url: '/addProduct',
            templateUrl: './views/products/addProduct.html'
        })
        .state('addCategory', {
            url: '/addCategory',
            templateUrl: './views/categories/addCategory.html'
        })
        .state('categoryList', {
            url: '/categoryList',
            templateUrl: './views/categories/categoryList.html'
        })
        .state('productList', {
            url: '/productList',
            templateUrl: './views/products/productList.html'
        })
        .state('productEdit', {
            url: '/productEdit/:id',
            templateUrl: './views/products/productEdit.html'
        })
        .state('store', {
            url: '/store',
            templateUrl: './views/store.html'
        })
        .state('order', {
            url: '/order',
            templateUrl: './views/order.html'
        });
});
