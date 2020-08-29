var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "YOUR HOST",
  user: "username",
  password: "password",
  port: "3306",
});

connection.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }

  console.log("Connected to database.");
});

connection.end();

con.connect(function (err) {
  if (err) throw err;

  con.query("CREATE DATABASE IF NOT EXISTS main;");
  con.query("USE main;");
  con.query(
    "CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));",
    function (error, result, fields) {
      console.log(result);
    }
  );
  con.end();
});
