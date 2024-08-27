import express from "express";
import jwt from 'jsonwebtoken';
import { addUser, updateUser, deleteUser, getUser } from "../db.mjs";

const router = express.Router();

// USER

// add user
router.post('/user', (req, res) => {
    // res.json({STAUS: "POST REQUEST ON /api/user"});
    addUser(req.body)
    .then((result) => {
        res.status(200).json({STATUS: 'DATA ADDED'});
    })
    .catch((err) => {
        res.status(400).json({ERROR: err});
    })
})

// update user
router.put('/user/:id', (req, res) => {
    // res.json({STAUS: "PUT REQUEST ON /api/user/id"});
    updateUser(req.body.password, req.params.id)
    .then((result) => {
        res.status(200).json({STATUS: 'DATA UPDATED'});
    })
    .catch((err) => {
        res.status(400).json({ERROR: err});
    })
})

// delete user
router.delete('/user/:id', (req, res) => {
    // res.json({STAUS: "DELETE REQUEST ON /api/user/id"});
    deleteUser(req.params.id)
    .then((result) => {
        res.status(200).json({STATUS: 'DATA DELETED'});
    })
    .catch((err) => {
        res.status(400).json({ERROR: err});
    })
})

// get user
router.get('/user', (req, res) => {
    // res.json({STAUS: "GET REQUEST ON /api/user/id"});
    getUser(req.body)
    .then((result) => {
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ERROR: "No such user!"});
        }
    })
    .catch((err) => {
        res.status(400).json({ERROR: err});
    })
})

// current user
router.get('/user/login/:id', (req, res) => {
    getUser(req.params.id)
    .then((result) => {
        if (result) {
            const token = jwt.sign({username: result.username}, 'AW02', {expiresIn: '1d'});
            res.cookie('token', token);
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ERROR: "No such user!"});
        }
    })
    .catch((err) => {
        res.status(400).json({ERROR: err});
    })
})

// logout user
router.delete('/user/login/:id', (req, res) => {
    res.clearCookie('token');
    res.json("cookie cleared!");
})

export default router