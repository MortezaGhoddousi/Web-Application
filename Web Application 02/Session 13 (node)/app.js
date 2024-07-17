const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var urlencodedParser = bodyParser.urlencoded( {extended: false} );

app.set('view engine', 'ejs');



app.use('/public', express.static('public'))

app.get('/', function(req, res){
    res.render('index');
})

app.get('/home', function(req, res){
    res.render('index');
})

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query, email: 'Morteza@gmail.com'});
})

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {qs: req.body});
})

app.get('/profile/:user', function(req, res){
    var data = {
        age: 30,
        job: 'developer',
        weight: 92,
        height: 1.86,
        hobbies: ['Programming', 'Study', 'Sport', 'Music', 'Art', 'Teaching']
    }

    res.render('profile', {person: req.params.user, data: data});
});


app.listen(80, function(){
    console.log('Now listening to requests on port 80');
});