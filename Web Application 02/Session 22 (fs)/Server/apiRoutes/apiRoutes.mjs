import express from 'express';
import jwt from "jsonwebtoken";
import { addData, getAllData, getData, deleteData, updateData, addUser, getUser } from '../db.mjs';

const router = express.Router();

router.get('/', (req, res) => {
    getAllData()
    .then((result)=>{
        if (!result) res.status(404).json({ERROR: 'cannot fetch data from database'});
        res.status(200).json(result);
    })
    .catch((err)=> res.status(400).json({ERROR: err}))
})

router.get('/:id', (req, res) => {
    getData(req.params.id)
    .then((result)=>{
        if (!result) res.status(404).json({ERROR: 'cannot fetch data from database'});
        res.status(200).json(result);
    })
    .catch((err)=> res.status(400).json({ERROR: err}))
})

router.post('/', (req, res) => {
    addData(req.body.task)
    .then((result)=>{
        res.status(200).json({DATA: result})
    })
    .catch((err)=> res.status(400).json({ERROR: err}))
})

router.delete('/:id', (req, res) => {
    deleteData(req.params.id)
    .then(()=>{
        res.status(200).json({STATUS: "DATA DELETED"});
    })
    .catch((err)=> res.status(400).json({ERROR: err}))
})

router.patch('/:id', (req, res) => {
    updateData(req.params.id, req.body.task)
    .then(()=>{
        res.status(200).json({STATUS: "DATA UPDATED"});
    })
    .catch((err)=> res.status(400).json({ERROR: err}))
})

router.post("/register", (req, res) => {
    addUser(req.body)
    .then((result)=>{
        res.status(200).json({DATA: result})
    })
    .catch((err)=> res.status(400).json({ERROR: err}))
})

router.post('/login', (req, res) => {
    getUser(req.body.username)
    .then((result) => {
        if (!result) res.status(404).json({ERROR: "Username not found"});
        else {
            const token = jwt.sign({username: req.body.username}, "WA02", {expiresIn: "1d"});
            res.cookie("token", token);
            res.status(200).json(result);
        }
        
    })
    .catch((err)=> {
        console.log(err);
        res.status(400).json({ERROR: err})
    })
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not authenticated" });
    } else {
        jwt.verify(token, "WA02", (err, decoded) => {
            if (err) return res.json({ Error: "Token is not okey" });
            else {
                req.username = decoded.username;
                next();
            }
        });
    }
};

router.get("/login/current", verifyUser, (req, res) => {
    res.json({ STATUS: "succeed", username: req.username });
});

router.delete("/login/current", (req, res) => {
    res.clearCookie("token");
    res.json({ STATUS: "succeed" });
});



export default router;