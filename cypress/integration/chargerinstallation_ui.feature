Feature: Charger Installation form UI


Background: Launch the reev dashboard : Charger installation form 
   Given The user launch the reev charger installation form
   Then  The user verifies the charger point installation page title 'React App'
   And  The user prerequisite clear all the serial number in the form

@ui @alltest
Scenario Outline:  Verification of add serial number in Charger installation form 
Then the user verifies the 'Charge Point Installation Form' title in the charger point installation form
When the user verifies the title 'Serial Number: ' in the Serial Number from
And the user enters the '<Serial Number>' clicks on the add button of the serial number form
Then the user verifies the '<Serial Number>' is available in the form 
Examples:
  |Serial Number    |
  | 123WithAlphabet |
  | 123456 |
  | onlyalphabet |
  | CAPITALALPHABET |
  | 123WithAlpSp@#! |
  | @#$%^&*+-*~!|
  | serial  number123 |
  |  CAPWITH123!|
  | 1234                 56 |
  | 1234^$%$%56 |

@ui @alltest
Scenario Outline:  Deleting Serial Number in Charger Point Installation Form 
  And the user enters the '<Serial Number>' clicks on the add button of the serial number form
  Then the user verifies the '<Serial Number>' is available in the form
  And the user deletes the serial number
  Then the user should validate there should be '0' in the Serial Number form
  Examples:
  |Serial Number    |
  | DeLEtE9865     |
