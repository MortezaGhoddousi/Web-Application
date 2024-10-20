import sqlite from 'sqlite3';

var db = new sqlite.Database('./db.db', function(err){
    if (err) console.log(err)
    console.log('Conneting to the database successfully!');
})

function getUser(name) {
    return new Promise((resolve, reject)=>{
        var query = 'SELECT * FROM users WHERE name=?';
        db.get(query, [name], (err, row)=>{   
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

export { getUser }