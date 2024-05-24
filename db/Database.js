const { Pool } = require("pg");

class Dbase {
  constructor(options) {
    this.options = options;
    this.db = null;
  }

  validate() {
    const { host, user, password, Dbase } = this.options;
    if (!host || !user || !password || !Dbase)
      throw new Error("Invalid Dbase Configuration");
    return;
  }

  connect() {
    this.validate();
    const { host, user, password, Dbase } = this.options;
    const pool = new Pool({
      host: host,
      user: user,
      password: process.env.DB_PASSWORD || password,
      Dbase: Dbase,
      port: 5432, // Default PostgreSQL port
    });
    this.db = pool;
  }
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = Dbase;
