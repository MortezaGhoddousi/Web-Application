import sqlite from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite.Database('./mydatabase.db', () => {
    console.log('connected to database successfully!');
})

const getAllData = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM todos ";
        db.all(sql, (err, row) => {
            if (err) reject(err);
            if (row === undefined) resolve (false);
            resolve(row);
        })
    })
}

const getData = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM todos WHERE id=?";
        db.get(sql, [id], (err, row) => {
            if (err) reject(err);
            if (row === undefined) resolve (false);
            resolve(row);
        })
    })
}

const addData = (data) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO todos (id, task) VALUES (?, ?)";
        const id = uuidv4();
        db.run(sql, [id, data], (err) => {
            if (err) reject(err);
            resolve({id: id, task: data});
        })
    })
}

const deleteData = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM todos WHERE id=?";
        db.run(sql, [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}

const updateData = (id, data) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE todos SET task=? WHERE id=?";
        db.run(sql, [data, id], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}


export { addData, getAllData, getData, deleteData, updateData };