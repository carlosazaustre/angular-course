(function () {

  angular
    .module('empleados.components')
    .directive('navBar', navBar)
    .controller('NavbarController', NavbarController);

  function navBar () {
    return {
      restrict: 'EA',
      controller: 'NavbarController',
      controllerAs: 'navbar',
      templateUrl: 'js/components/navbar/navbar.html'
    }
  }

  function NavbarController ($routeParams) {
    var vm = this;

    if ($routeParams.empleadoId != undefined) {
      vm.isDetail = true;
    }
  }

})();
