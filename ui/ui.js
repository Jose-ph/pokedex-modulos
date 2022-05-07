export function createPokemonsCards(pokemon) {
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
