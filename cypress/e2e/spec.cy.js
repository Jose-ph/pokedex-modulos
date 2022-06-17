const URL = "http://127.0.0.1:8080/";
const hashURL = "http://127.0.0.1:8080/#";
const numberOfPages = 57;
const cardsPerPage = 20;

context("Pokedex", () => {
  before(() => {
    cy.visit(URL);
  });

  it("checks number of pages in pagination", () => {
    cy.get("#pagination")
      .find(".page-link")
      .should("have.length", numberOfPages);
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

          //I expect to get the newCards
          cy.get(".card");
        });
      });
  });
});
