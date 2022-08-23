var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let j = 60
for (let i = 1; j > -1; i+=3, j-=5) {
  console.log(`I=${i} J=${j}`);
  
}