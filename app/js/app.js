(function() {

  /* @ngInject */
  angular
    .module('directorio', [
      'ngRoute',
      'directorio.controllers',
      'directorio.services',
      'directorio.templates'
    ])
    .config(appConfig)
    .constant('API_URL', 'http://taller-angular.carlosazaustre.es');

  /* @ngInject */
  function appConfig($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/empleados-list.html',
        controller: 'EmpleadosListController',
        controllerAs: 'empListCtrl'
      })
      .when('/empleado/:empleadoId', {
        templateUrl: 'views/empleado-detail.html',
        controller: 'EmpleadoDetailController',
        controllerAs: 'empDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
