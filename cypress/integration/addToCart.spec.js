/// <reference types="cypress" />

context('AddToCart', () => {
  it('can navigate around the website', () => {
    cy.visit('http://localhost:3000/forall');

    cy.get('[data-cy="add-toCart"]').click({ multiple: true });
    cy.getCookies().should('be.empty');
  });
});
