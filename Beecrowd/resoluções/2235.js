var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [A, B, C] = pegarValores(lines.shift())



if((A-B)==0||(A-C)==0||(B-C)==0){
    console.log("S");
}else if((A+B-C)==0||(B-A+C)==0||(C-A+B)==0){
    console.log("S");
}else if((A-B-C)==0||(B-A-C)==0||(C-A-B)==0){
    console.log("S");
}else{
    console.log("N");
}

