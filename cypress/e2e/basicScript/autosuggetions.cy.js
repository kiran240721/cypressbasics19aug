///<reference types="cypress"/>

describe('auto suggetion selection',() => {
    it('validating url with auto suggested fooditem',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the iframe tab
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()


        //3.type the fooditem letter
        cy.selectFoodItem('g')
        //cy.get('#myInput').type('g')

        //select particular fooditem populated from the list of typed letter
        // cy.get('#myInputautocomplete-list div').each((foodItem)=>{
        //     if(foodItem.text() === 'Granola'){
        //         cy.wrap(foodItem).click()
        //         cy.get('#submit-button').click()
        //         cy.url().should('include','Granola')
        //     }
        // })
    })
})