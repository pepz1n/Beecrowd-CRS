var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let  valor = Number(lines.shift());
let aux;


let cem;
let cinquenta; 
let vinte;
let dez;
let cinco;
let dois;
let um;

cem = Math.trunc(valor/100);
aux = valor%100;
cinquenta = Math.trunc(aux/50);
aux = aux%50;
vinte = Math.trunc(aux/20);
aux = aux%20;
dez = Math.trunc(aux/10);
aux = aux%10;
cinco = Math.trunc(aux/5);
aux = aux%5;
dois = Math.trunc(aux/2);
aux = aux%2;
um = Math.trunc(aux/1);

console.log(valor)
console.log(`${cem} nota(s) de R$ 100,00`)
console.log(`${cinquenta} nota(s) de R$ 50,00`)
console.log(`${vinte} nota(s) de R$ 20,00`)
console.log(`${dez} nota(s) de R$ 10,00`)
console.log(`${cinco} nota(s) de R$ 5,00`)
console.log(`${dois} nota(s) de R$ 2,00`)
console.log(`${um} nota(s) de R$ 1,00`)

