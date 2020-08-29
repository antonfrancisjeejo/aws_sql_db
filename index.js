const express = require("express");
const app = express();
var mysql = require("mysql");
app.use(express.json());
var con = mysql.createConnection({
  host: "YOUR HOST",
  user: "username",
  password: "password",
  port: "3306",
});

con.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }

  console.log("Connected to database.");
});

app.post("/users", (req, res) => {
  if (req.body.username && req.body.email && req.body.age) {
    console.log("Request received");
    con.connect(function (err) {
      con.query(
        `INSERT INTO main.users (username, email, age) VALUES ('${req.body.username}', '${req.body.email}', '${req.body.age}')`,
        function (err, result, fields) {
          if (err) res.send(err);
          if (result)
            res.send({
              username: req.body.username,
              email: req.body.email,
              age: req.body.age,
            });
          if (fields) console.log(fields);
        }
      );
    });
  } else {
    console.log("Missing a parameter");
  }
});

app.get("/users", (req, res) => {
  con.connect(function (err) {
    con.query(`SELECT * FROM main.users`, function (err, result, fields) {
      if (err) res.send(err);
      if (result) res.send(result);
    });
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started.`));
