(function() {

  angular
    .module('empleados.services')
    .factory('Empleado', Empleado);

  function Empleado ($http, API_URL) {
    var _empleados = [];


    return {
      getAll      : getAll,
      getEmpleado : getEmpleado
    }

    function getAll () {
      if (_empleados.length === 0) {
        $http
          .get(API_URL + '/empleados')
          .success(function (data) {
            _empleados = data.slice;
            return _empleados;
          })
          .error(function (err) {
            console.log(err);
          });
      }
      return _empleados;
      //return $http.get(API_URL + '/empleados');
    }

    function getEmpleado (empleadoId) {
      return $http.get(API_URL + '/empleados/' + empleadoId);
    }

  }

  Empleado.$inject = ['$http', 'API_URL'];

})();
