import express from 'express';
import sqlite from 'sqlite3';
import cookieParser from 'cookie-parser'; 
import apiRoutes from './apiRoutes/apiRoutes.mjs';

const db = new sqlite.Database('./db.db', (err) => {
    if (err) console.log(err);
    else {
        console.log('Connected to database successfully!');
    }
})

const port = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log('Now listening to requests on '+ port);
})
