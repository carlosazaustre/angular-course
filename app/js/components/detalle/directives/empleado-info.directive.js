(function () {

  angular
    .module('empleados.components')
    .directive('empleadoInfo', empleadoInfo);

  function empleadoInfo() {
    return {
      restrict: 'EA',
      controller: 'DetalleController',
      templateUrl: 'js/components/detalle/directives/empleado-info.html'
    }
  }

})();
