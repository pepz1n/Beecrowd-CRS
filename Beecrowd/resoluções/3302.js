var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let forget = lines.shift() 

for (let i = 0; i < forget; i++) {
   let oi = lines.shift()

   console.log(`resposta ${i+1}: ${oi}`);
   
}