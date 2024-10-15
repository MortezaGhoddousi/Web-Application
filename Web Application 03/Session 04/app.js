// console.log('hello from node js');

// console.log(__dirname);
// console.log(__filename);

// function sayHi(){
//     console.log('hi');
// }

// sayHi();

// var sayBye = function (){
//     console.log('buy');
// }

// sayBye();

// sayGreeting = () => {
//     console.log('greeting');
// }

// sayGreeting()

// var stuff = require('./stuff');

// console.log(stuff.counter([3, 5, 4, 8, 1, 0]));
// console.log(stuff.adder(4, 8));
// console.log(stuff.pi);

// var btn = document.querySelector('button');

// btn.addEventListener('click', function(){})

// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('click', function(msg){
//     console.log(msg);
// });


// myEmitter.on('buy', function(){
//     console.log('buy event has called!');
// });

// myEmitter.emit('click', 'greeting event has called!');

// myEmitter.emit('buy');

var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');

// fs.writeFileSync('writeMe.txt', readMe);

// console.log(readMe)
// console.log('end')

// fs.readFile('readMe.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.writeFile('writeME.txt', data, (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('end of writing');
//     });
// })

// console.log('end');

// fs.unlink('writeMe.txt', ()=>{
//     console.log('File has deleted!');
// })

// fs.mkdir('stuff', ()=>{
//     console.log('folder has created!');
// })

fs.rmdir('stuff', ()=>{
    console.log('folder has removed!');
})



