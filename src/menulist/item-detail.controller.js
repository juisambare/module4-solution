(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['itemsList']
function ItemDetailController(itemsList) {
  var itemDetail = this;
  itemDetail.itemsList = itemsList;
}

})();
