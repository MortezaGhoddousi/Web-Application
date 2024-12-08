import express from "express";
import bodyParser from "body-parser";
import sqlite from "sqlite3";
import cors from "cors";
import passport from "passport";
import session from "express-session"; // Import express-session
import "./passport-config.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Updated to remove trailing slash
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// Configure express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Use a secure random string for the session secret
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // Session expiration (24 hours)
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // Corrected usage

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

app.get("/profile", (req, res) => {
  res.send(req.user.username);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

app.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.send(req.user);
  }
);

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Handle the error if needed
    }
    res.redirect("/");
  });
});

app.listen(8000, () => {
  console.log("APP started!");
});
