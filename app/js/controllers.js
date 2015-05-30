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
    Empleado
      .getAll()
      .success(function(data) {
        $rootScope.empleados = data;
        vm.empleados = data;
      })
      .error(function(err) {
        console.log('Ha ocurrido un error: '+ err);
      })
  }

  /* @ngInject */
  function EmpleadoDetailController($routeParams, Empleado) {
    var vm = this;
    Empleado
      .getEmpleado( $routeParams.empleadoId )
      .success(function(data) {
        vm.empleado = data;
      })
      .error(function(err) {
        console.log('Ha ocurrido un error: '+ err);
      })
  }

  /* @ngInject */
  function ReportsController($rootScope, $routeParams, Empleado) {

    // Busca que empleados tienen de manager, el Id que se pasa
    // por parámetro
    var vm = this;
    findByManager(parseInt($routeParams.empleadoId));

    function findByManager (managerId) {
      if ($rootScope.empleados) {
        var results = $rootScope.empleados.filter(function(empleado) {
          return managerId === empleado.managerId;
        });
        vm.subordinados = results;
      }
      else {
        Empleado
          .getAll()
          .success(function (data) {
            var results = data.filter(function(empleado) {
              return managerId === empleado.managerId;
            });
            vm.subordinados = results;
          });
      }
    }
  }

  function TabsController() {
    this.tab = 1;
    this.selectTab = function(tab) {
      this.tab = tab;
    };
  }

})();
