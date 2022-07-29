var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));


let salario = Number(lines.shift())
let forget = []


for (let index = 0; index < salario; index++) {
   if (index == salario-1) {
      forget.push('Ho!')
   }else{
      forget.push("Ho ")
   }
}
console.log(forget.join(''));