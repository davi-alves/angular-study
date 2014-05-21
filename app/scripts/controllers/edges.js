(function() {
  'use strict';

  var app = angular.module('mainApp');

  app.controller('EdgesCtrl', function(edges, categories, ranks) {
    var selectedEdge = null;
    this.edges = edges;
    this.categories = categories;
    this.ranks = ranks;
    this.filterBy = {
      search: '',
      category: categories[0],
      rank: ranks[0]
    };

    this.displayRequirements = function(reqs) {
      var result = [],
        i = 0,
        size = 0;

      size = reqs.length;
      for (i = 0; i < size; i++) {
        if (reqs[i].name) {
          if (reqs[i].value) {
            result.push(reqs[i].name + ' ' + reqs[i].value);
          } else {
            result.push(reqs[i].name);
          }
        } else if (reqs[i].value) {
          result.push(reqs[i].value);
        }
      }

      return result.join(', ');
    };

    this.selectEdge = function(edge) {
      selectedEdge = (this.isSelected(edge)) ?
        selectedEdge = null :
        selectedEdge = edge;
    };

    this.isSelected = function(edge) {
      return edge === selectedEdge;
    };

    this.resetFilter = function() {
      this.filterBy = {
        search: '',
        category: this.categories[0],
        rank: this.ranks[0]
      };
    };
  });
})();
