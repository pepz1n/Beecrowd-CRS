var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let valido = 0
let media = 0

while (valido != 2){
  let numero = Number(lines.shift())
  if (numero > 10 || numero < 0) {
    console.log("nota invalida");
  }else{
    valido ++
    media +=numero
  }
}

console.log(`media = ${(media/2).toFixed(2)}`);

