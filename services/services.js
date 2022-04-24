/*My idea is to take all pokemons from the api and then work with them locally */

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";

export function getAllPokemonsFromApi(url) {
  return fetch(url).then((response) => response.json());
  /* .then((response) => response.results); */
}
