const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    login_url: "https://demo.oryxhr.com",
    email: "admin_demo@oryxhr.com",
    password: "Oryx@108demo"
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  }
});
