(function() {

  /* @ngInject */
  angular
    .module('directorio.controllers', ['directorio.services'])
    .controller('EmpleadosListController', EmpleadosListController)
    .controller('EmpleadoDetailController', EmpleadoDetailController)
    .controller('ReportsController', ReportsController)
    .controller('TabsController', TabsController);

  /* @ngInject */
  function EmpleadosListController($rootScope, Empleado) {
    var vm = this;
    this.empleados = Empleado.query();
    $rootScope.empleados = this.empleados;
  }

  /* @ngInject */
  function EmpleadoDetailController($routeParams, Empleado) {
    var vm = this;
    this.empleado = Empleado.get({ empleadoId: $routeParams.empleadoId });
  }

  /* @ngInject */
  function ReportsController($rootScope, $routeParams, Empleado) {

    // Busca que empleados tienen de manager, el Id que se pasa
    // por parámetro
    var findByManager = function(managerId) {
      if($rootScope.empleados) {
        var results = $rootScope.empleados.filter(function(empleado) {
          return managerId === empleado.managerId;
        });
        return results;
      }
    };

    var vm = this;
    this.subordinados = findByManager(parseInt( $routeParams.empleadoId ));
  }

  function TabsController() {
    this.tab = 1;
    this.selectTab = function(tab) {
      this.tab = tab;
    };
  }

})();
