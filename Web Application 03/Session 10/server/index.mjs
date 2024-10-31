import express from "express";
import bodyParser from "body-parser";
import  { getUser, getAllUsers, addUser, updateUser, deleteUser } from './db.mjs';
import cors from 'cors';

const app = express()

app.use(bodyParser.urlencoded())
app.use(express.json())

let corsOptions = {
    origin : ['http://localhost:3000'],
}

app.use(cors(corsOptions));

app.get('/api/student', (req, res) => {
    getAllUsers().
    then((results)=>{
        res.send(results)

    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.get('/api/student/:id', (req, res) => {
    getUser(req.params.id)
    .then(
        (resolve) => {
            res.status(200).send(resolve);
        }
    )
    .catch(err => res.status(404).send({ERROR: err}))
})

app.post('/api/addstudent', (req, res) => {
    addUser(req.body)
    .then((results) => {
        if (results) {
            res.status(201).send({STATUS: "DATA INSERTED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.put('/api/student/:id', (req, res) => {
    updateUser(req.params.id, req.body.role)
    .then((results) => {
        if (results) {
            res.send({STATUS: "DATA UPDATED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})

app.delete('/api/student/:id', (req, res) => {
    deleteUser(req.params.id)
    .then((results) => {
        if (results) {
            res.send({STATUS: "DATA DELETED SUCCESSFULLY"})
        }
    })
    .catch(err => res.status(404).send({ERROR: err}))
})






app.listen(8000, function(){
    console.log("Now listening to port 8000!");
})