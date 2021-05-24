const path = require("path")

const PROJECT_ROOT = path.resolve(".")
const SEEDER_DIR = "seed"
const DOMAINS_FILENAME = process.env.NODE_ENV == "production" ? "domains.csv" : "domains-dev.csv"
const LOG_FILE = path.join(PROJECT_ROOT, "development.log")

module.exports = {
  SEEDER_DIR, DOMAINS_FILENAME, PROJECT_ROOT, LOG_FILE
}
