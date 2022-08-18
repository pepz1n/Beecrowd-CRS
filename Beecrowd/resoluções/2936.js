var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())

let total = 0
total += a * 300
a = Number(lines.shift())
total += a * 1500
a = Number(lines.shift())
total += a * 600
a = Number(lines.shift())
total += a * 1000
a = Number(lines.shift())
total += a * 150

console.log(total+225);

  