(function() {
  'use strict';

  var app = angular.module('mainApp');

  app.filter('edges', function() {
    return function(edges, filterBy) {

      function getRank(reqs) {
        var req = {},
          i = 0,
          size = reqs.length;

        for (i = 0; i < size; i++) {
          if (reqs[i].type === 'rank') {
            req = reqs[i];
            break;
          }
        }

        return req.value;
      }

      return edges.filter(function(element) {
        var category = (element.category.name === filterBy.category.name || filterBy.category.name === 'All Categories');
        var rank = (getRank(element.requirements) === filterBy.rank.name || filterBy.rank.name === 'All Ranks');

        return category && rank;
      });
    };
  });
})();
