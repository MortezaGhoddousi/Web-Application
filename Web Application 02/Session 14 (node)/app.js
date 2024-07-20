const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

todoController(app);

app.listen(3000, function(){
    console.log('listening to port 3000!');
});