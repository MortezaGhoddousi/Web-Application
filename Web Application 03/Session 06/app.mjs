// var http = require('http');
// var fs = require('fs');


// var server = http.createServer((req, res)=>{
//     // console.log(`Request was made: ${req.url}`);
//     // res.writeHead(200, {'Content-Type': 'application/json'});
    
//     // var myObj = {
//     //     name: 'Morteza',
//     //     job: 'Developer',
//     //     age: 30,
//     //     isMale: true
//     // };

//     // res.end(JSON.stringify(myObj));

//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }
//     else if (req.url === '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     }
//     else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, Now listening to port 3000');

import express from 'express';
import { getUser } from './db.mjs';

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:name', function(req, res){

    var name = req.params.name;

    getUser(name)
    .then(
        (resolve) => {
            console.log(resolve);
            res.render('profile', {person: resolve});
        }
    )
    .catch(err => console.log(err));

})

app.listen(3000, function(){
    console.log('Now server is listening to port 3000');
})

