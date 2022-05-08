import { getPokemonsFromApi, getPokemonById } from "./services/services.js";

import {
  createPokemonsCards,
  createPagination,
  clearPreviousElements,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */
let pages;
let totalPokemons;
let initialOffset = 20;

function initialize(offset) {
  clearPreviousElements();
  getPokemonsFromApi(offset).then((response) => {
    console.log(response.results);
    totalPokemons = response.count;

    let pokemons = response.results;
    pages = Math.ceil(totalPokemons / initialOffset);
    createPagination(pages, initialize);

    pokemons.forEach((pokemon) => {
      getPokemonById(pokemon.name).then((response) => {
        createPokemonsCards(response);
      });
    });
  });
}

initialize();
