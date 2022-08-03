var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c, d] = pegarValores(lines.shift());

let media = (a*0.2) + (b*0.3) + (c*0.4) + (d*0.1) 

if(media >= 7){
  console.log(`Media: ${(Math.floor(media*100)/100).toFixed(1)}`);
  console.log("Aluno aprovado.");
}else if(media >= 5){
  console.log(`Media: ${(Math.floor(media*100)/100).toFixed(1)}`);
  console.log("Aluno em exame.");
  let exame = Number(lines.shift())
  console.log(`Nota do exame: ${exame.toFixed(1)}`);
  media += exame;
  media = media/2
  if(media>=5){
    console.log("Aluno aprovado.");
    console.log(`Media final: ${(Math.floor(media*100)/100).toFixed(1)}`);
  }else{
    
    console.log("Aluno reprovado.");
    console.log(`Media final: ${(Math.floor(media*100)/100).toFixed(1)}`);
  }
}else{
  console.log(`Media: ${(Math.floor(media*100)/100).toFixed(1)}`);
  console.log("Aluno reprovado.");
}