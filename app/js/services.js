(function() {

  /* @ngInject */
  angular
    .module('directorio.services', ["ngResource"])
    .factory('Empleado', Empleado);

  /* @ngInject */
  function Empleado($resource) {
      return $resource("/db/:empleadoId.json", {}, {
        query: {
          method: "GET",
          params: { empleadoId: 'empleados'},
          isArray: true
        }
      });
  };

})();
