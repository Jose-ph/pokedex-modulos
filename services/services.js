//const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";

/* export function getPokemonsFromApi(offset = 0) {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  ).then((response) => response.json());
}

export function getPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) =>
    response.json()
  );
}
 */
/*CAMBIO A ASYNC AWAIT  */

export async function getPokemonsFromApi(offset = 0) {
  let pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  );

  return pokemons.json();
}

export async function getPokemonById(id) {
  let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return pokemon.json();
}
