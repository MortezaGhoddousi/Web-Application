var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', (chunk)=>{
//     console.log('new chunk received!');
//     myWriteStream.write(chunk);
//     // console.log(chunk);
// })

// myReadStream.pipe(myWriteStream)

var server = http.createServer((req, res)=>{
    console.log(`Request was made: ${req.url}`);
    // var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.writeHead(200, {'Content-Type': 'text/html'});
    // myReadStream.pipe(res);
    // res.end('Hello Guys!');

    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);


});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, Now listening to port 3000');
// 


