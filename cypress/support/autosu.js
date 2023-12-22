//

Cypress.Commands.add('selectFoodItem',(foodItemLetter)=>{
    cy.get('#myInput').type(foodItemLetter)
    cy.get('#myInputautocomplete-list div').each((foodItem)=>{
        if(foodItem.text() === 'Granola'){
            cy.wrap(foodItem).click()
            cy.get('#submit-button').click()
            cy.url().should('include','Granola')
        }
    })
})