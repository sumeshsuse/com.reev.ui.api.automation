import ChargerInstallPageObject from "../pageObjects/ChargerInstallPageObject"


const chargerInstallationPageObject = new ChargerInstallPageObject();

class ChargerInstallation {


    pageTitleValidation(pageTitle){
      cy.title().should('include', pageTitle)
    }

    chargerFormValidation(chargerFormTitle){
        chargerInstallationPageObject.getTitle().should('have.text', chargerFormTitle)
    }

    serialNumberFormValidation(serialNumberText){
        chargerInstallationPageObject.getSerialNumberlbl().should('have.text', serialNumberText)
    }


    addSerialNumber(serialNumber){
        chargerInstallationPageObject.getSerialNumberTxtBox().type(serialNumber)
        chargerInstallationPageObject.getAddBtn().click()
        cy.wait(1000)
    }

    verifySerialNumber(serialNumber){
        chargerInstallationPageObject.getSerialNumberList().should('include.text',serialNumber)
    }


    clearAllSerialNumberForm(){
        chargerInstallationPageObject.getOverAllSerialList().invoke('text').then(($serialNumberList, index) => {
            if($serialNumberList.length != 0 ) {
                chargerInstallationPageObject.getDeleteBtn().each((element) => {
                    chargerInstallationPageObject.getDeleteBtn().contains('X').click()
                cy.wait(1000)
            });
            }
        })
    }

    deleteSerialNumber(){
        chargerInstallationPageObject.getDeleteBtn().contains('X').click()
    }

    validateSerialNumberCount(count){
        if(count == '0') count = 'be.empty'
        chargerInstallationPageObject.getElementSerialNoCount().invoke('text').should(count)
    }

}
export default ChargerInstallation;