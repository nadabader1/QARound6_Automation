/// <reference types="cypress" />
describe('action Lessson', () => {
    it('click command', () => {
        cy.visit('http://127.0.0.1:5500/actionLesson.html');
        cy.get("#btn1").click()
        cy.get("#btn2").click("top")
        cy.get("#btn3").click()
        cy.get(".btn").click({ multiple: true })
        cy.get("#btn0").click({ force: true }, { multiple: true })
    });
    it('type command', () => {
        cy.visit('http://127.0.0.1:5500/actionLesson.html');
        cy.get("[placeholder='Type your name']").type("nada")
    });
it. only('select command', () => {
    cy.visit('http://127.0.0.1:5500/actionLesson.html');
    cy.get("#country") .select("Egypt")
     cy.get("#country") .select("palestine_country")
     cy.get("#country") .select(1)
});
});
