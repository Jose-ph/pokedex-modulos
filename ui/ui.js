export function createPokemonCard(pokemon) {
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

  let newCardAnchor = document.createElement("a");
  newCardAnchor.setAttribute("href", "#");
  newCardAnchor.setAttribute("class", "btn btn-primary");
  newCardAnchor.textContent = "Do something";
  newCardBody.appendChild(newCardAnchor);

  pokemonCardsContainer.appendChild(newCard);
}

export function createPagination(numberOfPages, callBackUpdate) {
  console.log(numberOfPages);
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
