(function() {

  angular
    .module('empleados.components')
    .controller('ListadoController', ListadoController);

  function ListadoController ($rootScope, Empleado) {
    var vm = this;

    initialize();

    function initialize () {
      Empleado
        .getAll()
        .success(function(data) {
          $rootScope.empleados = data;
          vm.empleados = data;
        })
        .error(function(err) {
          console.log('Ha ocurrido un error: '+ err);
        });
    }

  }

  ListadoController.$inject = ['$rootScope', 'Empleado'];

})();
