'use strict';

/**
 * @ngdoc filter
 * @name pokedexApp.filter:typecolor
 * @function
 * @description
 * # typecolor
 * Filter in the pokedexApp.
 */
angular.module('pokedexApp')
  .filter('typecolor', function () {
    return function (input) {
      return 'typecolor filter: ' + input;
    };
  });
