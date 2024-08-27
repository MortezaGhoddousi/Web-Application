import express from "express";
import cookieParser from "cookie-parser";
import sqlite from "sqlite3";
import cors from 'cors';
import apiRoutes from "./apiRoutes/apiRoutes.mjs";

const db = new sqlite.Database("./database.db", (err) => {
    if (err) console.log(err);
    else console.log("Connected to database successfully!");
});

const port = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true,
}

app.use(cors(corsOptions));

app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log("Now listening on requests on " + port);
});
