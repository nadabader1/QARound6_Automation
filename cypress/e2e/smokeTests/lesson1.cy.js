/// <reference types="cypress" />

describe("check login functionality", () => {
    it("validate that  the user can login succsusfuly using valid email and valid passworde", () => {
        cy.visit("/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        // cy.get("[name=login-button]").click()
        // cy.get("button")
        // cy.contains("h4","user")
        cy.contains("Login").click()
        cy.contains("Swag Labs")
        cy.contains("div", "Sauce Labs Backpack")
        cy.get("#react-burger-menu-btn").click()
        cy.get(".menu-item").first()
        cy.get(".menu-item").last().prev()
        cy.get(".menu-item").eq(1).next()
        cy.get("a").filter(".menu-item")
        cy.get("a").not(".menu-item")
        cy.get(".pricebar").first().find("button").click()


    })
    // it("validate that  the user cant  login succsusfuly using valid email and invalid passworde", () => {
    //     cy.visit("/")
    //    cy.get("#user-name").type("standard_user")      
    // })

})
