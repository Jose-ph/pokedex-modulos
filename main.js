import { getPokemonByIdFromApi, getPokemons } from "./services/services.js";

import {
  createPokemonCard,
  createPagination,
  clearPreviousElements,
  setDetailModal,
  createPokemonsCards,
  clearBoard,
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
  /* createPagination(pages, initialize); */
  createPagination(pages, update);

  /* Is this a legal use of async ? */
  pokemons.forEach(async (pokemon) => {
    let pokemonById = await getPokemonByIdFromApi(pokemon.name);
    console.log(pokemonById);
    createPokemonCard(pokemonById, setDetailModal);
  });
}

async function update(offset) {
  clearBoard();

  let pokemonsData = await getPokemons(offset);

  let pokemons = pokemonsData.results;

  /* Is this a legal use of async ? */
  pokemons.forEach(async (pokemon) => {
    let pokemonById = await getPokemonByIdFromApi(pokemon.name);

    createPokemonCard(pokemonById, setDetailModal);
  });
}

initialize();
