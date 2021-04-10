const Pool = require("pg").Pool;
const dbPassword = process.env.DB_PASSWORD;
const pool = new Pool({
  user: "postgres",
  password: dbPassword,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
