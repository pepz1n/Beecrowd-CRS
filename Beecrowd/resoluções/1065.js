var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let posi = 0
for (let i = 0; i <5; i++) {
    let forget = Number(lines.shift());
   
    
    if(forget%2 === 0 ){
        posi++

       
    } 
}

console.log(`${posi} valores pares`);
