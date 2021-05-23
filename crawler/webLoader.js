const http = require("http")
const PageWriter = require("./pageWriter.js")

const webLoader = function(url) {

  const responseParser = function(response) {
    let content = ""
    
    response.on("data", function(chunk) {
      content += chunk
    })

    response.on("end", function() {
      PageWriter(content)         
    })
  }
}


module.exports = webLoader;
