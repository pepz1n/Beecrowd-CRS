var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift())
let contador = 1
let forget = []
let saida = null
for (let i = 0; i < a; i++) {
  for (let j = 0; j < 3; j++) {
    forget.push(contador)
    contador++
  }
  forget.push("PUM")
  contador ++
  saida = forget.join(" ")
  console.log(saida);
  forget = []
}