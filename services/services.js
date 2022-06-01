//const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";
/* Change this module it should have two export functions one to load all pokemons and one to
load the pokemon by id. Then inside this module create  functions to load from local storage or api */

function getPokemons(offset) {
  try {
    return getPokemonsFromLocalStorage(offset);
  } catch (error) {
    getPokemonsFromApi(offset);
    savePokemonsToLocalStorage(pokemons, offset);

    return pokemons;
  }
}

export function savePokemonsToLocalStorage(pokemons, offset) {
  let key = offset;
  let pokemonsSaved = pokemons;
  JSON.stringify;

  console.log("esta es la key", key);
  console.log("estos son los pokemons", pokemonsSaved);
  localStorage.setItem(key, JSON.stringify(pokemonsSaved));
}

export function getPokemonsFromLocalStorage(offset) {
  let key = offset;

  let pokemons = localStorage.getItem(key);

  return JSON.parse(pokemons);
}

export function getPokemonsFromApi(offset = 0) {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  ).then((response) => response.json());
}

export function getPokemonByIdFromApi(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) =>
    response.json()
  );
}

/*CAMBIO A ASYNC AWAIT  */

/* export async function getPokemonsFromApi(offset = 0) {
  let pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  );

  return pokemons.json();
}

export async function getPokemonById(id) {
  let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return pokemon.json();
}
 */
