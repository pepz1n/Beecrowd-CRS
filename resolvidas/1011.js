var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = Number(lines.shift());
let pi= 3.14159;

let total= ((4/3)*pi*(r*r*r));

console.log(`VOLUME = ${total.toFixed(3)}`);