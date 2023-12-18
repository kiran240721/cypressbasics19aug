///<reference types="cypress"/>

describe("write and read using cypress commad",()=>{
    it("write in the file",()=>{
       cy.writeFile('./cypress/fixtures/test.txt','this is generated using cypress')
       cy.writeFile('./cypress/fixtures/testJson.json',{firstName: 'csc', lastName: 'csc'})
       
    })

    it("write in the file",()=>{
        cy.readFile('./cypress/fixtures/test.txt').should('contains','this is generated using cypress')
        cy.readFile('./cypress/fixtures/testJson.json').should('have.property',"firstName")
     })

})