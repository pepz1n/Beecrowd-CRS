var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numeroFunc = Number(lines.shift());
let Nhoras = Number(lines.shift());
let ValorHoras = Number(lines.shift());



let salario=ValorHoras*Nhoras;
console.log(`NUMBER = ${numeroFunc}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`);