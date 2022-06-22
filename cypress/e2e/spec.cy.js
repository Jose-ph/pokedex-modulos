/// <reference types="Cypress" />

const URL = "http://127.0.0.1:8080/";
const hashURL = "http://127.0.0.1:8080/#";
const numberOfPages = 57;
const cardsPerPage = 20;

before(() => {
  cy.visit(URL);
});

it("Mocks the API response", () => {
  cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20", {
    fixture: "firstPage.json",
  });
  cy.visit(URL);
});

it("checks number of pages in pagination", () => {
  cy.get("#pagination").find(".page-link").should("have.length", numberOfPages);
});

it("checks number of pokemon cards", () => {
  cy.get("#pokemon-cards").find(".card").should("have.length", cardsPerPage);
});

it("changes page", () => {
  cy.get("#pagination")
    .find(".page-link")
    .then((pages) => {
      let $pages = [];

      pages.each(function (i, page) {
        $pages.push(page);
      });
      console.log($pages);
      let defaultCards = [];
      cy.get(".card").then((cards) => {
        cards.each(function (i, card) {
          defaultCards.push(card);
        });
        console.log(defaultCards);

        $pages[1].click();

        // I expect to get the newCards
        cy.wait(3000);
        let newCards = [];
        cy.get(".card").then((cards) => {
          cards.each(function (i, card) {
            newCards.push(card);
          });
          console.log("Nuevas", newCards);

          cy.wrap(defaultCards).should("not.deep.equal", newCards);
        });
      });
    });
});

/* it("loads cards from fixture", () => {
  cy.intercept("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126", {
    fixture: "firstPage.json",
  });
}); */
