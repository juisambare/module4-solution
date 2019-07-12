(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menulist/templates/menulist.template.html',
  bindings: {
    items: '<'
  }
});

})();
