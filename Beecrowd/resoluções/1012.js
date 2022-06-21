var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let pi = 3.14159;
let Atri = (a*c)/2;
let Acir = (c*c)*pi;
let Atra = ((a+b)*c)/2;
let Aqua = b*b;
let Aret = a*b;



console.log(`TRIANGULO: ${Atri.toFixed(3)}`)
console.log(`CIRCULO: ${Acir.toFixed(3)}`)
console.log(`TRAPEZIO: ${Atra.toFixed(3)}`)
console.log(`QUADRADO: ${Aqua.toFixed(3)}`)
console.log(`RETANGULO: ${Aret.toFixed(3)}`)