var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let numero = lines.shift();

for(let i = 1 ; i <= 10 ; i++) {
  console.log(`${i} x ${numero} = ${numero*i}`);
}
