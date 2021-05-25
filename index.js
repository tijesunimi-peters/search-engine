const Logger = require('./logger.js')
Logger.start()

const Crawler = require("./crawler/index.js")
const constants = require("./config/constants.js")
const path = require("path")
const { SEEDER_DIR, DOMAINS_FILENAME, PROJECT_ROOT } = constants
const SEEDER_PATH = path.resolve(PROJECT_ROOT, SEEDER_DIR, DOMAINS_FILENAME)

console.log("Search Engine entry")
Crawler.crawl(SEEDER_PATH)
