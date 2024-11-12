import sqlite from 'sqlite3';

const db = new sqlite.Database('./database.db', (err) => {
    if (err) console.log(err);
    console.log('Connecting to database successfully!');
})

const addUser = (data) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO user (id, username, password) VALUES (?, ?, ?)";
        db.run(sql, [data.id, data.username, data.password], (err) => {
            if (err) reject(err)
            resolve(true);
        })
    })
}

const getUser = (data) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM user WHERE username=? AND password=?";
        db.get(sql, [data.username, data.password], (err, row) => {
            if (err) reject(err)
            if (row===undefined) resolve(false)
            resolve(row);
        })
    })
}

export { addUser, getUser }