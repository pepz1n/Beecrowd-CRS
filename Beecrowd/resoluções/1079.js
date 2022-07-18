var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));


let numero = lines.shift()

for (let i = 1; i <= numero; i++) {
   let [a, b, c] = pegarValores(lines.shift())
   let resultado = (a*0.2)+(b*0.3)+(c*0.5)
   console.log(resultado.toFixed(1));   
   
}