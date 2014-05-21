(function() {
   'use strict';

   var app = angular.module('mainApp');

   app.service('CategoriesService', function() {
      this.query = function() {
         return categories;
      };
   });

   var categories = [
      {
         name: 'All Categories'
      },
      {
         name: 'Background'
      },
      {
         name: 'Combat'
      },
      {
         name: 'Leadership'
      }
    ];
})();
