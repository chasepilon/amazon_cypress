import * as data from '../fixtures/shoe_data.json';

describe('Amazon Filters', () => {
  before(() => {
    cy.visit('/' + data.knownShoeURL);
  });

  it('Verifies filter application', () => {
    // Our Brands
    cy.get('div#brandsRefinements > ul:nth-of-type(1) > li:nth-of-type(1) .a-icon.a-icon-checkbox', { timeout: 3000 }).click();

    //Between $10 - $20
    cy.get('input#low-price').click().type('10');
    cy.get('input#high-price').click().type('20');
    cy.get('.a-button-input', {timeout: 3000}).click();

    cy.get('.a-size-base-plus.a-color-base.a-text-normal').first().contains('Women\'s Shelly Sneaker');
    cy.get('.a-price').contains('19.60');
  })
})