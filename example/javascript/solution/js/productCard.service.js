function TodoService($http, $sce) {

  var API = 'https://www.abercrombie.com/anf/nativeapp/qa/codetest/codeTest_exploreData.json';

  function create(todo) {

  }

  function retrieve() {
    return $http.get(API).then(function (response) {
      console.log(response);

      response.bottomDescription = $sce.trustAsHtml(response.bottomDescription);

      return response.data;
    });
  }

  function update(todo) {

  }

  function remove(todo) {

  }

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  };
}

angular
  .module('app')
  .factory('TodoService', TodoService);
