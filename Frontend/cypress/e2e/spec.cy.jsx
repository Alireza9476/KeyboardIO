describe("Keyboard IO", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/");
  // })

  it("Entered Home Page", () => {
    cy.visit("http://localhost:3000");
  });

  it("Entered Standard Page", () => {
    cy.visit("http://localhost:3000/standard");
    cy.contains("flour");
  });
});
