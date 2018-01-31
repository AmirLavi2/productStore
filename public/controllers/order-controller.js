angular.module('myApp').controller('orderCtrl', function ($scope, CITIES, $http) {
    $scope.init = function () {
        if (sessionStorage.cart) {
            $scope.cart = JSON.parse(sessionStorage.cart);
            $scope.user = JSON.parse(sessionStorage.user);
        }
        $scope.cities = CITIES;
        $scope.isCardValid = true;
    };
    $scope.dbClick = () => {

        $scope.street = $scope.user.street;
        $scope.city = $scope.user.city;

    };
    $scope.placeOrder = function () {

        if (!ValidateCreditCardNumber()) {
            $scope.isCardValid = false;
            return false;
        }

        has3OrdersIndate().then((res) => {
            if (res.data && res.data.length >= 3) {
                alert('Change date ,there are alredy 3 orders');
                return false;
            }

            var products = [];
            Object.keys($scope.cart.cart).forEach(function (key, index) {
                products.push($scope.cart.cart[key].value._id);
            });


            let order = {
                user: $scope.user._id,
                products: products,
                price: $scope.cart.total,
                city: $scope.city,
                street: $scope.street,
                order_date: new Date(),
                delivery_date: $scope.shippingDate,
                card_digits: $scope.creditCart
            }
            $http.post('api/orders', order).then((res) => {
                if (res.data && res.data._id) {
                    alert('Order has created successfully');
                }
            })
        });

    };


    function has3OrdersIndate() {
        var start = new Date();
        start.setHours(0, 0, 0, 0);

        var end = new Date();
        end.setHours(23, 59, 59, 999);

        return $http.post('api/ordersByDate', {from: start, to: end});
    }

    const ValidateCreditCardNumber = () => {

        let ccNum = $scope.creditCart;
        let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
        let amexpRegEx = /^(?:3[47][0-9]{13})$/;
        let discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        let isValid = false;

        if (visaRegEx.test(ccNum)) {
            isValid = true;
        } else if (mastercardRegEx.test(ccNum)) {
            isValid = true;
        } else if (amexpRegEx.test(ccNum)) {
            isValid = true;
        } else if (amexpRegEx.test(ccNum)) {
            isValid = true;
        } else if (discovRegEx.test(ccNum)) {
            isValid = true;
        }

        return isValid;
    };
})
;