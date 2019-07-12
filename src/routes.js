(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(function(result){
          return result;
        });


      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menulist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      itemsList: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemId)
                .then(function (items) {
                  return items;
                });
            }]
    }
  });
}

})();
