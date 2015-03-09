(function() {

  angular
    .module('directorio.controllers', ['directorio.services'])
    .controller('EmpleadosListController', EmpleadosListController);

  function EmpleadosListController(Empleado) {
    var vm = this;

    this.empleados = Empleado.query();

  }

})();
