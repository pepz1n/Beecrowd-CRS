var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let operacoes = Number(lines.shift())


for (let i = 0; i < operacoes; i++) {
   let [x, y] = pegarValores(lines.shift())   
   if (x>y) {
      let aux = y
      y = x
      x= aux
   }
   
   let soma = 0
   
   for (let index = x+1; index < y; index++) {
      if(index % 2 != 0 ) soma+=index
      // console.log(soma);
   }
   console.log(soma);
}  