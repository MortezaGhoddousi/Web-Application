var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:user', function(req, res){
    // res.send('You are viewing the profile of ' + req.params.user);
    var data = {
        age: 30,
        job: 'developer',
        weight: 92,
        height: 1.86
    }
    res.render('profile', {person: req.params.user, data: data});
});


app.listen(80);