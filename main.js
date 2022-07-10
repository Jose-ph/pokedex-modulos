import { getPokemons, getPokemonById } from "./services/services.js";

import {
  createPokemonsCards,
  clearPreviousElements,
  setDetailModal,
  clearCards,
  showLoader,
} from "./ui/ui.js";

import {
  createPagination,
  handlePagination,
  handleSelectedPage,
} from "./pagination/pagination.js";

async function initialize(offset = 0) {
  let pages;
  let totalPokemons;
  let pokemonsPerPage = 20;

  clearPreviousElements();

  let pokemonsData = await getPokemons(offset);

  totalPokemons = pokemonsData.count;

  let pokemons = pokemonsData.results;

  pages = Math.ceil(totalPokemons / pokemonsPerPage);

  createPagination(
    pages,
    updatePokemonsCards,
    handlePagination,
    handleSelectedPage
  );

  createPokemonsCards(pokemons, handlePokemonDetails);
}

async function updatePokemonsCards(offset) {
  let pokemonsData = await getPokemons(offset);
  let pokemons = pokemonsData.results;

  clearCards();
  createPokemonsCards(pokemons, handlePokemonDetails);
}

async function handlePokemonDetails(
  pokemon,
  updateModal = setDetailModal,
  loader = showLoader
) {
  loader();

  let pokemonData = await getPokemonById(pokemon.name);

  updateModal(pokemonData);
}

initialize();
