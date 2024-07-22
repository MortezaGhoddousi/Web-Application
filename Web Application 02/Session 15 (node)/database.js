const sqlite = require('sqlite3');

function database (body){
    const db = new sqlite.Database('./database.db', (err) => {
        if (err) {
            console.error('Error connecting to the database', err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });


    

    
    const addData = function(){
        return new Promise(function(resolve, reject){
            const id = Math.round(Math.random()*10000);
            const sql = 'INSERT INTO data(id, task) VALUES(?, ?)';
            db.run(sql, [id, body.item], function(err){
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

module.exports = database;
