///<reference types="cypress"/>

describe('WebdriverUniversity app',()=>{
    
    it("file uplodaing test",()=>{   // beforeEach hook
        // step1 -- visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 
        
        // step2 - clicking on contact us also removed target attribute for langing on same tab
        cy.get("#file-upload").invoke('removeAttr','target').click()

        // step3 - upload the file
        cy.get('#myFile').selectFile('cypress/fixtures/upload.txt')
        //cy.get('#myFile').selectFile('cypress/fixtures/upload.csv')

        // step 4 - click on sumnit button
        cy.get('#submit-button').click()

        cy.wait(2000)
        // validting the alert message
        cy.on('window:alert',(message)=>{
            expect(message).to.include('Your file has now been uploaded!')
        })
    })
    it("file uplodaing test",()=>{   // beforeEach hook
        // step1 -- visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 
        
        // step2 - clicking on contact us also removed target attribute for langing on same tab
        cy.get("#file-upload").invoke('removeAttr','target').click()

        // step3 - upload the file
        // cy.get('#myFile').selectFile('cypress/fixtures/upload.txt')
        //cy.get('#myFile').selectFile('cypress/fixtures/upload.csv')

        // step 4 - click on sumnit button
        cy.get('#submit-button').click()

        cy.wait(2000)
        // validting the alert message
        cy.on('window:alert',(message)=>{
            expect(message).to.include('You need to select a file to upload!')
        })
    })
})