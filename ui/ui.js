export function createPagination(numberOfPages, callBackUpdate) {
  let paginationContainer = document.querySelector(".pagination");
  let offset = 0;

  for (let i = 0; i < numberOfPages; i++) {
    let newPage = document.createElement("li");

    newPage.setAttribute("data-offset", `${offset}`);
    newPage.setAttribute("class", "page-item");

    let newPageLink = document.createElement("a");
    newPageLink.setAttribute("class", "page-link");
    newPageLink.setAttribute("href", "#");
    newPageLink.textContent = `${i}`;

    newPage.appendChild(newPageLink);
    paginationContainer.appendChild(newPage);

    offset = offset + 20;

    newPage.onclick = function (e) {
      let offset = this.dataset.offset;

      callBackUpdate(offset, e);
    };
  }
}

export function clearPreviousElements() {
  let pagination = document.querySelector(".pagination");

  let pokemonCards = document.querySelector("#pokemon-cards");

  pagination.innerHTML = "";
  pokemonCards.innerHTML = "";
}

export function setDetailModal(pokemonData) {
  let modal = document.querySelector("#exampleModal");

  let modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = `${pokemonData.name}`;

  let modalBody = document.querySelector(".modal-body");
  modalBody.textContent = "";

  modalBody.innerHTML = `
  
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${pokemonData.sprites["front_default"]}" class="d-block w-100" alt="${pokemonData.name}">
    </div>
    <div class="carousel-item">
      <img src="${pokemonData.sprites["back_default"]}" class="d-block w-100" alt="...">
    </div>
   
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  
  `;

  pokemonData.abilities.forEach((ability) => {
    let newAbility = document.createElement("p");
    newAbility.textContent = `Ability: ${ability.ability.name}`;
    modalBody.appendChild(newAbility);
  });

  let pokemonExperience = document.createElement("p");

  pokemonExperience.textContent = `Experiencie: ${pokemonData["base_experience"]}`;
  modalBody.appendChild(pokemonExperience);

  pokemonData.stats.forEach((stat) => {
    let pokemonStats = document.createElement("p");

    pokemonStats.textContent = `${stat["stat"].name}: ${stat["base_stat"]}`;
    modalBody.appendChild(pokemonStats);
  });
}

export function clearCards() {
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.remove();
  });
}

export function createPokemonsCards(pokemons, callBackDetail) {
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

    newCardButton.onclick = () => {
      callBackDetail(pokemon);
    };

    pokemonCardsContainer.appendChild(newCard);
  });
}

export function showLoader() {
  let modalBody = document.querySelector(".modal-body");

  modalBody.innerHTML = ` <div class="lds-ripple"><div></div><div></div></div>
  <p>CARGANDO</p>
  
  `;
}
