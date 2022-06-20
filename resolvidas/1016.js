var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let Km = Number(lines.shift());

let distancia = Km*2


console.log(`${distancia} minutos`)