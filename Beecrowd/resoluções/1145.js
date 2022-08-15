var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b ] = pegarValores(lines.shift())
let forget = []
let saida = null
for (let i= 1;  i <= b; i++) {
  if(forget.length != a){
    forget.push(i)
  }else{
    saida = forget.join(' ')
    forget = []
    forget.push(i)
    console.log(saida);
  }
  
}
saida = forget.join(' ')
console.log(saida);