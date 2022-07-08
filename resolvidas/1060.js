var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let d = Number(lines.shift())
let e = Number(lines.shift())
let f = Number(lines.shift())

let posi = 0;

if(a>0) posi++
if(b>0) posi++
if(c>0) posi++
if(d>0) posi++
if(e>0) posi++
if(f>0) posi++

console.log(`${posi} valores positivos`);