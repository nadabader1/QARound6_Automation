/// <reference types="cypress" />
describe('demowebshop', () => {
    it('should open page succusfully', () => {
        cy.visit("/")
        cy.get(".header-logo").click()
        cy.get(".ico-login").click()
        cy.get("#small-searchterms")
        cy.contains('a', 'Jewelry')
        cy.get(".ico-register").click()
        cy.contains("h1", "Register")
        cy.get("#gender-male")
        cy.get("#LastName")
        cy.contains(".inputs", "Email:")
        cy.contains(".inactive", "Gift Cards").click()
        cy.contains(".title", "Manufacturers")
        cy.get("#register-button").click()
        cy.get("#newsletter-email")
        cy.get("#newsletter-subscribe-button").click()
        cy.contains("h3", "My account")
        cy.contains('a', 'Contact us').click()
    });


});