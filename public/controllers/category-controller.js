angular.module('myApp').controller('CategoryCtrl', function ($scope, $http, $state) {
    $scope.init = function () {
      $http.get('api/categories').then(
          (res) =>{
              $scope.categories = res.data;
          }
      );
    };
    $scope.addCategory = function () {
        let category = {
            name: $scope.name
        };
        $http.post('api/categories', category).then(
            (res) =>{
                alert('category added successfully');
                $state.go('categoryList');
            }
        );
    }
});