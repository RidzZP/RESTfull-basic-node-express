const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  database: "express-db",
});

module.exports = pool.promise();
