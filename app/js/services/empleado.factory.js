(function() {

  angular
    .module('empleados.services')
    .factory('Empleado', Empleado);

  function Empleado ($http, API_URL) {

    return {
      getAll      : getAll,
      getEmpleado : getEmpleado
    }

    function getAll () {
      return $http.get(API_URL + '/empleados');
    }

    function getEmpleado (empleadoId) {
      return $http.get(API_URL + '/empleados/' + empleadoId);
    }

  }

  Empleado.$inject = ['$http', 'API_URL'];

})();
