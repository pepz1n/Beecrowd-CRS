var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let numero = null;
let posicao = 1;
let numeroMaior = 0;
let posicaoMaior = 0;

while(numero = Number(lines.shift())){
  if(numero > numeroMaior){
    numeroMaior = numero;
    posicaoMaior = posicao;
  }
  posicao ++;
} 

console.log(numeroMaior);
console.log(posicaoMaior);