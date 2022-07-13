var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));

let distancia = lines.shift()



if(distancia<=800){
    console.log('1');
}else if(distancia<=1400){
    console.log('2');
}else{
    console.log('3');
}
