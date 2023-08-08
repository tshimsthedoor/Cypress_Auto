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
  });
});
