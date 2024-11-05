import sqlite from 'sqlite3';

var db = new sqlite.Database('./students.db', function(err){
    if (err) console.log(err)
    console.log('Conneting to the database successfully!');
})

function getUser(id) {
    return new Promise((resolve, reject)=>{
        var query = 'SELECT * FROM studnet WHERE id=?';
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
        var query = "SELECT * FROM student";
        db.all(query, (err, rows) => {
            if (err) reject (err);
            if (rows === undefined) resolve(false);
            resolve(rows);
        })
    })
}

function addUser(data){
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO student (id, fname, lname, age, role) VALUES (?, ?, ?, ?, ?)";
        db.run(query, [data.id, data.fname, data.lname, data.age, data.role], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}

function updateUser(id, role) {
    return new Promise((resolve, reject) => {
        var query = "UPDATE student SET role = ? WHERE id = ?";
        db.run(query, [role, id], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        var query = "DELETE FROM student WHERE id = ?";
        db.run(query, [id], (err) => {
            if (err) reject(err);
            resolve(true);
        })
    })
}

export { getUser, getAllUsers, addUser, updateUser, deleteUser }