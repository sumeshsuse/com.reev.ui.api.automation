class ChargerInstallPageObject {

    getTitle(){
        return cy.get('h1[class="title"]');
    }

    getSerialNumberlbl(){
        return cy.get('label[for="input-serial-number"]');
    }

    getSerialNumberTxtBox(){
        return cy.get('input[name="input-serial-number"]');
    }
     
    getAddBtn(){
        return cy.get('button[class="addButton"]')
    }

    getSerialNumberList(){
        return cy.get('div[class="list-text"]')
    }

    getOverAllSerialList(){
        return cy.get('ul[class="list"]');
    }


    getDeleteBtn(){
        return cy.get('button[class="list-button"]');
    }

    getElementSerialNoCount(){
        return cy.get('ul[class="list"]');
    }




}
export default ChargerInstallPageObject;