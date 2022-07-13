var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let chaCerto = lines.shift()


let [a,b,c,d,e] = pegarValores(lines.shift())

let certo = 0

if(a==chaCerto){
    certo++
}
if(b==chaCerto){
    certo++
}
if(c==chaCerto){
    certo++
}
if(d==chaCerto){
    certo++
}
if(e==chaCerto){
    certo++
}


console.log(certo);