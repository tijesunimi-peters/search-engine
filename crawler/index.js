const fs = require("fs")
const path = require("path")
const lineReader = require("line-reader")
const constants = require("../config/constants.js")
const webLoader = require("./webLoader.js")
const CsvLineParser = require("./csvLineParser.js")

const { SEEDER_DIR, DOMAINS_FILENAME, PROJECT_ROOT } = constants
const SEEDER_PATH = path.resolve(PROJECT_ROOT, SEEDER_DIR, DOMAINS_FILENAME)

let csvLine = new CsvLineParser();
lineReader.eachLine(SEEDER_PATH, function(line) {
  if(line.includes("Rank")) {
    csvLine.buildHeader(line);
  } else {
    console.log(csvLine.parseRow(line))
  }
})
