import express from 'express';
import bodyParser from 'body-parser';
import router from './apiRoutes/apiRoutes.mjs';
import cors from 'cors'

const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.urlencoded());

app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true,
}))

app.use('/api', router);

app.listen(port, () => {
    console.log(`Now listening for requests on ${port}`);
})