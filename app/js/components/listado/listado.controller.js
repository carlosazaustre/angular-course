(function() {

  angular
    .module('empleados.components')
    .controller('ListadoController', ListadoController);

  function ListadoController (Empleado, empleadoService) {
    var vm = this;
    this.changeSearch = changeSearch;

    initialize();

    function initialize () {
      vm.nombre = true;
      vm.apellido = false;
      vm.title = false;

      Empleado
        .getAll()
        .success(function(data) {
          data.forEach(function(item) {
            item.pic = "http://taller-angular.carlosazaustre.es/asset/" + item.pic;
          });
          empleadoService.putData(data);
          vm.empleados = data;
        })
        .error(function(err) {
          console.log('Ha ocurrido un error: '+ err);
        });
    }

    function changeSearch (field) {
      if (field === 'nombre') {
        vm.nombre = true;
        vm.apellido = false;
        vm.titulo = false;
        vm.searchText = "";

      }
      if (field === 'apellido') {
        vm.apellido = true;
        vm.nombre = false;
        vm.titulo = false;
        vm.searchText = "";
      }
      if (field === 'titulo') {
        vm.titulo = true;
        vm.apellido = false;
        vm.nombre = false;
        vm.searchText = "";
      }
    }

  }

  ListadoController.$inject = ['Empleado', 'empleadoService'];

})();
