(function() {

  angular
    .module('empleados')
    .constant('API_URL', 'http://taller-angular.carlosazaustre.es')
    .config(appConfig);

  function appConfig ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'js/components/listado/listado.html',
        controller: 'ListadoController',
        controllerAs: 'listado'
      })
      .when('/empleado/:empleadoId', {
        templateUrl: 'js/components/detalle/detalle.html',
        controller: 'DetalleController',
        controllerAs: 'detalle'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  appConfig.$inject = ['$routeProvider', '$locationProvider'];

})();
