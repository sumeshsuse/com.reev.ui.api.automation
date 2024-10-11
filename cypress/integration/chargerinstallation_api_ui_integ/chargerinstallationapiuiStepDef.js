import {Given} from 'cypress-cucumber-preprocessor/steps'
import ChargerInstallation from '../../support/pageCommands/ChargerInstallation';
import ChargerInstallationapi from '../../support/Module/Chargerinstallationapi'
import { Env } from '../../support/Env';


const chargerInstallationapi = new ChargerInstallationapi
const chargerInstallation = new ChargerInstallation


Given('The user launch the reev charger installation form', () => {
    let baseUIRL = new Env().getUIUrl()
    cy.visit(baseUIRL); 
  });
  
 
Then('The user verifies the charger point installation page title {string}', (expectedTitle) => {
    chargerInstallation.pageTitleValidation(expectedTitle)
  });

  And('The user prerequisite clear all the serial number in the form', () => {
    chargerInstallation.clearAllSerialNumberForm()
  });


  Then('the user verifies the {string} title in the charger point installation form', (chargepointInstallationTitle) => {
     chargerInstallation.chargerFormValidation(chargepointInstallationTitle)
  });

  Then('the user verifies the title {string} in the Serial Number from', (serialNumbertitle) => {
    chargerInstallation.serialNumberFormValidation(serialNumbertitle)
  });


  When('the user enters the {string} clicks on the add button of the serial number form', (serialNumber) => {
    chargerInstallation.addSerialNumber(serialNumber)
  });

  Then('the user verifies the {string} is available in the form', (serialNumber) => {
   chargerInstallation.verifySerialNumber(serialNumber)
});


And('the user deletes the serial number', () => {
    chargerInstallation.deleteSerialNumber()
 });

 Then('the user should validate there should be {string} in the Serial Number form', (count) => {
    chargerInstallation.validateSerialNumberCount(count)
 });

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