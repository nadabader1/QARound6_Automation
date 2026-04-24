// /// <reference types="cypress" />

// describe('Create a test case to check that all fields / titles / buttons are visible in the Register form', () => {
//   it('check that all feilds are visable', () => {
//     cy.visit("https://demowebshop.tricentis.com/register")
//      cy.contains('Register').should('be.visible')
//     cy.contains('Your Personal Details').should('be.visible')
//     cy.contains('Your Password').should('be.visible')
//     cy.get('#gender-male').should('be.visible')
//     cy.get('#gender-female').should('be.visible')
//     cy.get('#FirstName').should('be.visible')
//     cy.get('#LastName').should('be.visible')
//     cy.get('#Email').should('be.visible')
//     cy.get('#Password').should('be.visible')
//     cy.get('#ConfirmPassword').should('be.visible')
//     cy.get('#register-button').should('be.visible')
//   });
//   it.only('check to functinality', () => {
//     cy.visit("https://demowebshop.tricentis.com/register")
//     let email = 'nada' + '12' + '@gmail.com'
//      cy.get('#gender-female').check()
//     cy.get('#FirstName').type('Nada')
//     cy.get('#LastName').type('Bader')
//     cy.get('#Email').type(email)
//     cy.get('#Password').type('Nada123')
//     cy.get('#ConfirmPassword').type('Nada123')
//     cy.get('#register-button').click()
//      cy.contains('Your registration completed').should('be.visible')



//   });


//   });
/// <reference types="cypress" />

describe('Create a test case to check that all fields / titles / buttons are visible in the Register form', () => {
  it('check the all fildes visable', () => {
    cy.visit("https://demowebshop.tricentis.com/register")
    cy.contains("h1", "Register").should('be.visible')
    cy.contains('.title', 'Your Personal Details').should('be.visible')
    cy.contains('.inputs', 'Gender:').should('be.visible')
    cy.get("label[for=gender-male]").should("be.visible")
    cy.get("label[for=gender-female]").should("be.visible")
    cy.get("#gender-male").should('be.visible')
    cy.get("#gender-female").should('be.visible')
    cy.get("#FirstName").should('be.visible')
    cy.get("#LastName").should('be.visible')
    cy.get("#Email").should('be.visible')
    cy.contains('.title', 'Your Password').should('be.visible')
    cy.get("#Password").should('be.visible')
    cy.get("#ConfirmPassword").should('be.visible')
    cy.get("#register-button").should('be.visible')
    cy.get(".required").should('be.visible')

  });
  it.only('happy scenario', () => {
    cy.visit("https://demowebshop.tricentis.com/register")

    const random = Date.now().toString().slice(-3);
    const newUser = {
      firstName: `nada_${random}`,
      lastName: `bader_${random}`,
      email: `nadabader_${random}@test.com`,
      password: '123456',
      confirmPassword: '123456'
    };

    cy.get('#gender-female').check()
    cy.get("#FirstName").type(newUser.firstName)
    cy.get("#LastName").type(newUser.lastName)
    cy.get("#Email").type(newUser.email)
    cy.get("#Password").type(newUser.password)
    cy.get("#ConfirmPassword").type(newUser.confirmPassword)
    cy.get("#register-button").click()
    cy.get(".result").should('be.visible').and('contain', 'Your registration completed')
    cy.get("a.account").should('contain', newUser.email)
    cy.url().should('eq', 'https://demowebshop.tricentis.com/registerresult/1')
    cy.get( ".ico-login").should('not.exist')
    cy.get(".ico-logout").should('be.visible')
  });
})
