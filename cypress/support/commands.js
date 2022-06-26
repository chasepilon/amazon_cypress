import * as data from '../fixtures/shoe_data.json';

Cypress.Commands.add('searchShoes', () => {
    cy.get('input#twotabsearchtextbox').click().type(data.search_query + '{enter}');
});

