(function() {

  angular
    .module('empleados.components')
    .controller('DetalleController', DetalleController);

  function DetalleController ($routeParams, Empleado) {
    var vm = this;
    this.selectTab = selectTab;

    initialize();

    function initialize () {
      vm.tab = 1;

      Empleado
        .getEmpleado( $routeParams.empleadoId )
        .success(function(data) {
          vm.empleado = data;
        })
        .error(function(err) {
          console.log('Ha ocurrido un error: '+ err);
        });

      _findByManager(parseInt($routeParams.empleadoId));
    }

    function selectTab (tab) {
      vm.tab = tab;
    }

    // -- Funciones auxiliares -------------------------------------------------

    function _findByManager (managerId) {
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

  DetalleController.$inject = ['$routeParams', 'Empleado'];

})();
