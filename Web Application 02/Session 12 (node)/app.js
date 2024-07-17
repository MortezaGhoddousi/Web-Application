// libraries
const express = require('express');

// invoking express module
const app = express();

// setting ejs by view engin
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res)=>{
    res.render('index', {check: false});
})

app.get('/home', (req, res)=>{
    res.render('index', {check: false});
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.get('/signup', (req, res)=>{
    res.render('signup');
})

app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.get('/profile/:user', (req, res)=>{
    res.render('profile', {user: req.params.user, check: true});
})

// listening
app.listen(3000, ()=>{
    console.log('Now listening to port 3000!');
})

