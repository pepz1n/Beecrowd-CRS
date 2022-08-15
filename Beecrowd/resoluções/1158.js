var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())
let forget = 0
let j = 0
for (let i = 0; i < a; i++) {
  let [b, c] = pegarValores(lines.shift())
  while (j < c) {
    
    if(b % 2 !== 0){
      j++
      forget+=b

    }
    b++ 
  }
  console.log(forget);
  forget = 0
  j = 0
}