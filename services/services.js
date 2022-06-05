//const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";

async function getPokemonsFromApi(offset = 0) {
  let pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  );

  return pokemons.json();
}

export async function getPokemonByIdFromApi(id) {
  let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return pokemon.json();
}

export async function getPokemons(offset) {
  try {
    return getPokemonsFromLocalStorage(offset);
  } catch (e) {
    let pokemonsFromApi = await getPokemonsFromApi(offset);
    savePokemonsToLocalStorage(pokemonsFromApi, offset);

    return pokemonsFromApi;
  }
}

function savePokemonsToLocalStorage(pokemons, offset) {
  let key = offset;
  let pokemonsSaved = pokemons;

  localStorage.setItem(key, JSON.stringify(pokemonsSaved));
}

function getPokemonsFromLocalStorage(offset) {
  let key = offset;

  let pokemons = JSON.parse(localStorage.getItem(key));

  if (pokemons === null) {
    throw new Error("No pokemons found");
  }

  return pokemons;
}

export async function getPokemonById(id) {
  try {
    return getPokemonsFromLocalStorageById(id);
  } catch (e) {
    let pokemonByIdFromApi = await getPokemonByIdFromApi(id);
    savePokemonsToLocalStorage(pokemonByIdFromApi, id);

    return pokemonByIdFromApi;
  }
}

function getPokemonsFromLocalStorageById(id) {
  let key = id;

  let pokemon = JSON.parse(localStorage.getItem(key));

  if (pokemon === null) {
    throw new Error("No pokemon found");
  }

  return pokemon;
}
