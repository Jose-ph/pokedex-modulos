import { getAllPokemonsFromApi } from "./services/services.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";

getAllPokemonsFromApi(BASE_URL).then((response) =>
  console.log(response.results)
);
