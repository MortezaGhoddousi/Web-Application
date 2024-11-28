import express from "express";
import bodyParser from "body-parser";
import sqlite from "sqlite3";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const db = new sqlite.Database("./userDatabase.db", (err) => {
  console.log(err);
});

app.post("/api/adduser", (req, res) => {
  const addUser = (data) => {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO user (username, password) VALUES (?, ?)";
      db.run(sql, [data.username, data.password], (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  };
  addUser(req.body)
    .then((result) => {
      res.status(200).send({ Success: "DataInserted" });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/api/user/:username", (req, res) => {
  const getUser = (data) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM user WHERE username=? AND password=?";
      db.get(sql, [data.username, data.password], (err, row) => {
        if (err) reject(err);
        if (row === undefined) resolve(false);
        resolve(row);
      });
    });
  };
  getUser({ username: req.params.username, password: req.body.password })
    .then((result) => {
      if (!result) {
        res.status(404).send({ ERROR: "No such username" });
      } else {
        res.status(200).send(result);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(8000, () => {
  console.log("APP started!");
});
