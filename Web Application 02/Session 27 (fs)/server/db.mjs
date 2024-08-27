import sqlite from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite.Database('./db.db', (err) => {
    if (err) console.log(err);
})

const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO user(id, username, password, email) VALUES (?, ?, ?, ?)";
        db.run(sql, [uuidv4(), user.username, user.password, user.email], (err) => {
            if(err) reject(err);
            resolve(true);
        })
    })
}

const updateUser = (password, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE user SET password=? WHERE id=?";

        db.run(sql, [password, id], (err) => {
            if(err) reject(err);
            resolve (true);
        })
    })
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM user WHERE id=?";

        db.run(sql, [id], (err) => {
            if(err) reject(err);
            resolve (true);
        })
    })
}

const getUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM user WHERE username=? AND password=?";

        db.get(sql, [user.username, user.password], (err, row) => {
            if(err) reject(err);
            if (row === undefined) resolve(false);
            resolve (row);
        })
    })
}

const checkUser = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM user WHERE id=?";

        db.get(sql, [id], (err, row) => {
            if(err) reject(err);
            if (row === undefined) resolve(false);
            resolve (row);
        })
    })
}


export {addUser, updateUser, deleteUser, getUser}

