import express from 'express';
import { addData, getAllData, getData, deleteData, updateData } from '../db.mjs';

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

export default router;