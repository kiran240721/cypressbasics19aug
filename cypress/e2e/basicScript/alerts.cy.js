///<reference types="cypress"/>
describe("alert handling",()=>{
    it('popup message validations',()=>{
        cy.visitPopupAlerts()
        // //1. visiting the website
        // cy.visit('https://www.webdriveruniversity.com/') 

        // //2. click on the alert tab
        // cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        //3. click on the alert button
        cy.get('#button1').click()

        //4. validate the popup message and alert
        cy.on('window:alert',(message)=>{
            expect(message).to.include('I am an alert box!')
        })
    })
    it('confirm message validations',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the alert tab
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        //3. click on the alert button
        cy.get('#button4').click()

        //4. validate the popup message and alert
        cy.on('window:confirm',(message)=>{
            expect(message).to.include('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('include.text','You pressed OK!')
    })
    it.only('confirm message validations',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the alert tab
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        //3. click on the alert button
        cy.get('#button4').click()

        //4. validate the popup message and alert
        cy.on('window:confirm',(message)=>{
            expect(message).to.include('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('include.text','You pressed Cancel!')
    })
})