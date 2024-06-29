var events = require('events');

var stuff = require('./stuff');
console.log(stuff.pi);

console.log('Hello from Node.js !');

console.log(__dirname);
console.log(__filename);

function sayHello1 (name){
    console.log(`hello ${name}`);
}

const sayHello2 = (name)=>{
    console.log(`hello ${name}`);
}

const sayHello3 = function(name){
    console.log(`hello ${name}`);
}

// (function(name){
//     console.log(`hello ${name}`);
// })('Morteza')

sayHello1('morteza');
sayHello2('morteza');
sayHello3('morteza');


var myEmitter = new events.EventEmitter();

console.log(stuff.adder(4, 9));

myEmitter.on('morteza', function(){
    console.log('Morteza events has been called!');
});

myEmitter.emit('morteza');
