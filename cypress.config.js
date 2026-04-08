const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.saucedemo.com/" ,
    // watchForFileChanges:false,
     baseUrl:"https://www.telerik.com/support/demos",
     baseUrl:"https://demowebshop.tricentis.com/register",
    // viewportWidth:440,
    // viewportHeight:400,
  },
  
});
