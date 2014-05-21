(function() {
  'use strict';
  var app = angular.module('mainApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesCtrl',
        controllerAs: 'edgesCtrl',
        resolve: {
          edges: function(EdgesService) {
            return EdgesService.query();
          },
          categories: function(CategoriesService) {
            return CategoriesService.query();
          },
          ranks: function(RanksService) {
            return RanksService.query();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
