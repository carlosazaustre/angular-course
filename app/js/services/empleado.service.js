(function() {

  angular
    .module('empleados.services')
    .service('empleadoService', empleadoService);

  function empleadoService () {
    var _empleados = [];

    return {
      getData: getData,
      putData: putData
    }

    function getData () {
      return _empleados;
    }

    function putData (data) {
      _empleados = data.slice();
    }
  }

})();
