var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let a = Number(lines.shift())
let maiorNota= 0
let matricula = null

for (let i = 0; i < a; i++) {
  let [b, c] = pegarValores(lines.shift())
  if (c>maiorNota) {
    maiorNota = c
    matricula = b
  }

}

if (maiorNota >= 8) {
  console.log(matricula);
}else{
  console.log("Minimum note not reached");
}