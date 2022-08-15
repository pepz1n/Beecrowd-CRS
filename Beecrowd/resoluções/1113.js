var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

while (true) {
  let [a, b] = pegarValores(lines.shift())
  if( a == b) {
    return
  }else if (a > b){
    console.log("Decrescente");
  }else{
    console.log("Crescente");
  }
  
}