/// <reference types="cypress" />

context('AddToCart', () => {
  it('can navigate around the website', () => {
    cy.visit('http://localhost:3000/cart');
    cy.get('[data-cy="total"]:contains("€100")');
  });
});
