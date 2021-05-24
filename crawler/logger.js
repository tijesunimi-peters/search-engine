const fs = require("fs")
const path = require("path")
const morgan = require("morgan")

const Logger = function() {
  function start() {
    const fd = path.resolve(__dirname, "development.log")

    let logStream = fs.createWriteStream(fd)
    morgan('common', {stream: logStream})
  }

  return { start }
}

module.exports = Logger()
