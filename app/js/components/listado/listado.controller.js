(function() {

  angular
    .module('empleados.components')
    .controller('ListadoController', ListadoController);

  function ListadoController (Empleado, empleadoService) {
    var vm = this;

    initialize();

    function initialize () {
      vm.empleados = Empleado.getAll();

      /*Empleado
        .getAll()
        .success(function(data) {
          empleadoService.putData(data);
          vm.empleados = data;
        })
        .error(function(err) {
          console.log('Ha ocurrido un error: '+ err);
        });*/
    }

  }

  ListadoController.$inject = ['Empleado', 'empleadoService'];

})();
