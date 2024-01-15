///<reference types="cypress"/>

describe('Handling shadow dom', () => {
    it ('traversing with different methods', () => {
        //find()
        //first()
        //next()
        //eq()
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the alert tab
        cy.get('#data-table').invoke('removeAttr', 'target').click()

        cy.get('.traversal-drinks-list').children('#milk').should('include.text', 'Milk')

        cy.get('.traversal-drinks-list').find('li').eq(4).should('include.text', 'Sugar')

        cy.get('.traversal-mark').parent().should('include.text','Lorem ipsum dolor sit amet, consectetur adipiscing elit')
    })
})