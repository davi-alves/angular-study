'use strict';

describe('Directive: Navbar', function() {

  var element,
    $scope;

  beforeEach(module('mainApp'));
  beforeEach(inject(function($compile, $rootScope, $injector) {
    // get httpBackend object
    var $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('views/_partials/navbar.html').respond(200, 'it works');

    // get the scope and element
    $scope = $rootScope;
    element = angular.element('<navbar></navbar>');

    $compile(element)($rootScope);
    $scope.$digest();
  }));

  describe('isActive', function() {
    it('should return true when paths are the same', function() {
      expect($scope.isActive('/test')).toBeTruthy();
    });
  });
});
