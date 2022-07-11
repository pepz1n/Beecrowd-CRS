var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

    //const pegarValores = (line) => line.split(" ").map(a => Number(a));
let numero = Number(lines.shift())

for (let i = 1; i <= 10000; i++) {
    if(i%numero ===2) console.log(i);
    
}