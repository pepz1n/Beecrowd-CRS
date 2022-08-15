var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => a);

let quantidade1 = lines.shift()
let i = 0
let a = null
let b = null
let coelhos = 0
let ratos = 0
let sapos = 0
let quantidade = 0

while(i < quantidade1){
  [a, b] = pegarValores(lines.shift())
  switch (b) {
    case 'C':
      coelhos += Number(a)
      quantidade += Number(a)
      break;
    case 'R':
      ratos += Number(a)
      quantidade += Number(a)
      break
    case 'S':
      sapos += Number(a)
      quantidade += Number(a)
      break
    }
    i++
}


console.log(`Total: ${quantidade} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${((coelhos*100) / quantidade).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((ratos*100) / quantidade).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapos*100) / quantidade).toFixed(2)} %`);