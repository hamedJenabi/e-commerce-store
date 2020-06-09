// /// <reference types="cypress" />

// context('AddToCart', () => {
//   it('clicks on Add to Cart', () => {
//     cy.visit('http://localhost:3000/forall');
//     cy.get('[data-cy="add-toCart"]').click({ multiple: true });
//     cy.getCookies().should('not.empty');
//     cy.getCookies()
//       .should('have.length', 1)
//       .should((cookies) => {
//         expect(cookies[0]).to.have.property('name', 'cartList');
//       });
//   });
// });
// context('AddToCart', () => {
//   it('clicks on Add to Cart', () => {
//     cy.visit('http://localhost:3000/forwomen');
//     cy.get('[data-cy="add-toCart"]').click({ multiple: true });
//     cy.getCookies().should('not.empty');
//     cy.getCookies()
//       .should('have.length', 1)
//       .should((cookies) => {
//         expect(cookies[0]).to.have.property('name', 'cartList');
//       });
//   });
// });
context('AddToCart', () => {
  it('clicks on Add to Cart', () => {
    cy.visit('http://localhost:3000/formen');
    cy.get('[data-cy="add-toCart"]').click({ multiple: true });
    cy.getCookies().should('not.empty');
    cy.getCookies()
      .should('have.length', 1)
      .should((cookies) => {
        expect(cookies[0]).to.have.property('name', 'cartList');
      });
    cy.visit('http://localhost:3000/cart');
    cy.get('[data-cy="total"]:contains("€100")');
    cy.get('[data-cy="remove"]').click({ multiple: true });
    cy.reload();

    cy.get('[data-cy="total"]:contains("€0")');
  });
});
