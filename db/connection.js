const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: process.env.DB_PASSWORD || 'Happy',
  Dbase: 'team2',
  port: 5432 // Default PostgreSQL port
});

module.exports = pool;
