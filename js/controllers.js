(function() {

  angular
    .module('directorio.controllers', ['directorio.services'])
    .controller('EmpleadosListController', EmpleadosListController)
    .controller('EmpleadoDetailController', EmpleadoDetailController);

  function EmpleadosListController(Empleado) {
    var vm = this;
    this.empleados = Empleado.query();
  }

  function EmpleadoDetailController($routeParams, Empleado) {
    var vm = this;
    this.empleado = Empleado.get($routeParams.empleadoId);
  }

})();
