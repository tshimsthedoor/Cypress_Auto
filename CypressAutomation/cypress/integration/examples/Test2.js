
/// <reference types="Cypress" />

describe("My Second Test Suite", () => {
  it("My first Test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    
    // Parent child chaining
    cy.get(".products").as("productLocator");
    
   

     cy.get("@productLocator")
       .find(".product")
       .eq(3)
       .contains("ADD TO CART")
       .click()
       .then(() => {
         console.log("sf");
       });
       cy.get(".cart-icon > img").click();
       cy.contains("PROCEED TO CHECKOUT").click();
       cy.contains("Place Order").click();

   

    //fixture
  });
});
