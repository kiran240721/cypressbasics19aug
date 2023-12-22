///<reference types="cypress"/>

describe("data tables handling",()=>{
    beforeEach('visiting the data table',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the alert tab
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
    })
    it('selecting a date',()=>{
        cy.get('.input-group-addon').click()
        cy.get('.datepicker-switch').first().click()

        function selectYear(){
            cy.get('.datepicker-switch').first().then((yearText)=>{
                let yearName = yearText.text()
                // logic for previous years
                // if(!yearName.includes('2015')){
                //     cy.get('[class="prev"]').eq(2).click({force : true})
                //     selectYear()
                // }

                // logic for next years
                if(!yearName.includes('2025')){
                    cy.get('[class="next"]').eq(0).click({force : true})
                    selectYear()
                }
            })  
        }

        function selectMonth(){
            cy.get('.month').contains('Mar').click({force : true})
        }

        function selectDay(){
            cy.get('[class="day"]').contains('7').click({force : true})
        }

        selectYear()
        selectMonth()
        selectDay()


    })
})