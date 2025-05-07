const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'dbdemo'
});

module.exports = pool.promise();
