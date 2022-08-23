var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let qntd
while(qntd = Number(lines.shift())){
  let vetor = pegarValores(lines.shift())
  let maior = 0
  for(lesma of vetor){
    if (Number(lesma) > maior) {
      maior = Number(lesma)
    }
    if(maior >= 20){
      console.log('3');
      break
    }
  }
  if (maior <10) {
    console.log('1');
  }else if(maior < 20){
    console.log('2');
  }
}