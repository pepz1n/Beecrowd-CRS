var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => a);

let forget = Number(lines.shift())

for (let i = 0; i < forget; i++) {
  let [a, b] = pegarValores(lines.shift())
  if (a == 'Thor') {
    console.log("Y");
  }else{
    console.log("N");
  }
}