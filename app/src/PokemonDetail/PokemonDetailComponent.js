'use strict';

pokemonApp.component('pokemonDetail', {

    controller: function PokemonDetailCtrl($routeParams, PokemonsService) {

    this.pokemon = PokemonsService.get({
        pokemonId: $routeParams['pokemonId']
    }, function(successResult) {
        // Окей!
        this.notfoundError = false;

        this.activeTab = 1;
        this.disableControlTab = true;
    }, function(errorResult) {
        // Не окей..
        this.notfoundError = true;


    });

    this.deletePokemon = function(pokemonId) {

        this.pokemon.$delete({
            pokemonId: pokemonId
        }, function(successResult) {
            // Окей!
            this.deletionSuccess = true;
        }, function(errorResult) {
            // Не окей..
            this.deletionError = true;
        });

    }

    },

    templateUrl: './src/PokemonDetail/PokemonDetail.html'

});
