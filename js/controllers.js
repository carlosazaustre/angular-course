(function() {

  angular
    .module('directorio.controllers', ['directorio.services'])
    .controller('EmpleadosListController', EmpleadosListController);

  function EmpleadosListController(Empleado) {
    var vm = this;

    debugger;
    vm.empleados = Empleado.query();
  }

})();
