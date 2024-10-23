const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');

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

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded())
app.use(express.json())

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:name', function(req, res){

    var name = req.params.name;

    getUser(name)
    .then(
        (resolve) => {
            console.log(resolve);
            res.render('profile', {person: resolve});
        }
    )
    .catch(err => console.log(err));

})

app.get('/api/members', (req, res) => {
    getAllUsers().
    then((results)=>{
        res.status(202).send(results)

    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.get('/api/members/:id', (req, res) => {
    getUser(req.params.id)
    .then(
        (resolve) => {
            res.status(203).send(resolve);
        }
    )
    .catch(err => res.status(404).send({ERROR: err}))
})

app.post('/api/adduser', (req, res) => {
    addUser(req.body)
    .then((results) => {
        if (results) {
            res.status(201).send({STATUS: "DATA INSERTED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.put('/api/users/:id', (req, res) => {
    updateUser(req.params.id, req.body.role)
    .then((results) => {
        if (results) {
            res.send({STATUS: "DATA UPDATED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.delete('/api/users/:id', (req, res) => {
    deleteUser(req.params.id)
    .then((results) => {
        if (results) {
            res.status(204).send({STATUS: "DATA DELETED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.listen(3000, function(){
    console.log('Now server is listening to port 3000');
})

module.exports = app;

