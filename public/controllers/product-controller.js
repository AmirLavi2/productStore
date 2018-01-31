angular.module('myApp').controller('ProductCtrl', function ($scope, $http, $stateParams, $state) {
    if (!$scope.data) {
        $scope.data = {
            cart: {},
            total: 0
        };
    }


    $scope.init = () => {
        $scope.isCartOpen = true;
        $scope.data = {
            cart: {},
            total: 0
        };

        $http.get('api/categories').then(
            (res) => {
                $scope.categories = res.data;
                $scope.category = res.data[0]._id;
                $scope.fetchProducts();
                $scope.selectedCategory = res.data[0];
            }
        );
    };

    $scope.updateTotal = () => {
        let total = 0;
        Object.keys($scope.data.cart).forEach((key, index) => {
            total += ($scope.data.cart[key].quantity * $scope.data.cart[key].value.price);
        });

        $scope.data.total = total;
    };

    $scope.fetchProducts = () => {
        $http.get('api/products').then(
            (res) => {
                $scope.products = res.data;
            }
        );
    };

    $scope.create = () => {
        let product = {
            name: $scope.name,
            price: $scope.price,
            category: $scope.category,
            image: $scope.image
        };
        $http.post('api/products', product).then(
            () => {
                alert('product added successfully');
                $state.go('productList');
            }
        );
    };

    $scope.findById = () => {
        let id = $stateParams.id;
        $scope.init();
        $http.get('api/products/' + id,).then(
            (res) => {
                $scope.product = res.data;
            }
        );
    };

    $scope.update = () => {
        $http.put('api/products/' + $scope.product._id, $scope.product).then(
            (res) => {
                alert('product updated successfully');
                $state.go('productList');
            }
        );
    };
    $scope.addToCart = (product) => {

        if (!$scope.data.cart[product._id]) {

            $scope.data.cart[product._id] = {
                value: product,
                quantity: 1
            };


        } else {
            $scope.data.cart[product._id].quantity++;
        }
        $scope.data.total += $scope.data.cart[product._id].value.price;
    };
    $scope.order = () => {
        sessionStorage.cart = JSON.stringify($scope.data);
        $state.go('order');
    };

    $scope.selectCategory = (category) => {
        $scope.selectedCategory = category;
    }
});