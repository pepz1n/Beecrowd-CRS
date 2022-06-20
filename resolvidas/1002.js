var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pi=3.14159
let r = Number(lines.shift());
let A= pi*(r*r)
A=A.toFixed(4)

console.log(`A=${A}`);