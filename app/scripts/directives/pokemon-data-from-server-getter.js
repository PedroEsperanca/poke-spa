'use strict';

/**
 * @ngdoc directive
 * @name pokedexApp.directive:pokemonDataFromServerGetter
 * @description
 * # pokemonDataFromServerGetter
 */
angular.module('pokedexApp')
  .directive('pokemonDataFromServerGetter', function (pokemons) {
    return {
      link: function postLink($scope) {
        pokemons.getPokemon($scope.pokemon.id, function(err, pokemon){
        	$scope.pokemon = pokemon;
        });
      }
    };
  });
