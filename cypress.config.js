const { defineConfig } = require("cypress");
const fs = require("fs-extra");


module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async () => {
        await fs.remove('cypress/QAReport');
      });
    },
    // baseUrl:"https://www.saucedemo.com/" ,
    // // watchForFileChanges:false,
    //  baseUrl:"https://www.telerik.com/support/demos",
    //  baseUrl:"https://demowebshop.tricentis.com/register",
    // // viewportWidth:440,
    // viewportHeight:400,
//      screenshotOnRunFailure:false,
//     screenshotsFolder:"QAScreenshots",
//      trashAssetsBeforeRuns: false,
//      video:true,
//      videosFolder:"QAVideos",
//      videoCompression :20,
//      reporter: "mochawesome",

// reporterOptions: {

// reportDir: "cypress/QARrport", // where to save in directory

// overwrite: false,

// html: true,

// json: false,

// timestamp: "mmddyyyy_HHMMss"

// }
  },
  
});
