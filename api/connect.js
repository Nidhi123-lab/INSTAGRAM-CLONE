const mysql = require ("mysql")

 const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"nidhi@872614",
  database:"instagram1"
})
module.exports = db;
