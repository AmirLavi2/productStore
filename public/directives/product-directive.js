angular.module('myApp').directive('product', () => {
    return {
        restrict: 'E',
        template: `
	        <div class="col-md-3">
              <div class="thumbnail">
                <img ng-src="{{product.image}}" alt="" height="200px" width="200px">
                <div class="caption">
                  <h4 class="pull-right">{{product.price}} ₪</h4>
                  <h4>{{product.name}}</h4>            
                <button type="button" ng-click="addToCart(product)" class="btn btn-primary form-control">Add To Cart</button>
              </div>
            </div>`
    }
});
// <div class="col-sm-3 text-center">
//     <div>{{product.name}}</div>
// <img class="thumbnail" style="margin-bottom:0" src="{{product.image}}" height="50" width="50"/>
//     <div>{{product.price}} ₪</div>
// <div>
// <button type="button" ng-click="addToCart(product)" class="btn btn-default">Add To Cart</button>
// </div>
// </div>