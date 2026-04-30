/// <reference types="cypress" />
describe('delet product from cart', () => {
    before(() => {
        
            cy.loginToDemoWebShop()
        // // run the code once before all test cases
        // cy.visit("https://demowebshop.tricentis.com/login")
        // cy.get("#Email").type("eng.razanbalatiah96@gmail.com")
        // cy.get("#Password").type("test@123") 
        // cy.get(".login-button").click()
        //add product to cart
        cy.request('POST', 'https://demowebshop.tricentis.com/addproducttocart/catalog/13/1/1')
        // cy.screenshot({capture:"fullPage"})
        // cy.screenshot({capture:"viewport"})
         cy.screenshot({capture:"runner"})
    })
    it('validat the user can delet product from the cart', () => {

        cy.get(".ico-cart").first().click()
        cy.get('[name=removefromcart]').check()

        cy.get('.update-cart-button').click()
        cy.get(".cart-qty").should('contain', '0')
        cy.get(".order-summary-content").should('contain', 'Your Shopping Cart is empty!')



    })


});