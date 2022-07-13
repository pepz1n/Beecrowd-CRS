var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));

let soma = 0
let qntd = 0
let lido = 0

while (true) {
    lido = Number(lines.shift())
    if(lido>=0){
        soma+=lido
        qntd++
    }else{
        console.log((soma/qntd).toFixed(2));
        return
    }    
    
}
