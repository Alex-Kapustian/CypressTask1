/// <reference types="cypress" />

describe('Conduit Login', () => {
  it('Login', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=okhcry');
    cy.get(':nth-child(1) > .form-control')
      .type('jydefufes@mailinator.com');
    cy.get(':nth-child(2) > .form-control')
      .type('123456qQ');
    cy.get('.btn')
      .click();
    cy.get('.navbar').contains('Consequatur').should('exist');
  })
})