(function() {

  angular
    .module('empleados.components')
    .controller('DetalleController', DetalleController);

  function DetalleController ($routeParams, Empleado, empleadoService) {
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
      var results;

      if(empleadoService.getData().length === 0) {
        Empleado
          .getAll()
          .success(function (data) {
            empleadoService.putData(data);
            vm.subordinados = empleadoService.getData().filter(function(empleado) {
              return managerId === empleado.managerId;
            });
          })
      } else {
        vm.subordinados = empleadoService.getData().filter(function(empleado) {
          return managerId === empleado.managerId;
        });
      }
    }

  }

  DetalleController.$inject = ['$routeParams', 'Empleado', 'empleadoService'];

})();
