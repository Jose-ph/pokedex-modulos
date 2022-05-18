import { getPokemonsFromApi, getPokemonById } from "./services/services.js";

import {
  createPokemonCard,
  createPagination,
  clearPreviousElements,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */

function initialize(offset) {
  let pages;
  let totalPokemons;
  let initialOffset = 20; //change to pokemonsPerPage
  clearPreviousElements();
  getPokemonsFromApi(offset).then((response) => {
    console.log(response.results);
    totalPokemons = response.count;

    let pokemons = response.results;
    pages = Math.ceil(totalPokemons / initialOffset);
    createPagination(pages, initialize);

    pokemons.forEach((pokemon) => {
      getPokemonById(pokemon.name).then((response) => {
        console.log(response);
        createPokemonCard(response);
      });
    });
  });
}

initialize();
