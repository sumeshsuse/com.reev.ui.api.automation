///<reference types = "cypress"/>
import { Env } from "../Env"
import RequestAPI from "../Utility/RequestAPI"

const requestAPI = new RequestAPI


class ChargerInstallation {

    static api = "";

    getChargerInstallationService(serviceURI){
        cy.log('serviceURI ',serviceURI)
        ChargerInstallation.api = new Env().getAPIUrl() + requestAPI.requestURL(serviceURI)
    }


    postChargerInstallationPayLoad(serialNumberAttr){
        cy.fixture('serialnumber/serialNumber').then((serialNumberObj) => {
            serialNumberObj.serialNumber = serialNumberAttr
            requestAPI.executeRequest('POST',ChargerInstallation.api,null,serialNumberObj).as('chargerInstallationPOSTResponse')
        })
    }

    createSerialNumberResponseValidation(serialNumber){
        cy.get('@chargerInstallationPOSTResponse').then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body).has.property('serialNumber',serialNumber ) 
            cy.wrap(response.body.id).as('id')
        })
    }

    getChargerInstallationPayLoad(){
            requestAPI.executeRequest('GET',ChargerInstallation.api,null,null).as('chargerInstallationGETResponse')
    }

    getSerialNumberResponseValidation(){
        cy.get('@chargerInstallationGETResponse').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0]).has.property('id')
            expect(response.body[0]).has.property('serialNumber')
        })
    }

    deleteChargerInstallationPayLoad(){
        cy.get('@id').then((id) =>{
           ChargerInstallation.api =  ChargerInstallation.api.replace("{deleteID}", id);
           requestAPI.executeRequest('DELETE',ChargerInstallation.api,null,null).as('chargerInstallationDELETEResponse')
        })
    }

    deleteSerialNumberResponseValidation(){
        cy.get('@chargerInstallationDELETEResponse').then((response) => {
            expect(response.status).to.eq(204)
        })
    }



}
export default ChargerInstallation;