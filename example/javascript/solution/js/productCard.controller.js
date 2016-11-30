function ProductCardController(ProductCardService) {
  var ctrl = this;
  ctrl.newTodo = '';
  ctrl.list = [];
  function getProductCards() {
    ProductCardService
      .retrieve()
      .then(function (response) {
        console.log(response);
        ctrl.list = response;
      });
  }

  ctrl.getRemaining = function () {
    return ctrl.list.filter(function (item) {
      return !item.completed;
    });
  };
  ctrl.toggleState = function (item) {
    ProductCardService
      .update(item)
      .then(function () {

      }, function () {
        item.completed = !item.completed;
      });
  };
  getProductCards();
}

angular
  .module('app')
  .controller('ProductCardController', ProductCardController);
