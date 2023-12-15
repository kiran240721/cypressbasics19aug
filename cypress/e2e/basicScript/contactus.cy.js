///<reference types="cypress"/>

describe('WebdriverUniversity app',()=>{
    beforeEach("repeating steps",()=>{   // beforeEach hook
        // step1 -- visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 
        
        // step2 - clicking on contact us also removed target attribute for langing on same tab
        cy.get("#contact-us").invoke('removeAttr','target').click() 
    })
    it("visit and check the application",()=>{

        // step3 - typed into first name field
        cy.get('input[placeholder="First Name"]').type('abc')

        // step4 - typed into last name field
        cy.get('[name="last_name"]').type('abc')

        // step5 - typed into email field
        cy.get('[class="feedback-input"]').eq(2).type('a@A.com')

        // step6 - typed commnet
        cy.get('[placeholder="Comments"]').type('for testing purposes')

        //step7 - click on the submit button
        cy.get('[value="SUBMIT"]').click()

        // step8 - verifying the message
        cy.get('#contact_reply h1').should('include.text','Thank You for your Message!')
    })

    it.skip("Contact us -- invalid email id message",()=>{
        // step1 -- visiting the website
        // cy.visit('https://www.webdriveruniversity.com/') 
        
        // // step2 - clicking on contact us also removed target attribute
        // cy.get("#contact-us").invoke('removeAttr','target').click() 

        // step3 - typed into first name field
        cy.get('input[placeholder="First Name"]').type('abc')

        // step4 - typed into last name field
        cy.get('[name="last_name"]').type('abc')

        // step5 - typed into email field
        cy.get('[class="feedback-input"]').eq(2).type('a@')

        // step6 - typed commnet
        cy.get('[placeholder="Comments"]').type('for testing purposes')

        //step7 - click on the submit button
        cy.get('[value="SUBMIT"]').click()

        // step8 - verifying the message
        cy.get('body').should('include.text','Error: Invalid email address')
    })

    it("Contact us -- blank form submission message",()=>{
        // step1 -- visiting the website
        // cy.visit('https://www.webdriveruniversity.com/') 
        
        // // step2 - clicking on contact us also removed target attribute
        // cy.get("#contact-us").invoke('removeAttr','target').click() 

        //click on the submit button with empty form
        cy.get('[value="SUBMIT"]').click()

        // step8 - verifying the message
        cy.get('body').should('include.text','Error: all fields are required')
    })
})

// describe("",()=>{
//     it("",()=>{

//     })
// })