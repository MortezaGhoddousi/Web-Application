// var http = require('http');
// var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//myReadStream.on('data', function(chunk){
//    console.log('new chunk recieved!');
//    myWriteStream.write(chunk);
//})

//myReadStream.pipe(myWriteStream);


// var server = http.createServer(function(req, res){
//     console.log(`request was made: ${req.url}`);
//     //res.writeHead(200, {'Content-Type': 'text/plain'});
//     //var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     //var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     //myReadStream.pipe(res);
//     // var obj = {
//     //     fname: 'Morteza',
//     //     lname: 'Ghoddousi',
//     //     age: 30,
//     //     height: 186,
//     //     weight: 92
//     // };
//     // res.end(JSON.stringify(obj));

//     if (req.url == '/home' || req.url == '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
//     }
//     else if (req.url == '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
//     }
//     else if (req.url == '/api/students'){
//         var students = [
//             {fname: 'AmirAli', lname: 'Hosseini'},
//             {fname: 'AmirHossein', lname: 'Ramezani'},
//             {fname: 'Mohammad', lname: 'Sheibani'},
//         ]
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(students));
//     }
//     else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
//     }


// });

// server.listen(3000, 'localhost');
// console.log('yo dawgs, now listening to port 3000');

var express = require('express');

var app = express();

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
    res.send('You are viewing the profile of ' + req.params.user);
})


app.listen(3000);