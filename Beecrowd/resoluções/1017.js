var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let  tempoGasto = Number(lines.shift());
let  VelocidadeMedia = Number(lines.shift());

let distanciaTotal = tempoGasto*VelocidadeMedia;
distanciaTotal /= 12;

console.log(distanciaTotal.toFixed(3));