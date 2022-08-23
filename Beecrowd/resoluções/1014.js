var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let km = Number(lines.shift())
let lts = Number(lines.shift())

console.log(`${(km/lts).toFixed(3)} km/l`);