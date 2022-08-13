var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

 const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b ] = pegarValores(lines.shift());
if (a > b){
  console.log(`O JOGO DUROU ${24 - (a - b)} HORA(S)`)
}else if (b > a) {
  console.log(`O JOGO DUROU ${b - a} HORA(S)`)
}else{
  console.log(`O JOGO DUROU 24 HORA(S)`)
}

