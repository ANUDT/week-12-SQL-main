const { Pool } = require("pg");

class Database {
  constructor(options) {
    this.options = options;
    this.db = null;
  }

  validate() {
    const { host, user, password, database } = this.options;
    if (!host || !user || !password || !database)
      throw new Error("Invalid Dbase Configuration");
  }

  connect() {
    this.validate();
    const { host, user, password, database } = this.options;
    const pool = new Pool({
      host,
      user,
      password: process.env.DB_PASSWORD || password,
      Dbase: Dbase,
      port: 5432, 
    });
    this.db = pool;
  }
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = Database;
