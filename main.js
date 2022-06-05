import { getPokemonByIdFromApi, getPokemons } from "./services/services.js";

import {
  createPokemonCard,
  createPagination,
  clearPreviousElements,
  setDetailModal,
  clearCards,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */

async function initialize(offset = 0) {
  let pages;
  let totalPokemons;
  let pokemonsPerPage = 20;

  clearPreviousElements();

  let pokemonsData = await getPokemons(offset);

  totalPokemons = pokemonsData.count;

  let pokemons = pokemonsData.results;

  pages = Math.ceil(totalPokemons / pokemonsPerPage);

  createPagination(pages, updatePokemonsCards);

  /* Is this a legal use of async ? */
  pokemons.forEach(async (pokemon) => {
    let pokemonById = await getPokemonByIdFromApi(pokemon.name);

    createPokemonCard(pokemonById, setDetailModal);
  });
}

async function updatePokemonsCards(offset) {
  console.log("update");

  clearCards();

  let pokemonsData = await getPokemons(offset);
  let pokemons = pokemonsData.results;

  /* Is this a legal use of async ? */
  pokemons.forEach(async (pokemon) => {
    let pokemonById = await getPokemonByIdFromApi(pokemon.name);

    createPokemonCard(pokemonById, setDetailModal);
  });
}

initialize();
