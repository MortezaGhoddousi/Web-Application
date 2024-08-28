import sqlite from "sqlite3";
import { v4 as uuidv4 } from "uuid";
import jwt from 'jsonwebtoken';


const db = new sqlite.Database("./database.db", (err) => {
    if (err) console.log(err);
});

// WORKOUTS

// get all workouts
const getAllWorkouts = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM workout WHERE user=?";
        db.all(sql, [user], (err, row) => {
            if (err) reject(err);
            if (row == undefined) resolve(false);
            resolve(row);
        });
    });
};

// get a workout
const getWorkout = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM workout WHERE id=?";
        db.get(sql, [id], (err, row) => {
            if (err) reject(err);
            if (row == undefined) resolve(false);
            resolve(row);
        });
    });
};

// add a workout
const addWorkout = (workout) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO workout (id, title, weight, reps, user) VALUES(?, ?, ?, ?, ?)";
        const id = uuidv4();
        db.run(sql, [id, workout.workout.title, workout.workout.weight, workout.workout.reps, workout.username], (err) => {
            if (err) reject(err);
            resolve({
                id: id,
                title: workout.workout.title,
                weight: workout.workout.weight,
                reps: workout.workout.reps,
                username: workout.username,
            });
        });
    });
};

// delete a workout
const deleteWorkout = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM workout WHERE id=?";
        db.get(sql, [id], (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
};

// update a workout
const updateWorkout = (id, workout) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE workout set workout=? WHERE id=?";
        db.get(sql, [workout.workout, id], (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
};

// USERS
// get a user
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM user WHERE id=?";
        db.get(sql, [id], (err, row) => {
            if (err) reject(err);
            if (row == undefined) resolve(false);
            resolve(row);
        });
    });
};

// add a user
const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql =
            "INSERT INTO user (id, username, password, email) VALUES(?, ?, ?, ?)";
        const id = uuidv4();
        db.run(sql, [id, user.username, user.password, user.email], (err) => {
            if (err) reject(err);
            resolve({
                id: id,
                username: user.username,
                password: user.password,
                email: user.email,
            });
        });
    });
};

// delete a user
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM user WHERE id=?";
        db.get(sql, [id], (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
};

// update a user
const updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE user set password=? WHERE id=?";
        db.get(sql, [user.password, id], (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const loginUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM user WHERE username=? AND password=?";
        db.get(sql, [user.username, user.password], (err, row) => {
            if (err) reject(err);
            if (row === undefined) resolve(false);
            resolve(row);
        });
    });
}

const authorizedUser = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            resolve("Unauthorized User!");
        }
        jwt.verify(token, "WA02", (err, decoded) => {
            if (err) reject(err)
            resolve ({username: decoded.username})
        });
    }); 
}

export {
    addUser,
    getUser,
    deleteUser,
    updateUser,
    getAllWorkouts,
    getWorkout,
    addWorkout,
    deleteWorkout,
    updateWorkout,
    loginUser,
    authorizedUser
};
