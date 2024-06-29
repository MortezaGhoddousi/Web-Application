const counter = function(arr){
    return `There are ${arr.length} elements in this array`;
};

const adder = function (a, b){
    return `The sum of the 2 numbers is ${a+b}`;
}

const pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
