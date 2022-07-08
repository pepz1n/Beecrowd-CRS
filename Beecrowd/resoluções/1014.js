var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));

let Km = Number(lines.shift());

let distancia = Km*2


console.log(`${distancia} minutos`)