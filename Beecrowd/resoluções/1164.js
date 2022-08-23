var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));
lines.shift()
let a = null
while(a = Number(lines.shift())){
  let soma = 0
  for (let i = 1; i <= a/2; i++) {
    if(a % i ==0){
      soma +=i
    }
  }
  if(soma == a){
    console.log(`${a} eh perfeito`);
  }else{
    console.log(`${a} nao eh perfeito`);
  }
  soma = 0
}