import sqlite from 'sqlite3';

var db = new sqlite.Database('./db.db', function(err){
    if (err) console.log(err)
    console.log('Conneting to the database successfully!');
})

function getUser(id) {
    return new Promise((resolve, reject)=>{
        var query = 'SELECT * FROM users WHERE id=?';
        db.get(query, [id], (err, row)=>{   
            if (err) {
                reject(err)
            }
            if (row === undefined) {
                resolve(false);
            }
            resolve(row);
        })
    })
}

function getAllUsers() {
    return new Promise ((resolve, reject) => {
        var query = "SELECT * FROM users";
        db.all(query, (err, rows) => {
            if (err) reject (err);
            if (rows === undefined) resolve(false);
            resolve(rows);
        })
    })
}

function addUser(data){
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO users (id, name, age, height, weight, job) VALUES (?, ?, ?, ?, ?, ?)";
        db.run(query, [data.id, data.name, data.age, data.height, data.weight, data.job], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}

function updateUser(id, role) {
    return new Promise((resolve, reject) => {
        var query = "UPDATE users SET job = ? WHERE id = ?";
        db.run(query, [role, id], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        var query = "DELETE FROM users WHERE id = ?";
        db.run(query, [id], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}

export { getUser, getAllUsers, addUser, updateUser, deleteUser }