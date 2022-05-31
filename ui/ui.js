export function createPokemonCard(pokemon, callBackDetail) {
  let pokemonCardsContainer = document.querySelector("#pokemon-cards");

  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");

  let pokemonImage = document.createElement("img");
  pokemonImage.setAttribute("class", "card-img-top");
  pokemonImage.setAttribute("alt", `${pokemon.name}`);
  pokemonImage.setAttribute("src", `${pokemon.sprites["front_default"]}`);
  newCard.appendChild(pokemonImage);

  let newCardBody = document.createElement("div");
  newCardBody.setAttribute("class", "card-body");

  newCard.appendChild(newCardBody);

  let newCardTitle = document.createElement("h5");
  newCardTitle.setAttribute("class", "card-title");
  newCardTitle.textContent = `${pokemon.name}`;

  newCardBody.appendChild(newCardTitle);

  let newCardParagraph = document.createElement("p");
  newCardParagraph.setAttribute("class", "card-text");

  newCardParagraph.textContent = `#${pokemon.id}
    height: ${pokemon.height}
    weight: ${pokemon.weight}

    `;

  newCardBody.appendChild(newCardParagraph);

  /* let newCardAnchor = document.createElement("a");
  newCardAnchor.setAttribute("href", "#");
  newCardAnchor.setAttribute("class", "btn btn-primary modal-test");
  newCardAnchor.textContent = "Do something";
  newCardBody.appendChild(newCardAnchor); */

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
}

export function createPagination(numberOfPages, callBackUpdate) {
  let paginationContainer = document.querySelector(".pagination");
  let offset = 0;

  /* let previousPage = document.createElement("li");
  previousPage.innerHTML = `
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  
  `; */

  /*  paginationContainer.appendChild(previousPage);
   */
  for (let i = 0; i < numberOfPages; i++) {
    let newPage = document.createElement("li");
    /*  newPage.innerHTML = `
    <li data-offset="${offset}" id = "${offset}" class="page-item"><a class="page-link" href="#">${i}</a></li>
    `; */
    newPage.setAttribute("data-offset", `${offset}`);
    newPage.setAttribute("class", "page-item");

    let newPageLink = document.createElement("a");
    newPageLink.setAttribute("class", "page-link");
    newPageLink.setAttribute("href", "#");
    newPageLink.textContent = `${i}`;

    newPage.appendChild(newPageLink);
    paginationContainer.appendChild(newPage);

    offset = offset + 20;

    newPage.onclick = function () {
      let offset = this.dataset.offset;

      callBackUpdate(offset);
    };
  }
}

export function clearPreviousElements() {
  let pagination = document.querySelector(".pagination");

  let pokemonCards = document.querySelector("#pokemon-cards");
  // DID NOT REMOVE ELEMENTS BECAUSE THEN I CAN'T CREATE NEW ONES
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

  /*  let pokemonFront = document.createElement("img");

  pokemonFront.setAttribute("src", `${pokemonData.sprites["front_default"]}`);
  pokemonFront.style.width = "280px";
  pokemonFront.style.height = "280px";

  modalBody.appendChild(pokemonFront); */
  /* 
  let pokemonBack = document.createElement("img");

  pokemonBack.setAttribute("src", `${pokemonData.sprites["back_default"]}`);
  pokemonBack.style.width = "280px";
  pokemonBack.style.height = "280px"; */

  /* modalBody.appendChild(pokemonBack); */
}
