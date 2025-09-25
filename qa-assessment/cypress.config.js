const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eight25media.com',
    specPattern: 'cypress/e2e/eight25.cy.js',   
    supportFile: false,
    setupNodeEvents(on, config) {
      
    }
  }
})
