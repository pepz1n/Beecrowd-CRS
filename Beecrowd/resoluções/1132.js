var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())
let b = Number(lines.shift())
if (a> b){
  let aux = a
  a = b
  b = aux
}
let soma = 0
for (let i = a; i <= b; i++) {
  if(i %13 != 0){
    soma += i
  }
}

console.log(soma);