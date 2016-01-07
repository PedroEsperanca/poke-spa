'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.pokemons = [];
    $scope.quantity = 12;
    $scope.getMore = function(){
    	$scope.quantity = $scope.quantity +12;
    }

	$http({
	  method: 'GET',
	  url: 'http://pokeapi.co/api/v1/pokedex/1/'
	}).then(function successCallback(response) {
	    console.log(response);
	    response.data.pokemon.forEach(function(pokemon){
	    	$scope.pokemons.push(pokemon)
	    });
	    console.log($scope.pokemons)
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });


  });
