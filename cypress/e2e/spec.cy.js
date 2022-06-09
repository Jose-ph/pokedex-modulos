/* describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
}); */

const URL = "http://127.0.0.1:8080/";
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
});
