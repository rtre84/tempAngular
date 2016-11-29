function TodoController(TodoService) {
  var ctrl = this;
  ctrl.newTodo = '';
  ctrl.list = [];
  function getTodos() {
    TodoService
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
    TodoService
      .update(item)
      .then(function () {

      }, function () {
        item.completed = !item.completed;
      });
  };
  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
