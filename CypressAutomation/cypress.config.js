const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dnxmdt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
    screenshotsFolder: "cypress/failures/screenshots",
  },
});
