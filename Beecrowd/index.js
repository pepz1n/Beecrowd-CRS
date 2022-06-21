var input = require('fs').readFileSync('CRS/Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [x1, y1] = pegarValores(lines.shift());
let [x2, y2] = pegarValores(lines.shift());

let soma1= (x2-x1)*(x2-x1)
let soma2= (y2-y1)*(y2-y1)
let total=  soma1+soma2
total= Math.sqrt(total)
console.log(`${total.toFixed(4)}`);