const { Pool } = require("pg");

class Database {
  constructor(options) {
    this.options = options;
    this.db = null;
  }

  validate() {
    const { host, user, password, database } = this.options;
    if (!host || !user || !password || !database){
      throw new Error("Invalid Configuration");
  }}

  connect() {
    this.validate();
    const { host, user, password, database } = this.options;
    const pool = new Pool({
      host,
      user,
      password: process.env.DB_PASSWORD || password,
      Database: Database,
      port: 5432, 
    });
    this.db = pool;
  }
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = Database;
