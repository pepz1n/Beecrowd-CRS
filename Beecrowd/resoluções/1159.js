var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');


let resposta = 0
while (true){
  let a = Number(lines.shift())
  if (a == 0) {
    return
  }
  for (let i = 0; i < 5; a++) {
    if(a % 2 == 0){
      resposta += a
      i++
    }
  }
  console.log(resposta);
  resposta = 0
}