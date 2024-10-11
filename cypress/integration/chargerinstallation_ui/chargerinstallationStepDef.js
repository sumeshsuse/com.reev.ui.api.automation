import {Given} from 'cypress-cucumber-preprocessor/steps'
import ChargerInstallation from '../../support/pageCommands/ChargerInstallation';
import { Env } from '../../support/Env';


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