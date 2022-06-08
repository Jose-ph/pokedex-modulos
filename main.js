import { getPokemons, getPokemonById } from "./services/services.js";

import {
  createPokemonsCards,
  createPagination,
  clearPreviousElements,
  setDetailModal,
  clearCards,
} from "./ui/ui.js";

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
  /*  createPagination(pages, initialize); */

  createPokemonsCards(pokemons, handlePokemonDetails);
}

async function updatePokemonsCards(offset) {
  console.log("update");

  let pokemonsData = await getPokemons(offset);
  let pokemons = pokemonsData.results;

  clearCards();
  createPokemonsCards(pokemons, handlePokemonDetails);
}

initialize();

async function handlePokemonDetails(pokemon, updateModal = setDetailModal) {
  /*   let modalBody = document.querySelector(".modal-body");

  modalBody.textContent = " CARGANDO";
  
  ESTO PONERLO COMO UNA FUNCIÓN PARA MOSTRAR UN CARTEL DE CARGANDO

  FALTA AGREGAR LOCALSTORAGE
  */

  let pokemonData = await getPokemonById(pokemon.name);

  updateModal(pokemonData);
}
