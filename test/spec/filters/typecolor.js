'use strict';

describe('Filter: typecolor', function () {

  // load the filter's module
  beforeEach(module('pokedexApp'));

  // initialize a new instance of the filter before each test
  var typecolor;
  beforeEach(inject(function ($filter) {
    typecolor = $filter('typecolor');
  }));

  it('should return the input prefixed with "typecolor filter:"', function () {
    var text = 'angularjs';
    expect(typecolor(text)).toBe('typecolor filter: ' + text);
  });

});
