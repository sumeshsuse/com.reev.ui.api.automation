Feature: Charger Installation form API
@api @alltest
Scenario Outline: API - (CREATE)Add serial number in charger installation form
 Given the user fetches the URL and '<URI>' for serial number API service
 And the user fetches the create serial number '<Serial Number>' payload and execute the service
 Then the user validate the response code and response body with '<Serial Number>'
 Examples:
  | Serial Number    | URI |
  | 123WithAlphabet | createserialnumber |


@api @alltest
  Scenario Outline: API - Get Serial number added in the installation form
 Given the user fetches the URL and '<URI>' for serial number API service
 And the user fetches the get serial number service execute the service
 Then the user validate the response code for the GET serial number
 Examples:
  | URI |
  | getserialnumber |


@api @alltest
  Scenario Outline: API - DELETE Serial number in the installation form
  Given the user fetches the URL and 'createserialnumber' for serial number API service
 And the user fetches the create serial number '<Serial Number>' payload and execute the service
 Then the user validate the response code and response body with '<Serial Number>'
 Given the user fetches the URL and '<URI>' for serial number API service
 And the user fetches the serial number service execute the DELETE service
 Then the user validate the response code for the DELETE service
 Examples:
  | URI                | Serial Number |   
  | deleteserialnumber | 123WithAlphabet |


