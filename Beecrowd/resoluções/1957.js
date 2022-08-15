var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let forget = Number(lines.shift())
let hex = forget.toString(16)
console.log(hex.toUpperCase());