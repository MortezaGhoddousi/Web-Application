const sqlite = require('sqlite3');
const { v4: uuidv4 } = require('uuid');

const db = new sqlite.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

function database (body){
 
    const addData = function(){
        return new Promise(function(resolve, reject){
            const sql = 'INSERT INTO data(id, task) VALUES(?, ?)';
            db.run(sql, [uuidv4(), body.item], function(err){
                if(err){
                    reject(err);
                }
                else {
                    resolve('data saved!');
                }
            })
        })
    }

    addData()
    .then(function(a){
        console.log(a);
    })
    .catch(function(err){
        console.log(err);
    })


}

const getData = function(){
    return new Promise(function(resolve, reject){
        const sql = "SELECT * FROM data";
        db.all(sql, function(err, row){
            if (err) reject(err);
            else resolve(row);
        })
    })
}

const deleteData = function(data){
    return new Promise(function(resolve, reject){
        const sql = "DELETE FROM data WHERE task=?";
        db.run(sql, [data], function(err){
            if (err) reject(err);
            else resolve('data deleted!');
        })
    })
}

module.exports = {database, getData, deleteData};
