'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:PokemonCtrl
 * @description
 * # PokemonCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('PokemonCtrl', function ($scope, $routeParams, pokemons) {
  	// console.log($routeParams.pokemonId);
  	// console.log($routeParams.pokemonName);

  	pokemons.getPokemons(function(){

	  	var prevId = parsePokemonIn(parseInt($routeParams.pokemonId)-1);
	  	if(prevId>0){
			pokemons.getPokemon(prevId, function(err, pokemon){
		    	$scope.previousPokemon = pokemon;
		    });
	  	}

		var currentId = parsePokemonIn(parseInt($routeParams.pokemonId));
		pokemons.getPokemon(currentId, function(err, pokemon){
	    	$scope.currentPokemon = pokemon;
	    });

		var nextId = parsePokemonIn(parseInt($routeParams.pokemonId)+1);
		pokemons.getPokemon(nextId, function(err, pokemon){
	    	$scope.nextPokemon = pokemon;
	    });

  	});

	//utils
	function parsePokemonIn (id){	
	  	var string = "000"+(parseInt(id));
	  	var parsedId = string.slice(
			JSON.stringify(parseInt(id)).length, 
			string.length
		);
		return parsedId;
	}

  });
