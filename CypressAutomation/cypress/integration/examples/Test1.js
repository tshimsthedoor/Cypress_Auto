/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(false).to.equal(false);
  });
});

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("Testing web", () => {
  it("My first site", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    // Parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);

    //fixture
  });
});
