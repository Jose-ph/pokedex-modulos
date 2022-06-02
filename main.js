import { getPokemonByIdFromApi, getPokemons } from "./services/services.js";

import {
  createPokemonCard,
  createPagination,
  clearPreviousElements,
  setDetailModal,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */

async function initialize(offset = 0) {
  let pages;
  let totalPokemons;
  let initialOffset = 20; //change to pokemonsPerPage

  clearPreviousElements();

  let pokemonsData = await getPokemons(offset);

  totalPokemons = pokemonsData.count;

  let pokemons = pokemonsData.results;

  console.log(pokemonsData);
  pages = Math.ceil(totalPokemons / initialOffset);
  createPagination(pages, initialize);

  for (let i = 0; i < pokemons.length; i++) {
    let pokemonById = await getPokemonByIdFromApi(pokemons[i].name);
    createPokemonCard(pokemonById, setDetailModal);
  }
}

initialize();
