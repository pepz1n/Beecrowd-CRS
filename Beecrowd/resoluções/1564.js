var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => a);


while (a = lines.shift()){
  if(a == 0){
    console.log("vai ter copa!");
  }else{
    console.log("vai ter duas!");
  }
}