import { getAllPokemonsFromApi, getPokemonById } from "./services/services.js";

import { createPokemonsCards } from "./ui/ui.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

getAllPokemonsFromApi(BASE_URL).then((response) => {
  console.log(response.results);

  let pokemons = response.results;

  pokemons.forEach((pokemon) => {
    getPokemonById(pokemon.name).then((response) => {
      createPokemonsCards(response);
    });
  });
});
