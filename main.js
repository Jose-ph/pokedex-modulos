import { getPokemonsFromApi, getPokemonById } from "./services/services.js";

import {
  createPokemonsCards,
  createPagination,
  handlePagination,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */
let pages;
let totalPokemons;
let initialOffset = 20;

function initialize(offset) {
  deletePreviousElements();
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

function deletePreviousElements() {
  let pagination = document.querySelector(".pagination");

  let pokemonCards = document.querySelector("#pokemon-cards");
  // DID NOT REMOVE ELEMENTS BECAUSE THEN I CAN'T CREATE NEW ONES
  pagination.innerHTML = "";
  pokemonCards.innerHTML = "";
}
