export class Env {

getUIUrl(){
    let env = Cypress.env("ENV")
    return "localhost:3000"
}

getAPIUrl(){
    let envAPI = Cypress.env("ENVAPI")
    return "localhost:3001"
}


}