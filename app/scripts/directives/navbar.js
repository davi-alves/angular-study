(function() {
  'use strict';

  var app = angular.module('mainApp');

  app.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/_partials/navbar.html',
      controller: function($location) {
        this.isActive = function(path) {
          return path === $location.path();
        };
      },
      controllerAs: 'navCtrl'
    };
  });
})();
