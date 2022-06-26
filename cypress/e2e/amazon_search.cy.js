import * as data from '../fixtures/shoe_data.json';

describe('Amazon Search', () => {
  before(() => {
    cy.visit('/');

    cy.searchShoes();
  });

  it('Verifies search results for shoes', () => {
    cy.get('.a-color-state.a-text-bold').contains(data.search_query);
  });

  it('Verifies shoe content in left navigation bar', () => {
    var selectorIndex = 2
    
    for(let i = 0; i < data.shoeCategories.length; i++){
      cy.get('div#departments > ul > li:nth-of-type(' + selectorIndex + ') .a-color-base.a-size-base').contains(data.shoeCategories[i]);

      selectorIndex++;
    }
  });
})