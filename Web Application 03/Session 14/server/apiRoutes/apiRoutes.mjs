import express from 'express';
import { addUser, getUser } from '../db.mjs';

const router = express.Router();

router.post('/adduser', (req, res) => {
    addUser(req.body)
    .then(result => {
        res.status(200).send({SUCCESS: "DATA INSERTED SUCCESSFULLY"});
    })
    .catch(
        err => (
            res.status(500).send({ERROR: err})
        )
    )
})

router.post('/user', (req, res) => {
    getUser(req.body)
    .then(result => {
        if (!result) res.status(404).send({ERROR: "NO SUCH USER"});
        res.status(200).send(result);
    })
    .catch(
        err => (
            res.status(500).send({ERROR: err})
        )
    )
})


export default router;