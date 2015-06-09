(function () {

  angular
    .module('empleados.components')
    .directive('empleadoContacto', empleadoContacto);

  function empleadoContacto() {
    return {
      restrict: 'EA',
      controller: 'DetalleController',
      templateUrl: 'js/components/detalle/directives/empleado-contacto.html'
    }
  }

})();
