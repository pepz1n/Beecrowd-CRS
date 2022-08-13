var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

// let [a, b, c] = pegarValores(lines.shift());

let maior = Number(lines.shift())
let menor = Number(lines.shift())
if(menor > maior){
  let aux = menor
  menor = maior
  maior = aux
}
let soma = 0
for(let i = menor+1; i < maior; i++) {
  if(i % 2 != 0){
    soma += i
  }
}
console.log(soma);