Feature: End to End integration API - UI Charger Installation


Background: Launch the reev dashboard : Charger installation form 
   Given The user launch the reev charger installation form
   Then  The user verifies the charger point installation page title 'React App'
   And  The user prerequisite clear all the serial number in the form

@e2euiapi @alltest
Scenario Outline: E2E API-UI integration - Add serial number in charger installation form through API and validate in UI
 Given the user fetches the URL and '<URI>' for serial number API service
 And the user fetches the create serial number '<Serial Number>' payload and execute the service
 Then the user validate the response code and response body with '<Serial Number>'
 And The user launch the reev charger installation form
 Then the user verifies the '<Serial Number>' is available in the form
 Examples:
  | Serial Number    | URI |
  | 123WithAlphabet | createserialnumber |

@e2euiapi @alltest
Scenario Outline: E2E API-UI integration - Add serial number in charger installation form through UI and validate in API
Then the user verifies the 'Charge Point Installation Form' title in the charger point installation form
When the user verifies the title 'Serial Number: ' in the Serial Number from
And the user enters the '<Serial Number>' clicks on the add button of the serial number form
 Given the user fetches the URL and '<URI>' for serial number API service
 And the user fetches the create serial number '<Serial Number>' payload and execute the service
  Examples:
  | Serial Number    | URI |
  | 123WithAlphabet | createserialnumber |

@e2euiapi @alltest
Scenario Outline: E2E API-UI integration - Add serial number through API, delete and validate in UI
 Given the user fetches the URL and '<URI>' for serial number API service
 And the user fetches the create serial number '<Serial Number>' payload and execute the service
 When The user launch the reev charger installation form
 And the user deletes the serial number
 Then the user should validate there should be '0' in the Serial Number form 
 Examples:
  | Serial Number    | URI |
  | 123WithAlphabet | createserialnumber |

@e2euiapi @alltest
Scenario Outline: E2E API-UI integration - Add serial number in UI, delete and validate in API
Then the user verifies the 'Charge Point Installation Form' title in the charger point installation form
When the user verifies the title 'Serial Number: ' in the Serial Number from
And the user enters the '<Serial Number>' clicks on the add button of the serial number form
Given the user fetches the URL and 'createserialnumber' for serial number API service
And the user fetches the create serial number '<Serial Number>' payload and execute the service
Then the user validate the response code and response body with '<Serial Number>'
Given the user fetches the URL and '<URI>' for serial number API service
And the user fetches the serial number service execute the DELETE service
Then the user validate the response code for the DELETE service
And The user launch the reev charger installation form
 Examples:
  | URI                | Serial Number |   
  | deleteserialnumber | 123WithAlphabet |



