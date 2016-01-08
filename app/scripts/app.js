'use strict';

/**
 * @ngdoc overview
 * @name pokedexApp
 * @description
 * # pokedexApp
 *
 * Main module of the application.
 */
angular
  .module('pokedexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pokemon/:pokemonId/:pokemonName', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonCtrl',
        controllerAs: 'pokemon'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl',
        controllerAs: 'typography'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
