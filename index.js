var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));
const pegarValores = (line) => line.split(" ").map(a => Number(a));
let a = lines.shift()
let b = pegarValores(lines.shift())

let multiplo2 = 0 -1
let multiplo3 = 0 -1
let multiplo4 = 0 -1
let multiplo5 = 0 -1



b.forEach(number => {
  if(number %2 === 0){
    multiplo2++
  }
  if(number %3 === 0){
    multiplo3++
  }
  if(number % 4 === 0){
    multiplo4++
  }
  if(number %5 === 0){
    multiplo5++
  }
});

console.log(`${multiplo2} Multiplo(s) de 2`);
console.log(`${multiplo3} Multiplo(s) de 3`);
console.log(`${multiplo4} Multiplo(s) de 4`);
console.log(`${multiplo5} Multiplo(s) de 5`);