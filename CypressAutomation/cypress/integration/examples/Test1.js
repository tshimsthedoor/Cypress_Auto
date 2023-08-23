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
    cy.get(".products").as('productLocator');
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productLocator")
      .find(".product")
      .eq(3)
      .contains("ADD TO CART")
      .click()
      .then(() => {
        console.log("sf");
      });

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("cashews")) {
          cy.wrap($el).find("button").click();
          //$el.find("button").click();
        }
      });

      // Assert if logo text is present
      cy.get(".brand").should("have.text", "GREENKART");
      cy.get('.brand').then((logoElement) => {
        cy.log(logoElement.text());
      });

    //fixture
  });
});
