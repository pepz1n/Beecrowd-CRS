var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a,b] = pegarValores(lines.shift());  

if (a > 0 ){
  if (b > 0){
    console.log("Q1");
  }else if (b == 0){
    console.log("Eixo X");
  }else{
    console.log("Q4");
  }
}else if(a < 0){
  if (b > 0){
    console.log("Q2");
  }else if (b == 0){
    console.log("Eixo X");
  }else{
    console.log("Q3");
  }
}else if (a == 0){
  if (b == 0){
    console.log("Origem");
  }else{
    console.log("Eixo Y");
  }
}