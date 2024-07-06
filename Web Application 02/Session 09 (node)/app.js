var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//myReadStream.on('data', function(chunk){
//    console.log('new chunk recieved!');
//    myWriteStream.write(chunk);
//})

//myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
    console.log(`request was made: ${req.url}`);
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    //var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    //myReadStream.pipe(res);
    var obj = {
        fname: 'Morteza',
        lname: 'Ghoddousi',
        age: 30,
        height: 186,
        weight: 92
    };
    res.end(JSON.stringify(obj));

});

server.listen(3000, 'localhost');
console.log('yo dawgs, now listening to port 3000');