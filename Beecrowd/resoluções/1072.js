var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

// let [a, b, c] = pegarValores(lines.shift());

let contagem = Number(lines.shift())
let dentro = 0
let out = 0
let a = 0
while(a = Number(lines.shift())) {
  if(a >= 10 && a <= 20) {
    dentro++
  }else{
    out++
  }
}

console.log(`${dentro} in`);
console.log(`${out} out`);