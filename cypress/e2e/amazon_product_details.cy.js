import * as data from '../fixtures/shoe_data.json';

describe('Amazon Product Detail Page', () => {
  before(() => {
    cy.visit('/' + data.knownShoeProductDetailURL);
  });

  it('Verifies Product Detail Page', () => {
    cy.get('span#productTitle').contains(data.productDetails.title);
    cy.get('.selection').contains(data.productDetails.color);
    cy.get('span#dropdown_selected_size_name .a-dropdown-prompt').should('exist');
    cy.get('.a-spacing-small.item.imageThumbnail.a-declarative').first().should('exist');
    cy.get('.a-text-center.a-fixed-left-grid-col.regularImageBlockViewLayout.a-col-right').should('exist');
    cy.get('input#add-to-cart-button').should('exist');
    cy.get('a[name="submit.add-to-registry.wishlist.unrecognized"]').should('exist');
  });

  it('Verifies adding product to cart', () => {
    cy.get('span#dropdown_selected_size_name .a-dropdown-prompt', { timeout: 3000 }).click();
    cy.get('li:nth-of-type(2) > .a-dropdown-link', { timeout: 1000 }).click();
    cy.wait(2000);
    cy.get('input#add-to-cart-button', { timeout: 3000 }).click();

    cy.get('input[name="proceedToRetailCheckout"]').should('exist');
    cy.get('#sw-gtc .a-button-text').should('exist');
  });
})