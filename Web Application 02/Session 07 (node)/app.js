const fs = require("fs");

//var readMe = fs.readFileSync('readMe.txt', 'utf8');

//console.log(readMe);

//fs.writeFileSync('write.txt', readMe)

//fs.readFile('readMe.txt', 'utf8', function(error, data){
//    if (error) console.log(error);
//    fs.writeFile('writeMe.txt', data, function(err, data){
//        console.log('yay, you write the file');
//    });
//    console.log(data);
//})

//fs.unlink('writeMe.txt', function(err){
//    if (err) throw err;
//    console.log('WriteMe.txt file was deleted!');
//});

//fs.mkdirSync('stuff');

//fs.mkdir('stuffAsync', function(){
//    console.log('The folder has been created!');
//})

fs.rmdir("stuff", function () {
    console.log("The folder has been deleted!");
});

console.log("The end");
