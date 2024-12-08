import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oidc";
import dotenv from "dotenv";
import sqlite from "sqlite3";

const db = new sqlite.Database("./userDatabase.db", (err) => {
  console.log(err);
});

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = (id) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * from user WHERE id=?";

      db.get(query, [id], (err, row) => {
        if (err) reject(err);
        if (row === undefined) resolve(false);
        resolve(row);
      });
    });
  };

  const user = await currentUser(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    async (issuer, profile, done) => {
      const currentUser = (id) => {
        return new Promise((resolve, reject) => {
          const query = "SELECT * from user WHERE id=?";

          db.get(query, [id], (err, row) => {
            if (err) reject(err);
            if (row === undefined) resolve(false);
            resolve(row);
          });
        });
      };

      const user = await currentUser(profile.id);

      if (!user) {
        const addUser = (data) => {
          return new Promise((resolve, reject) => {
            const sql =
              "INSERT INTO user (username, password, id) VALUES (?, ?, ?)";
            db.run(
              sql,
              [data.name.givenName, data.name.familyName, data.id],
              (err) => {
                if (err) reject(err);
                resolve(true);
              }
            );
          });
        };
        addUser(profile)
          .then((result) => {
            newUser = {
              username: profile.name.givenName,
              password: profile.name.familyName,
              id: profile.id,
            };
            done(null, newUser);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        done(null, user);
      }
    }
  )
);
