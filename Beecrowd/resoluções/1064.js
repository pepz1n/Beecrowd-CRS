var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let media = 0
let posi = 0
for (let i = 0; i <6; i++) {
    let forget = Number(lines.shift());
    // console.log(media);
    // console.log(`forget ${forget}`);
    
    if(forget> 0 ){
        posi++
        media += forget
       
    } 
}

console.log(`${posi} valores positivos`);
console.log((media/posi).toFixed(1));