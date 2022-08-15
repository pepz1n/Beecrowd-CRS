var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

while (true){
  let [a, b] = pegarValores(lines.shift())
  if (a == 0 || b == 0) {
    return
  }
  if (a > 0) {
    if(b > 0 ){
      console.log("primeiro");
    }else{
      console.log("quarto");
    }
  }else{
    if(b > 0 ){
      console.log("segundo");
    }else{
      console.log("terceiro");
    }
  }
}

