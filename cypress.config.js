const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "charts": true,
    "reportPageTitle": 'custom-title',
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "saveAllAttempts": true,
    "html": true,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber()),
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // specPattern: 'cypress/e2e/*',
    specPattern: 'cypress/integration/**/*.feature',

  },
});
