var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let palavra = lines.shift() 


if(palavra.length>=10){
   console.log("palavrao");
}else{
   console.log("palavrinha");
}
