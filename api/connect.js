/*const mysql = require ("mysql")

 const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"nidhi@872614",
  database:"instagram1"
})
module.exports = db;*/

require('dotenv').config();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = db;
