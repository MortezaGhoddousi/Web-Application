var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/names.txt", "utf8");

myReadStream.on("data", function (chunk) {
    console.log("new chunk recieved: ");
    console.log(chunk);
});

var server = http.createServer(function (req, res) {
    console.log("request was made: " + req.url);
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hey guys! especially Mohammad!");
});

server.listen(3000, "localhost");
console.log("yo dawgs, now listening to port 3000");
