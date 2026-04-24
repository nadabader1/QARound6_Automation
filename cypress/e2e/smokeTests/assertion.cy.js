/// <reference types="cypress" />
describe('assertion lesson', () => {
    it('should commands', () => {
        cy.visit('http://127.0.0.1:5500/actionLesson.html');
        cy.get("#country").find("option").first().should("be.selected")
        cy.get("[placeholder='Type your age']").type('23')
        cy.get("[placeholder='Type your name']").type("nada")
cy.get("[Type= number]").should('have.value','23')

    });
    it.only('validate the user can open google website', () => {
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").click()
        cy.url().should('eq','https://www.google.com/')
        
    });

});
