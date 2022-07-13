var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let linha = lines.shift() 
let coluna = lines.shift()



if ((linha%2)==0){
    if ((coluna%2) == 0){
       console.log("1");
    }else{
       console.log("0");
    }
}else{
    if ((coluna%2)==0){
       console.log("0");
    }else{
       console.log("1");
    }
}
