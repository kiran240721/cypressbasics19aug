const { defineConfig } = require("cypress");
const fs = require("fs");
const exceltoJson = require("convert-excel-to-json");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        exceltoJson(filePath){
          const readFile = exceltoJson({
            source : fs.readFileSync(filePath)
          })
          return readFile
        }
      })
    },
    watchForFileChanges:false,
    // includeShadowDom : true,
    //pageLoadTimeout: 15000
  },
});
