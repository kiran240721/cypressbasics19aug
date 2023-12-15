///<reference types="cypress"/>

describe("mouse actions",()=>{
    it('drag and drop',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the dropdown tab
        cy.get('#actions').invoke('removeAttr', 'target').click()

        //3. drag the element
        cy.get('#draggable').trigger("mousedown",{which:1})

        //4. drop the element
        cy.get('#droppable').trigger("mousemove").trigger("mouseup",{force : true})

        //5. validating the drop action
        cy.get('#droppable b').should('include.text', 'Dropped')
    })

    it.only('hovering actions',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the dropdown tab
        cy.get('#actions').invoke('removeAttr', 'target').click()

        //3. hover on the button
        cy.get('.dropdown-content').eq(0).invoke('show').should('be.visible').click()

        //4. double click
        cy.get('#double-click').dblclick()
    })
})