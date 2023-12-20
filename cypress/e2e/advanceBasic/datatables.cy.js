///<reference types="cypress"/>

describe("data tables handling",()=>{
    beforeEach('visiting the data table',()=>{
        //1. visiting the website
        cy.visit('https://www.webdriveruniversity.com/') 

        //2. click on the alert tab
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })
    it('age of user present in table',()=>{

        //3. iterate through the selected web element to validate age
        cy.get('#thumbnail-1 tr td:nth-child(2)').each((ele, index)=>{
            const userLname = ele.text()
            if(userLname === 'Doe'){
                cy.log(userLname)
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
                    const userAge = age.text()
                    expect(userAge).to.equal('20')
                })
            }
        })
    })
    it.only('addition of the users ages',()=>{
        let userAge= []
        let sumofAge = 0
        //3. addition of the users ages which is 322
        cy.get('#thumbnail-1 td').each((ele, i)=>{
            userAge[i] = ele.text()
        }).then(()=>{
            // to iterate with the ages
            for(let a = 0; a < userAge.length; a++){
                //coverting from string to number
                if(Number(userAge[a])){
                    sumofAge = sumofAge + Number(userAge[a])
                }
            }
            // asserting the sum of ages
            expect(sumofAge).to.equal(322)
        })
    })
})