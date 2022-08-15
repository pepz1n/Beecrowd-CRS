var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let qtnd = Number(lines.shift())


for (let i = 0; i < qtnd; i++) {
  let [a,b] = pegarValores(lines.shift())
  console.log(a+b);
  
}