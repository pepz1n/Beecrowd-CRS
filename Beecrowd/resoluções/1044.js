var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b] = pegarValores(lines.shift())


if( b % a == 0 || a % b == 0 ) {
  console.log("Sao Multiplos")
}else{
  console.log("Nao sao Multiplos")
}