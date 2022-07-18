var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));


let numero = lines.shift()
let resposta = ""

for (let i = 1; i <= numero; i++) {
   console.log(`${i} ${i*i} ${i*i*i}`);
   
}