const Logger = require('./logger.js')
Logger.start()

const https = require("https")
const PageWriter = require("./pageWriter.js")
const request = require("request")

const webLoader = function(parsedCsvRow) {
  const responseParser = function(response) {
    let content = ""
    
    response.on("data", function(chunk) {
      content += chunk
    })

    response.on("error", function(err) {
      throw err
    })

    response.on("end", function() {
      console.log(content)
    })
  }

  console.log("Downloading ", parsedCsvRow.Domain);

  request(`https://${parsedCsvRow.Domain}`, {}, function(err, res, body) {
    if(err) return console.log(err);
    console.log("Done with ", parsedCsvRow.Domain)
  })
}


module.exports = webLoader;
