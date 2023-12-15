///<reference types="cypress"/>

describe('dropdown, check boxes, radio buttons',()=>{
    it('dropdown',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the dropdown tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        //3. select a particular value form dropdown
        cy.get('#dropdowm-menu-1').select('python')

        // 4. validating selected value form dropdown
        cy.get('#dropdowm-menu-1').should('include.text','Python')

        cy.get('#dropdowm-menu-2').select('Maven')

        cy.get('#dropdowm-menu-2').should('include.text','Maven')

        // selecting the 4 value form dropdown
        cy.get('#dropdowm-menu-3').select(3)

        // validate the selection
        cy.get('#dropdowm-menu-3').should('include.text','JQuery')
    })

    it('check boxes and radio buttons',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the dropdown tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('[value="option-1"]').check()
        cy.get('[value="option-1"]').should('be.checked')

        cy.get('[value="option-2"]').check()
        cy.get('[value="option-2"]').should('be.checked')

        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck()
        cy.get('[value="option-3"]').should('not.be.checked')

        // radio button
        cy.get('input[value="blue"]').click()
        cy.get('input[value="blue"]').should('be.checked')

        cy.get('input[value="orange"]').click()
        cy.get('input[value="orange"]').should('be.checked')

        cy.get('input[value="blue"]').should('not.be.checked')
    })
})