///<reference types="cypress"/>

describe('Xcel to json coversion and usage', () => {
    const filePath = 'C:/Users/Shekar/Downloads/testData.xlsx'
    it("use data from xcel", () => {
        cy.task('exceltoJson',filePath).then((reqData) => {
            // step1 -- visiting the website
            cy.visit('https://www.webdriveruniversity.com/')

            // step2 - clicking on contact us also removed target attribute for langing on same tab
            cy.get("#contact-us").invoke('removeAttr', 'target').click()

            // step3 - typed into first name field

            cy.get('input[placeholder="First Name"]').type(reqData.Sheet1[1].A)

            // step4 - typed into last name field

            cy.get('[name="last_name"]').type(reqData.Sheet1[1].B)

            // step5 - typed into email field

            cy.get('[class="feedback-input"]').eq(2).type(reqData.Sheet1[1].C)

            // step6 - typed commnet

            cy.get('[placeholder="Comments"]').type(reqData.Sheet1[1].D)

            //step7 - click on the submit button
            cy.get('[value="SUBMIT"]').click()

            // step8 - verifying the message

            cy.get('#contact_reply h1').should('include.text', 'Thank You for your Message!')
        })
    })
})