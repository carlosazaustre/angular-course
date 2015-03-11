(function() {

  angular
    .module('directorio', ['ngRoute', 'directorio.controllers'])
    .config(config);

  function config($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/empleados-list.html',
        controller: 'EmpleadosListController',
        controllerAs: 'empListCtrl'
      })
      .when('/empleado/:empleadoId', {
        templateUrl: 'partials/empleado-detail.html',
        controller: 'EmpleadoDetailController',
        controllerAs: 'empDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
