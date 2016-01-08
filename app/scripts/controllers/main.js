'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('MainCtrl', function ($scope, $http, pokemons) {

  	$scope.pokemons = [];
    pokemons.getPokemons(function(err, pokemons){
    	$scope.pokemons = pokemons;
    });
    $scope.quantity = 12;
    $scope.blockInfiniteScroll = true;
    $scope.getMore = function(){
    	$scope.quantity = $scope.quantity +12;
    	$scope.blockInfiniteScroll = false;
    };

  });
