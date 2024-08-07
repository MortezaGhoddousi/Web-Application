import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiRouter from './apiRoutes/apiRoutes.mjs'

const app = express();

app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', apiRouter);

const port = 8000;
app.listen(port, () => {
    console.log('Now listening to requests on '+port);
})

