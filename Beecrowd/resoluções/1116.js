var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let contagem = Number(lines.shift())

for (let i = 0; i < contagem; i++) {
    let [x, y] = pegarValores(lines.shift())
    if(y==0){
        console.log("divisao impossivel");
    }else{
        console.log((x/y).toFixed(1));
    }

}
    

