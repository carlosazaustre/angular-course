(function() {

  angular
    .module('directorio.controllers', ['directorio.services'])
    .controller('EmpleadosListController', EmpleadosListController)
    .controller('EmpleadoDetailController', EmpleadoDetailController)
    .controller('TabsController', TabsController);

  function EmpleadosListController(Empleado) {
    var vm = this;
    this.empleados = Empleado.query();
  }

  function EmpleadoDetailController($routeParams, Empleado) {
    var vm = this;
    this.empleado = Empleado.get($routeParams.empleadoId);
  }

  function TabsController() {
    this.tab = 1;
    this.selectTab = function(tab) {
      this.tab = tab;
    };
  }

})();
