var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());


if (a>b) {
  if (a>c) {
    console.log(a);
  }else{
    console.log(c);
  }
  if (b>c) {
    console.log(b);
    console.log(c);
  }else{
    console.log(c);
    console.log(b);
  }
}