import {
  getPokemons,
  getPokemonById,
  getPokemonByIdFromApi,
} from "./services/services.js";

import {
  createPokemonCard,
  createPagination,
  clearPreviousElements,
  setDetailModal,
  clearCards,
} from "./ui/ui.js";

/* const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; */

async function initialize(offset = 0) {
  let pages;
  let totalPokemons;
  let pokemonsPerPage = 20;

  clearPreviousElements();

  let pokemonsData = await getPokemons(offset);

  totalPokemons = pokemonsData.count;

  let pokemons = pokemonsData.results;

  pages = Math.ceil(totalPokemons / pokemonsPerPage);

  /* createPagination(pages, updatePokemonsCards); */
  createPagination(pages, initialize);

  console.log(pokemons);

  createCardFake(pokemons);

  /* Is this a legal use of async ? */
  /*  pokemons.forEach(async (pokemon) => {
    let pokemonById = await getPokemonByIdFromApi(pokemon.name);

    createPokemonCard(pokemonById, setDetailModal);
  }); */
}

async function updatePokemonsCards(offset, e) {
  console.log("update");
  e.preventDefault();

  let pokemonsData = await getPokemons(offset);
  let pokemons = pokemonsData.results;

  clearCards();

  /* Is this a legal use of async ? */
  pokemons.forEach(async (pokemon) => {
    /*  let pokemonById = await getPokemonById(pokemon.name); */
    let pokemonById = await getPokemonByIdFromApi(pokemon.name);
    createPokemonCard(pokemonById, setDetailModal);
  });
}

initialize();

/*CHANGE THE ID REQUEST
ONLY REQUEST POKEMON BY ID ON SEE DETAILS BUTTON CLICK
*/

function createCardFake(pokemons) {
  pokemons.forEach((pokemon) => {
    let pokemonCardsContainer = document.querySelector("#pokemon-cards");

    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");

    let newCardBody = document.createElement("div");
    newCardBody.setAttribute("class", "card-body");

    newCard.appendChild(newCardBody);

    let newCardTitle = document.createElement("h5");
    newCardTitle.setAttribute("class", "card-title");
    newCardTitle.textContent = `${pokemon.name}`;

    newCardBody.appendChild(newCardTitle);

    let newCardButton = document.createElement("button");
    newCardButton.setAttribute("data-bs-toggle", "modal");
    newCardButton.setAttribute("data-bs-target", "#exampleModal");
    newCardButton.setAttribute("class", "btn btn-primary  modal-test");
    newCardButton.textContent = "See Details";
    newCardBody.appendChild(newCardButton);

    /* newCardButton.onclick = callBackDetail; */
    newCardButton.onclick = () => {
      callBackDetail(pokemon);
    };

    pokemonCardsContainer.appendChild(newCard);
  });
}
