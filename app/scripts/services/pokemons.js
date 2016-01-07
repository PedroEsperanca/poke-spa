'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.pokemons
 * @description
 * # pokemons
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
  .service('pokemons', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  
  	this.pokemons = [];

  	this.getPokemons = function(cb){
  		if(this.pokemons.length) {
  			cb(null,this.pokemons);
  		} else {
			$http({
			  method: 'GET',
			  url: 'http://pokeapi.co/api/v1/pokedex/1/'
			}).then(function successCallback(response) {
			    console.log('got all pokemons from server');
			    response.data.pokemon.forEach(function(pokemon){
					//get id
					pokemon.id = parseInt(
						pokemon.resource_uri.substring(
							15,
							pokemon.resource_uri.length-1
						)
					);
			    	this.pokemons.push(pokemon);
			    }.bind(this));
			   	cb(null,this.pokemons)
			  }.bind(this), function errorCallback(response) {
			  	cb(response,false);
			  });
  		}
   	}

   	
   	this.getPokemon = function(id, cb){

		var index = this.pokemons.map(function(pokemon){ 
		   return pokemon.id;
		}).indexOf(id);

		console.log(id + " - " + index);
		console.log(typeof this.pokemons[index].created);
		if(typeof this.pokemons[index].created !== 'undefined'){
			cb(null,this.pokemons[index])
		} else {
			$http({
			  method: 'GET',
			  url: 'http://pokeapi.co/api/v1/pokemon/'+id,
			}).then(function successCallback(response) {
			    console.log('got pokemon'+id+' from server');

			    this.pokemons[index].types= response.data.types;
			    this.pokemons[index].weight= response.data.weight;
			    this.pokemons[index].height= response.data.height;
			    this.pokemons[index].description= 'soon';
			    this.pokemons[index].abilities= response.data.abilities;
			    this.pokemons[index].statistics= {};
			    this.pokemons[index].statistics.hp= response.data.hp;
			    this.pokemons[index].statistics.attack= response.data.attack;
			    this.pokemons[index].statistics.defense= response.data.defense;
			    this.pokemons[index].statistics.sp_atk= response.data.sp_atk;
			    this.pokemons[index].statistics.sp_def= response.data.sp_def;
			    this.pokemons[index].statistics.speed= response.data.speed;
			    this.pokemons[index].moves= response.data.moves;

			   	cb(null,this.pokemons[index])
			  }.bind(this), function errorCallback(response) {
			  	cb(response,false);
			  });

		}

   	}




  });
