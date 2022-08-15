var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())
let b = Number(lines.shift())
if (a> b){
  let aux = a
  a = b
  b = aux
}
for (let i = a +1; i < b; i++) {
  if(i % 5 == 2 || i % 5 == 3){
    console.log(i);
  }
}
