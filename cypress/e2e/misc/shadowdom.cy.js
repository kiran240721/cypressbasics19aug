///<reference types="cypress"/>

describe('Handling shadow dom', () => {
    it('shadow dom solutions',()=>{
        cy.visitApp()
        // cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        // first way using shadow() command
        cy.get('#shadow_host')
            .shadow()
            .find('[placeholder="Name"]').type('firstName')

        // shadow dom solution using flag
        // cy.get('[placeholder="Name"]',{includeShadowDom: true}).type('firstName')

        // cy.get('[placeholder="Name"]').type('firstName')
    })
})

//https://www.lambdatest.com/selenium-playground/shadow-dom