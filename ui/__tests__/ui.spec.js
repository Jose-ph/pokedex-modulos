/// <reference types="Jest" />

/* this import from util makes jest/node recognize document as in the browser */
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const jsdom = require("jsdom");

const { JSDOM } = jsdom;
import {
  createPokemonsCards,
  clearPreviousElements,
  setDetailModal,
  clearCards,
  showLoader,
} from "../ui.js";

import { pokemonData } from "../pokemonData.js";

describe("ui", () => {
  let pokemons = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
    { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
    { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
    { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
    { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  ];
  it("should create 20 cards", () => {
    document.body.innerHTML =
      ' <div class="row d-flex justify-content-center " id="pokemon-cards">';
    createPokemonsCards(pokemons, () => {});
    /* let cards = dom.window.document.querySelectorAll(".card"); */

    let cards = document.querySelectorAll(".card");

    expect(cards.length).toBe(20);
  });

  it("should clear elements", () => {
    document.body.innerHTML = ` <div class="container">
    <nav id="pagination"  aria-label="Page navigation example">
        <ul class="pagination  d-flex flex-wrap">
        
        </ul>
      </nav>


</div>

<main class="container" id="main">

    <div class="row d-flex justify-content-center " id="pokemon-cards">
      
    </div>

    <!-- Inicio del Modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <img class="pokemon-front"  src="" alt="">
     <img  class="pokemon-back"  src="" alt="">
      ...
    </div>
    <div class="modal-footer">
     <!--  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button> -->
    </div>
  </div>
</div>
</div>


    <!-- Fin del Modal -->



</main>



`;

    clearPreviousElements();

    let pagination = document.querySelector(".pagination");
    let pokemonCards = document.querySelector("#pokemon-cards");

    expect(pagination).toHaveProperty("innerHTML", "");
    expect(pokemonCards).toHaveProperty("innerHTML", "");
  });

  it("Should set detail modal", () => {
    document.body.innerHTML = ` <div class="container">
    <nav id="pagination"  aria-label="Page navigation example">
        <ul class="pagination  d-flex flex-wrap">
        
        </ul>
      </nav>


</div>

<main class="container" id="main">

    <div class="row d-flex justify-content-center " id="pokemon-cards">
      
    </div>

    <!-- Inicio del Modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <img class="pokemon-front"  src="" alt="">
     <img  class="pokemon-back"  src="" alt="">
      ...
    </div>
    <div class="modal-footer">
     <!--  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button> -->
    </div>
  </div>
</div>
</div>


    <!-- Fin del Modal -->



</main>



`;

    setDetailModal(pokemonData);

    let modal = document.querySelector("#exampleModal");
    let modalTitle = document.querySelector(".modal-title");

    expect(modalTitle).toHaveProperty("textContent", "bulbasaur");
  });

  it("should clear cards", () => {
    document.body.innerHTML =
      document.body.innerHTML = ` <div class="container">
    <nav id="pagination"  aria-label="Page navigation example">
        <ul class="pagination  d-flex flex-wrap">
        
        </ul>
      </nav>


</div>

<main class="container" id="main">

    <div class="row d-flex justify-content-center " id="pokemon-cards">
      
    </div>

    <!-- Inicio del Modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <img class="pokemon-front"  src="" alt="">
     <img  class="pokemon-back"  src="" alt="">
      ...
    </div>
    <div class="modal-footer">
     <!--  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button> -->
    </div>
  </div>
</div>
</div>


    <!-- Fin del Modal -->



</main>



`;

    createPokemonsCards(pokemons);
    clearCards();

    let cards = document.querySelectorAll(".card");

    expect(cards).toHaveLength(0);
  });

  it("should show loader", () => {
    document.body.innerHTML = ` <!-- Modal -->
    <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           <img class="pokemon-front"  src="" alt="">
           <img  class="pokemon-back"  src="" alt="">
            ...
          </div>
          <div class="modal-footer">
           <!--  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
    
  
          <!-- Fin del Modal -->`;
    let modalBody = document.querySelector(".modal-body");

    showLoader();

    expect(modalBody).toHaveProperty(
      "innerHTML",
      ` <div class="lds-ripple"><div></div><div></div></div>
      <p>CARGANDO</p>`
    );
  });
});
