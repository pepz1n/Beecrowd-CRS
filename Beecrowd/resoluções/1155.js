var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let s = 0

for (let i = 1; i <= 100; i++) {
  s += 1/i
  
}
console.log(s.toFixed(2));