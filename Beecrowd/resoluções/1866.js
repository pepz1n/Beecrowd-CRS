var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = lines.shift()

let b

while (b = lines.shift()) {
  if(b % 2 == 0){
    console.log("0");
  }else{
    console.log("1");
  }
}