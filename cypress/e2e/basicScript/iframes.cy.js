// as -- alise in cypress

///<reference types="cypress"/>

describe('Iframe handling',() => {
    it('validate text in ifrmae',() => {
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the iframe tab
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        //3. assing a variable to iframe
        cy.get('#frame').then((iframevar)=>{
            const inIframe = iframevar.contents().find('body')
            cy.wrap(inIframe).as('insideIframe')
            cy.get('@insideIframe').find('#button-find-out-more').click()
            cy.get('@insideIframe').find('.modal-body p')
            .should('include.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras')

            cy.get('@insideIframe').find('[data-dismiss="modal"]').eq(1).click()
        })
    })
})