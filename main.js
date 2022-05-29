import { getPokemonsFromApi, getPokemonById } from "./services/services.js";

import {
  createPokemonCard,
  createPagination,
  clearPreviousElements,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */
/* 
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
} */

/* Agrega ASYNC/AWAIT */

async function initialize(offset) {
  let pages;
  let totalPokemons;
  let initialOffset = 20; //change to pokemonsPerPage

  clearPreviousElements();
  let pokemonsData = await getPokemonsFromApi(offset);
  console.log(pokemonsData.results);
  totalPokemons = pokemonsData.count;

  let pokemons = pokemonsData.results;
  pages = Math.ceil(totalPokemons / initialOffset);
  createPagination(pages, initialize);

  for (let i = 0; i < pokemons.length; i++) {
    let pokemonById = await getPokemonById(pokemons[i].name);
    createPokemonCard(pokemonById);
  }
}

initialize();
