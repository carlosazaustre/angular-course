(function() {

  /* @ngInject */
  angular
    .module('directorio.services', ['ngResource'])
    .factory('Empleado', Empleado);

  /* @ngInject */
  /*function Empleado($resource, API_URL) {
      var endpoint = API_URL + "/empleados/:empleadoId";

      return $resource(endpoint, { empleadoId: '@id'});
  };*/
  function Empleado ($http, API_URL) {
    return {
      getAll      : getAll,
      getEmpleado : getEmpleado
    }

    function getAll() {
      return $http.get(API_URL + '/empleados');
    }

    function getEmpleado(empleadoId) {
      return $http.get(API_URL + '/empleados/' + empleadoId);
    }
  }

})();
