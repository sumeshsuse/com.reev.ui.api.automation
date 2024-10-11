class ChargerInstallation {


    pageTitleValidation(pageTitle){
      cy.title().should('include', pageTitle)
    }

    chargerFormValidation(chargerFormTitle){
       cy.get('h1[class="title"]').should('have.text', chargerFormTitle)
    }

    serialNumberFormValidation(serialNumberText){
        cy.get('label[for="input-serial-number"]').should('have.text', serialNumberText)
    }


    addSerialNumber(serialNumber){
        cy.get('input[name="input-serial-number"]').type(serialNumber)
        cy.get('button[class="addButton"]').click()
        cy.wait(1000)
    }

    verifySerialNumber(serialNumber){
        cy.get('div[class="list-text"]').should('include.text',serialNumber)
    }


    clearAllSerialNumberForm(){
        cy.get('ul[class="list"]').invoke('text').then(($serialNumberList, index) => {
            if($serialNumberList.length != 0 ) {
                   cy.get('button[class="list-button"]').each((element) => {
                cy.get('button[class="list-button"]').contains('X').click()
                cy.wait(1000)
            });
            }
        })
    }

    deleteSerialNumber(){
        cy.get('button[class="list-button"]').contains('X').click()
    }

    validateSerialNumberCount(count){
        if(count == '0') count = 'be.empty'
        cy.get('ul[class="list"]').invoke('text').should(count)
    }

}
export default ChargerInstallation;