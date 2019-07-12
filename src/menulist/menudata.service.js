(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$http'];
function MenuDataService($q, $http) {
  var service = this;
  service.getAllCategories = function() {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(result){
      return result.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: " https://davids-restaurant.herokuapp.com/menu_items.json",
      params : {
        category : categoryShortName
      }
    }).then(function(result){
      return result.data.menu_items;
    });
  };
}

})();
