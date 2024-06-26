const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost",
  dialect: "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: 'team2_db',
  port: 5432 // Default PostgreSQL port
});

module.exports = pool;
