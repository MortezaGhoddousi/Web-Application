import express from 'express';
import bodyParser from 'body-parser';
import { getUser, getAllUsers, addUser, updateUser, deleteUser } from './db.mjs';

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
        res.send(results)

    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.get('/api/members/:id', (req, res) => {
    getUser(req.params.id)
    .then(
        (resolve) => {
            res.status(200).send(resolve);
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
            res.send({STATUS: "DATA DELETED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.listen(3000, function(){
    console.log('Now server is listening to port 3000');
})

module.exports = app;

