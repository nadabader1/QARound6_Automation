// /// <reference types="cypress" />
// describe("Demo page", () => {
//     it("should open page succusfully", () => {
//         cy.visit("/")
//         cy.get('h1').contains('Demo')
//         cy.contains('a', 'Reporting & Docs').click()
//        cy.get('a[title=Search]').last()
//        cy.get('#mobile')
//        cy.get('.TK-Footer-Social-Link')
      
//     })
// })
/// <reference types="cypress" />
describe("Demo page", () => {
    it("should open page succusfully", () => {
        cy.visit("/")
        cy.get(".u-s-mb0")
       cy.contains("h1","Demos")
      cy.contains("a","Reporting & Docs").click()
      cy.get('a[title="Search"]').last()
      cy.get("#mobile")
      cy.get("[alt=Google-play-icon]")
      cy.get(".TK-Footer-Social-Link").first().children()
    
    })
})