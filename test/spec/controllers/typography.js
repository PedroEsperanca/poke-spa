'use strict';

describe('Controller: TypographyCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var TypographyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypographyCtrl = $controller('TypographyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TypographyCtrl.awesomeThings.length).toBe(3);
  });
});
