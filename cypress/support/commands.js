// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// reusabilty, readbility, mainability

Cypress.Commands.add('visitPopupAlerts', () => {
    //1. visiting the website
    cy.visit('https://www.webdriveruniversity.com/') 

    //2. click on the alert tab
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
})

Cypress.Commands.add('visitApp',() => {
    cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
})