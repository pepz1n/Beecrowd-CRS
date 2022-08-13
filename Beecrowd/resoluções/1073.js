var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift());

for (let i = 2; i <= a; i += 2) {
    console.log(`${i}^2 = ${i*i}`);
  
}