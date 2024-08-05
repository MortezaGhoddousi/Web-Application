import express from 'express';
import apiRouter from './apiRoutes/apiRoutes.mjs'

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

const port = 8000;
app.listen(port, () => {
    console.log('Now listening to requests on '+port);
})

