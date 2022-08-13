var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a,b,c] = pegarValores(lines.shift());  

if(a+b>c && b+c>a && a+c>b ){
  console.log(`Perimetro = ${(a+b+c).toFixed(1)}`);
}else{
  let area = (a+b) * c
  console.log(`Area = ${(area/2).toFixed(1)}`);
}