var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = (lines.shift());
let salario = Number(lines.shift());
let Vendas = Number(lines.shift());



let salarioTotal=Vendas*0.15;
salarioTotal+=salario;
console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);