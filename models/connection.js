const mysql = require("mysql");
require("dotenv").config();

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PW,
    database: "burgers_db"
  });
}

connection.connect(function(err) {
    if (err){
      console.log(err);
      return
    }
    console.log("Connected as id " + connection.threadId)
  });

module.exports = connection;
