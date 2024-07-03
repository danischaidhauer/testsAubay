require('cypress-xpath');

describe('Acesso ao Swag Labs', () => {
    const credentials = require('../fixtures/credentials.json');

    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000); 
    });

    it('Login válido', () => {
        cy.get('input[id="user-name"]').type(credentials.email);
        cy.get('input[id="password"]').type(credentials.password);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });

    it('Adicionar item no carrinho de compras', () => {
        cy.get('input[id="user-name"]').type(credentials.email);
        cy.get('input[id="password"]').type(credentials.password);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').should('exist');
    });

    it.only('Checkout', () => {
        cy.get('input[id="user-name"]').type(credentials.email);
        cy.get('input[id="password"]').type(credentials.password);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').should('exist');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Carlos');
        cy.get('[data-test="lastName"]').type('Torres');
        cy.get('[data-test="postalCode"]').type('1000-012');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="checkout-complete-container"]').contains('Thank you for your order!').should('exist');
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
        cy.get('[data-test="back-to-products"]').click();

    })
});
