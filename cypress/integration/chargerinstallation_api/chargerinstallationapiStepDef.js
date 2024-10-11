import {Given,And, Then} from 'cypress-cucumber-preprocessor/steps'
import ChargerInstallationapi from '../../support/Module/Chargerinstallationapi'


const chargerInstallationapi = new ChargerInstallationapi

 Given('the user fetches the URL and {string} for serial number API service', (URI) => {
    chargerInstallationapi.getChargerInstallationService(URI)
  });
 And('the user fetches the create serial number {string} payload and execute the service', (serialNumber) => {
    chargerInstallationapi.postChargerInstallationPayLoad(serialNumber)
});
 Then('the user validate the response code and response body with {string}', (serialNumber) => {
    chargerInstallationapi.createSerialNumberResponseValidation(serialNumber)
});

And('the user fetches the get serial number service execute the service',() => {
   chargerInstallationapi.getChargerInstallationPayLoad()
});

Then('the user validate the response code for the GET serial number',() => {
   chargerInstallationapi.getSerialNumberResponseValidation()
});

Then('the user fetches the serial number service execute the DELETE service',() => {
   chargerInstallationapi.deleteChargerInstallationPayLoad()
});

Then('the user validate the response code for the DELETE service',() => {
chargerInstallationapi.deleteSerialNumberResponseValidation()
});