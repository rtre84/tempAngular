function productCardAutofocus() {
  return {
    restrict: 'A',
    scope: false,
    link: function ($scope, $element, $attrs) {
      $scope.$watch($attrs.productCardAutofocus, function (newValue, oldValue) {
        if (!newValue) {
          return;
        }
        setTimeout(function () {
          $element[0].focus();
        }, 0);
      });
    }
  };
}

angular
  .module('app')
  .directive('productCardAutofocus', productCardAutofocus);
