(function() {
   'use strict';

   var app = angular.module('mainApp');

   app.service('RanksService', function() {
      this.query = function() {
         return ranks;
      };
   });

   var ranks = [
      {
         name: 'All Ranks'
      },
      {
         name: 'Novice'
      },
      {
         name: 'Seasoned'
      }
    ];
})();
