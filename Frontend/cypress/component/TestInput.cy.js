import Standard from "../../src/pages/Standard";

describe("TestInput.cy.js", () => {
  beforeEach(() => {
    cy.mount(<Standard />);
  });

  it("Refresh does exist", () => {
    cy.get('[data-cy="refresh"]').contains("Refresh");
  });

  it("Input is working", () => {
    cy.get('input[type="text"]').should("have.value", ""); //should(not.exist)
  });

  const typedValue = "typed something";
  it("Set value for input", () => {
    cy.get('input[type="text"]').type(typedValue);
    cy.get('input[type="text"]').should("have.value", typedValue); //value of input will be replaced in another test
  });
});
